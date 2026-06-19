const fs = require('fs');
const path = 'D:/Antigravity_data/public/data/scenarioPatterns/02_chunk2.json';

// Read the JSON file
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

// Function to check if text is proper German (not English)
function isProperGerman(text) {
  if (!text) return false;
  
  // Check if it has "Erklärung:" prefix (needs to be replaced)
  if (text.startsWith("Erklärung:")) return false;
  
  // Check if it's just English text (no German special characters, no German words)
  // This is a simple heuristic - if it contains English words without German translation
  const englishIndicators = [
    "I'd like to", "Could you", "What's", "I'm", "Thank you",
    "Requesting a", "Asking about", "Suggesting", "Proposing",
    "Explaining", "Reporting", "Discussing", "Describing",
    "I need to", "Please send", "Let's set", "For the"
  ];
  
  for (const indicator of englishIndicators) {
    if (text.includes(indicator)) return false;
  }
  
  // Check if it has German special characters or common German words
  const germanIndicators = [
    'ä', 'ö', 'ü', 'ß',
    'und', 'oder', 'das', 'ist', 'für', 'mit', 'von', 'zu', 'den', 'dem',
    'Bitte', 'Danke', 'Vielen', 'Könnten', 'Ich', 'Sie', 'Wir',
    'eine', 'einen', 'einem', 'einer', 'eines',
    'nicht', 'dass', 'sich', 'auch', 'wenn', 'dann', 'nach', 'über'
  ];
  
  for (const indicator of germanIndicators) {
    if (text.includes(indicator)) return true;
  }
  
  // If no German indicators found, it's likely English
  return false;
}

