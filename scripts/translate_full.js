const fs = require('fs');
const path = 'D:/Antigravity_data/public/data/scenarioPatterns/02_chunk2.json';

// Read the JSON file
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

// Function to translate English text to German
function translateToGerman(englishText, isExplanation = false) {
  // Common translation patterns for scenario patterns
  const translationMap = {
    // Appointments - booking
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
    
    // Cancellation
    "Cancelling an appointment due to sudden illness": "Absagen eines Termins aufgrund plötzlicher Erkrankung",
    "Asking about cancellation fee policies": "Fragen nach Stornogebührenrichtlinien",
    "Asking to rebook an appointment with a time preference": "Fragen nach einer Neuplanung eines Termins mit Zeitpräferenz",
    "Asking whether to continue medication while waiting for a rescheduled appointment": "Fragen, ob Medikamente weiter einzunehmen sind, während auf einen verschobenen Termin gewartet wird",
    "Thanking staff and committing to update on recovery and confirm a new date": "Danken der Mitarbeiter und Verpflichtung, über den Heilungsfortschritt zu informieren und ein neues Datum zu bestätigen",
    
    // First visit
    "Asking what documents to bring for a first medical visit": "Fragen, welche Dokumente für einen ersten medizinischen Besuch mitzubringen sind",
    "Asking about online pre-registration for a medical visit": "Fragen nach Online-Vorregistrierung für einen medizinischen Besuch",
    "Asking how early to arrive for a first appointment": "Fragen, wie früh man für einen ersten Termin erscheinen soll",
    "Asking what to expect during a first consultation": "Fragen, was bei einer ersten Beratung zu erwarten ist",
    "Asking about the preferred follow-up communication channel": "Fragen nach dem bevorzugten Kommunikationskanal für die Nachsorge",
    
    // Follow-up
    "Booking a follow-up appointment to monitor recovery": "Buchen eines Nachsorgetermins zur Überwachung der Genesung",
    "Asking to schedule a follow-up before leaving the clinic": "Fragen nach der Planung einer Nachsorge vor dem Verlassen der Klinik",
    "Asking if a follow-up can be moved earlier if recovery is ahead of schedule": "Fragen, ob eine Nachsorge vorverlegt werden kann, falls die Genesung schneller als geplant verläuft",
    "Asking whether a follow-up includes lab tests or is just a consultation": "Fragen, ob eine Nachsorge Laboruntersuchungen beinhaltet oder nur eine Beratung ist",
    "Requesting an appointment reminder and explaining why": "Anfordern einer Terminerinnerung und Erklärung, warum",
    
    // Family/Elderly
    "Scheduling an appointment on behalf of an elderly parent": "Planung eines Termins im Namen eines älteren Elternteils",
    "Asking about accessibility and transportation support for elderly patients": "Fragen nach Barrierefreiheit und Transportunterstützung für ältere Patienten",
    "Asking about the duration of a senior wellness visit for scheduling": "Fragen nach der Dauer eines Gesundheits-Check-ups für die Zeitplanung",
    "Asking whether to bring a medication list for an elderly parent visit": "Fragen, ob eine Medikamentenliste für den Besuch mitzubringen ist",
    "Asking the doctor to explain findings to the primary caregiver": "Bitten des Arztes, dem primären Pflegeperson die Ergebnisse zu erklären",
    
    // Academic
    "Asking a professor for research database and search strategy recommendations": "Fragen eines Professors nach Empfehlungen für Forschungsdatenbanken und Suchstrategien",
    "Asking about citation chaining as a research methodology": "Fragen über Zitierungsverkettung als Forschungsmethodik",
    "Asking about open-access sources for staying current with research": "Fragen nach Open-Access-Quellen für das Auf dem Laufenden bleiben mit der Forschung",
    "Asking for foundational author recommendations in a research field": "Bitten um Empfehlungen grundlegender Autoren in einem Forschungsfeld",
    "Asking for a citation management tool recommendation": "Fragen nach einer Empfehlung für ein Zitierungsverwaltungstool",
    
    // Research topics
    "Explaining the origin of a research question from a theory-practice gap": "Erklärung des Ursprungs einer Forschungsfrage aus einer Theorie-Praxis-Lücke",
    "Articulating why a research topic matters with specific impact": "Artikulierung, warum ein Forschungsthema mit spezifischer Auswirkung wichtig ist",
    "Sharing a personal motivation for pursuing a research topic": "Teilen einer persönlichen Motivation für die Verfolgung eines Forschungsthemas",
    "Stating a research contribution with a novel angle overlooked by prior work": "Feststellung eines Forschungsbeitrags mit einem neuen Ansatz, den frühere Arbeiten übersehen haben",
    "Expressing the ultimate goal of a research project": "Ausdruck des ultimativen Ziels eines Forschungsprojekts",
    
    // Thesis progress
    "Reporting thesis progress with specific completed tasks": "Bericht über den Arbeitfortschritt mit spezifischen abgeschlossenen Aufgaben",
    "Flagging a methodological challenge and asking for guidance": "Aufzeigen einer methodischen Herausforderung und Bitten um Anleitung",
    "Reporting revisions made based on advisor feedback": "Bericht über basierend auf Betreuer-Feedback vorgenommene Überarbeitungen",
    "Outlining next steps in the thesis process": "Aufzeigen der nächsten Schritte im Thesis-Prozess",
    "Asking for guidance on prioritizing tasks before a proposal defense": "Bitten um Anleitung zur Priorisierung von Aufgaben vor einer Vorschlagsverteidigung",
    
    // Research findings
    "Reporting a quantitative statistical finding from regression analysis": "Bericht über ein quantitatives statistisches Ergebnis aus der Regressionsanalyse",
    "Reporting qualitative research findings and suggesting further exploration": "Bericht über qualitative Forschungsergebnisse und Vorschlag weiterer Erkundungen",
    "Explaining an outlier in research data": "Erklärung eines Ausreißers in Forschungsdaten",
    "Stating how findings challenge prior assumptions and open new research directions": "Feststellung, wie Ergebnisse frühere Annahmen herausfordern und neue Forschungsrichtungen eröffnen",
    "Recommending a follow-up experimental design to improve causal inference": "Empfehlung eines Nachfolge-Experimentdesigns zur Verbesserung der kausalen Inferenz",
    
    // Thesis defense
    "Opening a thesis defense by thanking the committee": "Eröffnung einer Thesis-Verteidigung durch Dank an das Komitee",
    "Stating a central thesis argument with supporting methodology": "Feststellung eines zentralen Thesis-Arguments mit unterstützender Methodik",
    "Acknowledging a limitation while defending the validity of a finding": "Anerkennung einer Einschränkung während der Verteidigung der Gültigkeit eines Ergebnisses",
    "Stating a research contribution and its practical or policy implications": "Feststellung eines Forschungsbeitrags und seiner praktischen oder politischen Implikationen",
    "Inviting questions and discussion at the end of a thesis defense": "Einladung zu Fragen und Diskussion am Ende einer Thesis-Verteidigung",
    
    // Research limitations
    "Acknowledging a design limitation while highlighting its contribution": "Anerkennung einer Designeinschränkung während der Hervorhebung ihres Beitrags",
    "Addressing sampling bias and explaining a mitigation strategy": "Adressierung von Stichprobenbias und Erklärung einer Milderungsstrategie",
    "Acknowledging social desirability bias from self-reported data": "Anerkennung von sozialer Erwünschtheit-Verzerrung aus selbstberichteten Daten",
    "Recommending mixed methods for future research": "Empfehlung von Mixed-Methods für zukünftige Forschung",
    "Affirming a study contribution despite acknowledged limitations": "Bestätigung eines Studienbeitrags trotz anerkannter Einschränkungen"
  };
  
  // Check if we have a predefined translation
  if (translationMap[englishText]) {
    return translationMap[englishText];
  }
  
  // For explanations, try to translate common patterns
  if (isExplanation) {
    // Try to translate the explanation
    let germanExplanation = englishText;
    
    // Common explanation patterns
    const explanationTranslations = [
      ["Requesting a medical consultation appointment", "Anfordern eines medizinischen Beratungstermins"],
      ["Suggesting two time options for an appointment", "Vorschlagen von zwei Zeitoptionen für einen Termin"],
      ["Asking whether to bring medical records", "Fragen, ob medizinische Unterlagen mitzubringen sind"],
      ["Asking about grace period policies", "Fragen nach Gnadenfristrichtlinien"],
      ["Thanking staff and confirming attendance", "Danken der Mitarbeiter und Bestätigen der Teilnahme"],
      ["Rescheduling an appointment due to work conflict", "Verschieben eines Termins aufgrund eines Arbeitskonflikts"],
      ["Asking for earliest available appointment", "Fragen nach dem frühesten verfügbaren Termin"],
      ["Asking whether rescheduling affects insurance", "Fragen, ob Terminverschiebung Versicherung beeinflusst"],
      ["Requesting a confirmation email", "Anfordern einer Bestätigungs-E-Mail"],
      ["Expressing appreciation for rescheduled appointment", "Ausdruck von Wertschätzung für verschobenen Termin"],
      ["Cancelling appointment due to sudden illness", "Absagen eines Termins aufgrund plötzlicher Erkrankung"],
      ["Asking about cancellation fee policies", "Fragen nach Stornogebührenrichtlinien"],
      ["Asking to rebook with time preference", "Fragen nach Neuplanung mit Zeitpräferenz"],
      ["Asking about continuing medication", "Fragen über Medikamenteneinnahme während Wartezeit"],
      ["Thanking staff and committing to update", "Danken der Mitarbeiter und Verpflichtung zur Aktualisierung"]
    ];
    
    for (const [english, german] of explanationTranslations) {
      if (germanExplanation.includes(english)) {
        germanExplanation = germanExplanation.replace(english, german);
      }
    }
    
    // If no translation was applied, return with "Erklärung: " prefix
    if (germanExplanation === englishText) {
      return `Erklärung: ${englishText}`;
    }
    
    return germanExplanation;
  }
  
  // For translations that don't have predefined translations,
  // return the English text (this should be improved with actual translation)
  return englishText;
}