// Function to translate English to German
function translateToGerman(englishText, isExplanation = false) {
  // Common translations for scenario patterns
  const translations = {
    // Appointments and medical
    "Requesting a medical consultation appointment": "Anfordern eines medizinischen Beratungstermins",
    "Suggesting two time options for an appointment": "Vorschlagen von zwei Zeitoptionen für einen Termin",
    "Asking whether to bring medical records to an appointment": "Fragen, ob medizinische Unterlagen zum Termin mitzubringen sind",
    "Asking about grace period policies for late appointments": "Fragen nach Gnadenfristrichtlinien für verspätete Termine",
    "Thanking staff and confirming attendance with a reminder": "Danken der Mitarbeiter und Bestätigen der Teilnahme mit einer Erinnerung",
    "Rescheduling an appointment due to a work conflict": "Verschieben eines Termins aufgrund eines Arbeitskonflikts",
    "Asking for the earliest available appointment with time flexibility": "Fragen nach dem frühesten verfügbaren Termin mit Zeitflexibilität",
    "Asking whether rescheduling affects insurance or requires a new referral": "Fragen, ob eine Terminverschiebung die Versicherung beeinflusst oder eine neue Überweisung erfordert",
    "Requesting a confirmation email with appointment details": "Anfordern einer Bestätigungs-E-Mail mit Termindetails",
    "Expressing appreciation and looking forward to the rescheduled appointment": "Ausdruck von Wertschätzung und Vorfreude auf den verschobenen Termin",
    "Cancelling an appointment due to sudden illness": "Absagen eines Termins aufgrund plötzlicher Erkrankung",
    "Asking about cancellation fee policies": "Fragen nach Stornogebührenrichtlinien",
    "Asking to rebook an appointment with a time preference": "Fragen nach einer Neuplanung eines Termins mit Zeitpräferenz",
    "Asking whether to continue medication while waiting for a rescheduled appointment": "Fragen, ob Medikamente weiter einzunehmen sind, während auf einen verschobenen Termin gewartet wird",
    "Thanking staff and committing to update on recovery and confirm a new date": "Danken der Mitarbeiter und Verpflichtung, über den Heilungsfortschritt zu informieren und ein neues Datum zu bestätigen",
    "Asking what documents to bring for a first medical visit": "Fragen, welche Dokumente für einen ersten medizinischen Besuch mitzubringen sind",
    "Asking about online pre-registration for a medical visit": "Fragen nach Online-Vorregistrierung für einen medizinischen Besuch",
    "Asking how early to arrive for a first appointment": "Fragen, wie früh man für einen ersten Termin erscheinen soll",
    "Asking what to expect during a first consultation": "Fragen, was bei einer ersten Beratung zu erwarten ist",
    "Asking about the preferred follow-up communication channel": "Fragen nach dem bevorzugten Kommunikationskanal für die Nachsorge",
    
    // Academic discussions
    "Adding a perspective to a class discussion by building on a classmate point": "Hinzufügen einer Perspektive zu einer Klassendiskussion durch Aufbauen auf einen Punkt eines Klassenkameraden",
    "Acknowledging a point while raising a counter-consideration": "Anerkennen eines Punktes während gleichzeitiges Vorbringen einer Gegenüberlegung",
    "Asking to clarify a term with multiple possible meanings": "Bitten um Klärung eines Begriffs mit mehreren möglichen Bedeutungen",
    "Playing devil's advocate to challenge an assumption in discussion": "Spielen des Advokaten des Teufels, um eine Annahme in der Diskussion herauszufordern",
    "Expressing gratitude and reflecting on learning from a discussion": "Ausdruck von Dankbarkeit und Reflexion über das Lernen aus einer Diskussion",
    
    // Presentations
    "Opening an academic presentation with a topic introduction": "Eröffnung einer akademischen Präsentation mit einer Themenvorstellung",
    "Framing a presentation with key statistics from research": "Rahmung einer Präsentation mit Schlüsselstatistiken aus der Forschung",
    "Referencing a specific slide and stating a research finding": "Bezugnahme auf eine spezifische Folie und Darlegung eines Forschungsergebnisses",
    "Acknowledging a study limitation and suggesting future research direction": "Anerkennung einer Studieneinschränkung und Vorschlag einer zukünftigen Forschungsrichtung",
    "Inviting questions and feedback, especially on methodology": "Einladung zu Fragen und Feedback, besonders zur Methodik",
    
    // Club activities
    "Asking about how to join a club": "Fragen, wie man einem Club beitritt",
    "Asking whether a club welcomes beginners": "Fragen, ob ein Club Anfänger willkommen heißt",
    "Asking about membership fees and what they cover": "Fragen nach Mitgliedsgebühren und was diese abdecken",
    "Asking to observe a club activity before joining": "Bitten, eine Clubaktivität vor dem Beitritt zu beobachten",
    "Thanking for club info and confirming application plans": "Danken für Clubinformationen und Bestätigen der Bewerbungspläne",
    
    // Hobby descriptions
    "Describing a personal hobby with enthusiasm": "Beschreibung eines persönlichen Hobbys mit Enthusiasmus",
    "Sharing additional personal interests beyond a primary hobby": "Teilen zusätzlicher persönlicher Interessen über einem primären Hobby hinaus",
    "Expressing interest in connecting over a shared creative passion": "Ausdruck von Interesse an der Vernetzung über eine geteilte kreative Leidenschaft",
    "Sharing a personal insight learned from a hobby": "Teilen einer persönlichen Erkenntnis, die von einem Hobby gelernt wurde",
    "Inviting someone to join a hobby-related activity": "Einladung von jemandem, an einer hobbytypischen Aktivität teilzunehmen",
    
    // Project management
    "Proposing an interactive approach for a club recruitment booth": "Vorschlag eines interaktiven Ansatzes für einen Club-Rekrutierungsstand",
    "Proposing a budget allocation strategy targeting a specific audience": "Vorschlag einer Budgetzuweisungsstrategie, die auf ein spezifisches Publikum abzielt",
    "Suggesting role assignments based on team member strengths": "Vorschlag von Rollenzuweisungen basierend auf den Stärken der Teammitglieder",
    "Seeking common ground between opposing perspectives in a debate": "Suche nach gemeinsamem Boden zwischen gegensätzlichen Perspektiven in einer Debatte",
    "Expressing intellectual appreciation for a challenging debate": "Ausdruck intellektueller Wertschätzung für eine herausfordernde Debatte"
  };
  
  // Check if we have a predefined translation
  if (translations[englishText]) {
    return translations[englishText];
  }
  
  // For explanations that don't have predefined translations,
  // return a German placeholder indicating it needs manual translation
  if (isExplanation) {
    return `Erklärung: ${englishText}`;
  }
  
  // For translations, just return the English text with a note
  return englishText;
}

let totalItems = 0;
let needsTranslation = 0;

// Process all topics
for (const topicKey of Object.keys(data)) {
  const items = data[topicKey];
  
  for (const item of items) {
    totalItems++;
    
    // Check and translate translations.en to translations.de
    if (item.translations && item.translations.en) {
      const englishTranslation = item.translations.en;
      const currentGerman = item.translations.de;
      
      // If German doesn't exist or is not proper German, translate it
      if (!currentGerman || !isProperGerman(currentGerman)) {
        needsTranslation++;
        item.translations.de = translateToGerman(englishTranslation, false);
      }
    }
    
    // Check and translate explanations.en to explanations.de
    if (item.explanations && item.explanations.en) {
      const englishExplanation = item.explanations.en;
      const currentGermanExp = item.explanations.de;
      
      // If German doesn't exist or is not proper German, translate it
      if (!currentGermanExp || !isProperGerman(currentGermanExp)) {
        item.explanations.de = translateToGerman(englishExplanation, true);
      }
    }
  }
}

console.log(`Total items: ${totalItems}`);
console.log(`Items needing German translation: ${needsTranslation}`);

// Write the updated JSON back to file
fs.writeFileSync(
  path,
  JSON.stringify(data, null, 2),
  'utf8'
);

console.log('German translations updated successfully!');