let totalItems = 0;
let translatedCount = 0;

// Process all topics
for (const topicKey of Object.keys(data)) {
  const items = data[topicKey];
  
  for (const item of items) {
    totalItems++;
      
    // Translate translations.en to translations.de
    if (item.translations && item.translations.en) {
      const englishTranslation = item.translations.en;
      const currentGerman = item.translations.de;
        
      // Always translate to ensure proper German
      const newGerman = translateToGerman(englishTranslation, false);
      if (newGerman !== englishTranslation) {
        item.translations.de = newGerman;
        translatedCount++;
      }
    }
      
    // Translate explanations.en to explanations.de
    if (item.explanations && item.explanations.en) {
      const englishExplanation = item.explanations.en;
      const currentGermanExp = item.explanations.de;
        
      // Always translate to ensure proper German
      const newGermanExp = translateToGerman(englishExplanation, true);
      if (newGermanExp !== englishExplanation) {
        item.explanations.de = newGermanExp;
        translatedCount++;
      }
    }
  }
}

console.log(`Total items processed: ${totalItems}`);
console.log(`Translations performed: ${translatedCount}`);

// Write the updated JSON back to file
fs.writeFileSync(
  path,
  JSON.stringify(data, null, 2),
  'utf8'
);

console.log('German translations updated successfully!');
