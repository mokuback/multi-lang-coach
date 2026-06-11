import codecs

with codecs.open(r'd:\Antigravity_data\src\contexts\translations.js', 'r', 'utf-8') as f:
    content = f.read()

additions = {
  'en': '''    // === Additional Titles & About Us ===
    '零基礎基礎訓練': 'Curriculum (From Scratch)',
    '生詞筆記本': 'Vocabulary Notebook',
    '句型筆記本': 'Pattern Notebook',
    '一群喜愛外語學習的科技人': 'A group of tech enthusiasts who love learning languages',
    '我們的初衷：打破傳統語言學習的框架': 'Our Original Intention: Breaking the Framework of Traditional Language Learning',
    '學習一門外語，最困難的往往不是背誦成千上萬的單字，或是熟記繁雜的文法規則，而是缺乏一個「真實、沉浸且無壓力的對話環境」。': 'Learning a foreign language, the most difficult part is often not memorizing thousands of words or complex grammar rules, but the lack of a "real, immersive, and stress-free conversation environment".',
    '我們是一群熱愛語言學習與鑽研最新科技的開發者。在過去的學習經驗中，我們深刻體會到，亞洲學生普遍在讀寫方面表現優異，但在需要開口進行口說交流時，卻經常面臨「害怕犯錯」、「找不到對象練習」或「高昂的家教費用」等痛點。這些阻礙使得許多人停留在「啞巴外語」的階段，無法將多年所學轉化為實際的溝通能力。因此，Multi-Lang Coach 應運而生。': 'We are a group of developers who love language learning and the latest technology. In our past learning experiences, we deeply realized that Asian students generally perform excellently in reading and writing, but when it comes to speaking, they often face pain points such as "fear of making mistakes", "inability to find practice partners", or "expensive tutoring fees". These obstacles keep many people in the "mute foreign language" stage, unable to convert years of learning into actual communication skills. Thus, Multi-Lang Coach was born.',
    'AI 驅動的學習革命：專屬您的 24 小時教練': 'AI-Driven Learning Revolution: Your Exclusive 24-Hour Coach',
    '透過最新一代的生成式 AI 技術與大數據語料庫，我們打造了這個 24 小時隨時待命的智能語音教練。它不僅能模擬從「高階商務談判」、「學術論文研討」到「日常出遊點餐」的各種真實情境，更能以極高的耐心與專業度，即時聽寫並糾正您的發音與文法。': 'Through the latest generation of generative AI technology and big data corpora, we have built this intelligent voice coach available 24 hours a day. It can not only simulate various real scenarios from "high-level business negotiations", "academic paper discussions" to "daily outing orders", but also instantly transcribe and correct your pronunciation and grammar with high patience and professionalism.',
    '在傳統的家教課程中，學生往往會因為頻繁被糾正而感到氣餒；但在這裡，您面對的是一位不會帶有批判眼光、永遠耐心指導的虛擬教練。它可以根據您的職務需求（例如：IT 工程師、業務銷售員）客製化專屬的對話劇本，並提供最道地、最符合當地文化習慣的用詞建議，讓您的學習效率成倍提升。': 'In traditional tutoring sessions, students often feel discouraged by frequent corrections; but here, you face a virtual coach with no critical eye and always patient guidance. It can customize exclusive dialogue scripts based on your job needs (e.g., IT engineer, sales representative) and provide the most native vocabulary suggestions that fit local cultural habits, multiplying your learning efficiency.',
    '未來的願景：讓語言不再是溝通的障礙': 'Future Vision: Making Language No Longer a Barrier to Communication',
    '語言是探索世界、理解不同文化的橋樑。我們的團隊致力於持續優化 AI 語言模型的推論能力，並不斷擴充學習情境庫。我們希望透過科技的力量，打破地域與資源的限制，讓每個人—無論身處何地、無論學習預算多少—都能擁有無壓力、高互動性的沉浸式語言練習體驗。我們相信，當您有自信開口說的那一刻，整個世界的機會都將為您敞開。': 'Language is a bridge to explore the world and understand different cultures. Our team is committed to continuously optimizing the inference capabilities of AI language models and continuously expanding the learning scenario library. We hope that through the power of technology, breaking the boundaries of geography and resources, everyone—no matter where they are, no matter how much learning budget they have—can have a stress-free, highly interactive immersive language practice experience. We believe that the moment you speak confidently, opportunities around the world will open up for you.'
''',
  'ja': '''    // === Additional Titles & About Us ===
    '零基礎基礎訓練': '基礎カリキュラム (ゼロから)',
    '生詞筆記本': '単語ノートブック',
    '句型筆記本': '文法ノートブック',
    '一群喜愛外語學習的科技人': '外国語学習を愛するテクノロジー愛好家のグループ',
    '我們的初衷：打破傳統語言學習的框架': '私たちの本来の意図：伝統的な言語学習の枠組みを打ち破る',
    '學習一門外語，最困難的往往不是背誦成千上萬的單字，或是熟記繁雜的文法規則，而是缺乏一個「真實、沉浸且無壓力的對話環境」。': '外国語の学習で最も難しいのは、多くの場合、何千もの単語や複雑な文法規則を暗記することではなく、「リアルで没入感のある、ストレスのない会話環境」の欠如です。',
    '我們是一群熱愛語言學習與鑽研最新科技的開發者。在過去的學習經驗中，我們深刻體會到，亞洲學生普遍在讀寫方面表現優異，但在需要開口進行口說交流時，卻經常面臨「害怕犯錯」、「找不到對象練習」或「高昂的家教費用」等痛點。這些阻礙使得許多人停留在「啞巴外語」的階段，無法將多年所學轉化為實際的溝通能力。因此，Multi-Lang Coach 應運而生。': '私たちは、語学学習と最新テクノロジーを愛する開発者のグループです。過去の学習経験の中で、アジアの学生は一般的に読み書きの面で優れていることに深く気付きましたが、いざスピーキングの交流となると、「間違えることへの恐怖」、「練習相手が見つからない」、「高額な家庭教師費用」などの問題に直面することがよくあります。これらの障害は、多くの人々を「無口な外国語」の段階に留まらせ、長年の学習を実際のコミュニケーション能力に変換できなくします。こうして、Multi-Lang Coachが誕生しました。',
    'AI 驅動的學習革命：專屬您的 24 小時教練': 'AI主導の学習革命：あなた専用の24時間コーチ',
    '透過最新一代的生成式 AI 技術與大數據語料庫，我們打造了這個 24 小時隨時待命的智能語音教練。它不僅能模擬從「高階商務談判」、「學術論文研討」到「日常出遊點餐」的各種真實情境，更能以極高的耐心與專業度，即時聽寫並糾正您的發音與文法。': '最新世代の生成AIテクノロジーとビッグデータコーパスを通じて、私たちはこの24時間いつでも待機しているインテリジェント音声コーチを構築しました。「ハイレベルなビジネス交渉」、「学術論文の議論」から「日常のお出かけの注文」まで、さまざまな実際のシナリオをシミュレートできるだけでなく、非常に高い忍耐力と専門性で発音と文法を即座に書き起こして修正できます。',
    '在傳統的家教課程中，學生往往會因為頻繁被糾正而感到氣餒；但在這裡，您面對的是一位不會帶有批判眼光、永遠耐心指導的虛擬教練。它可以根據您的職務需求（例如：IT 工程師、業務銷售員）客製化專屬的對話劇本，並提供最道地、最符合當地文化習慣的用詞建議，讓您的學習效率成倍提升。': '伝統的な家庭教師の授業では、生徒は頻繁に訂正されて落胆することがよくあります。しかしここでは、批判的な目を持たず、常に忍耐強く指導してくれる仮想コーチと向き合います。それはあなたの職務ニーズ（例：ITエンジニア、営業担当者）に基づいて専用の対話スクリプトをカスタマイズし、現地の文化習慣に最も適した最もネイティブな語彙の提案を提供し、学習効率を倍増させます。',
    '未來的願景：讓語言不再是溝通的障礙': '未来のビジョン：言語をコミュニケーションの障害にしない',
    '語言是探索世界、理解不同文化的橋樑。我們的團隊致力於持續優化 AI 語言模型的推論能力，並不斷擴充學習情境庫。我們希望透過科技的力量，打破地域與資源的限制，讓每個人—無論身處何地、無論學習預算多少—都能擁有無壓力、高互動性的沉浸式語言練習體驗。我們相信，當您有自信開口說的那一刻，整個世界的機會都將為您敞開。': '言語は世界を探求し、異なる文化を理解するための架け橋です。私たちのチームは、AI言語モデルの推論能力を継続的に最適化し、学習シナリオライブラリを継続的に拡張することに取り組んでいます。テクノロジーの力を通じて、地域と資源の境界を打ち破り、誰もが—どこにいても、学習予算がいくらであっても—ストレスのない、インタラクティブで没入型の言語練習体験を持てることを願っています。自信を持って話し始めた瞬間、世界中の機会があなたに開かれると信じています。'
''',
  'ko': '''    // === Additional Titles & About Us ===
    '零基礎基礎訓練': '기초 훈련 (완전 초보)',
    '生詞筆記本': '단어장 노트',
    '句型筆記本': '패턴 노트',
    '一群喜愛外語學習的科技人': '외국어 학습을 사랑하는 기술 애호가들',
    '我們的初衷：打破傳統語言學習的框架': '우리의 초심: 전통적인 언어 학습의 틀을 깨다',
    '學習一門外語，最困難的往往不是背誦成千上萬的單字，或是熟記繁雜的文法規則，而是缺乏一個「真實、沉浸且無壓力的對話環境」。': '외국어 학습에서 가장 어려운 부분은 수천 개의 단어나 복잡한 문법 규칙을 암기하는 것이 아니라 "실제적이고 몰입감 있으며 스트레스 없는 대화 환경"의 부족입니다.',
    '我們是一群熱愛語言學習與鑽研最新科技的開發者。在過去的學習經驗中，我們深刻體會到，亞洲學生普遍在讀寫方面表現優異，但在需要開口進行口說交流時，卻經常面臨「害怕犯錯」、「找不到對象練習」或「高昂的家教費用」等痛點。這些阻礙使得許多人停留在「啞巴外語」的階段，無法將多年所學轉化為實際的溝通能力。因此，Multi-Lang Coach 應運而生。': '우리는 언어 학습과 최신 기술을 사랑하는 개발자 그룹입니다. 과거의 학습 경험에서 우리는 아시아 학생들이 일반적으로 읽기와 쓰기에서는 우수한 성과를 보이지만 말하기 교류가 필요할 때 "실수하는 것에 대한 두려움", "연습 상대를 찾지 못함" 또는 "비싼 과외비" 등의 문제에 직면한다는 것을 깊이 깨달았습니다. 이러한 장애물들은 많은 사람들이 "벙어리 외국어" 단계에 머물게 하여, 수년간의 학습을 실제 의사소통 능력으로 전환하지 못하게 합니다. 따라서 Multi-Lang Coach가 탄생했습니다.',
    'AI 驅動的學習革命：專屬您的 24 小時教練': 'AI 주도의 학습 혁명: 당신만의 24시간 코치',
    '透過最新一代的生成式 AI 技術與大數據語料庫，我們打造了這個 24 小時隨時待命的智能語音教練。它不僅能模擬從「高階商務談判」、「學術論文研討」到「日常出遊點餐」的各種真實情境，更能以極高的耐心與專業度，即時聽寫並糾正您的發音與文法。': '최신 세대의 생성 AI 기술과 빅데이터 코퍼스를 통해 우리는 24시간 언제든지 대기하는 이 지능형 음성 코치를 구축했습니다. "고위 비즈니스 협상", "학술 논문 토론"부터 "일상적인 외출 주문"까지 다양한 실제 시나리오를 시뮬레이션할 수 있을 뿐만 아니라, 높은 인내심과 전문성으로 발음과 문법을 즉시 받아쓰고 교정할 수 있습니다.',
    '在傳統的家教課程中，學生往往會因為頻繁被糾正而感到氣餒；但在這裡，您面對的是一位不會帶有批判眼光、永遠耐心指導的虛擬教練。它可以根據您的職務需求（例如：IT 工程師、業務銷售員）客製化專屬的對話劇本，並提供最道地、最符合當地文化習慣的用詞建議，讓您的學習效率成倍提升。': '전통적인 과외 수업에서 학생들은 빈번한 교정으로 인해 종종 낙담합니다. 하지만 여기서는 비판적인 시선 없이 항상 끈기 있게 지도하는 가상 코치를 마주하게 됩니다. 여러분의 직무 요구(예: IT 엔지니어, 영업 사원)에 따라 전용 대화 스크립트를 맞춤화하고 현지 문화 습관에 가장 적합한 현지 어휘 제안을 제공하여 학습 효율성을 배가시킵니다.',
    '未來的願景：讓語言不再是溝通的障礙': '미래의 비전: 언어가 더 이상 소통의 장벽이 되지 않게 하다',
    '語言是探索世界、理解不同文化的橋樑。我們的團隊致力於持續優化 AI 語言模型的推論能力，並不斷擴充學習情境庫。我們希望透過科技的力量，打破地域與資源的限制，讓每個人—無論身處何地、無論學習預算多少—都能擁有無壓力、高互動性的沉浸式語言練習體驗。我們相信，當您有自信開口說的那一刻，整個世界的機會都將為您敞開。': '언어는 세계를 탐구하고 다른 문화를 이해하는 다리입니다. 우리 팀은 AI 언어 모델의 추론 능력을 지속적으로 최적화하고 학습 시나리오 라이브러리를 지속적으로 확장하는 데 전념하고 있습니다. 우리는 기술의 힘을 통해 지리적 및 자원적 한계를 극복하여 모든 사람이—어디에 있든, 학습 예산이 얼마이든—스트레스 없는 고도의 상호 작용 몰입형 언어 연습 경험을 가질 수 있기를 바랍니다. 자신 있게 입을 여는 순간 전 세계의 기회가 여러분에게 열릴 것이라고 믿습니다.'
''',
  'es': '''    // === Additional Titles & About Us ===
    '零基礎基礎訓練': 'Currículo (Desde Cero)',
    '生詞筆記本': 'Cuaderno de Vocabulario',
    '句型筆記本': 'Cuaderno de Patrones',
    '一群喜愛外語學習的科技人': 'Un grupo de entusiastas de la tecnología que aman aprender idiomas',
    '我們的初衷：打破傳統語言學習的框架': 'Nuestra Intención Original: Rompiendo el Marco del Aprendizaje Tradicional de Idiomas',
    '學習一門外語，最困難的往往不是背誦成千上萬的單字，或是熟記繁雜的文法規則，而是缺乏一個「真實、沉浸且無壓力的對話環境」。': 'Aprender un idioma extranjero, la parte más difícil a menudo no es memorizar miles de palabras o reglas gramaticales complejas, sino la falta de un "entorno de conversación real, inmersivo y sin estrés".',
    '我們是一群熱愛語言學習與鑽研最新科技的開發者。在過去的學習經驗中，我們深刻體會到，亞洲學生普遍在讀寫方面表現優異，但在需要開口進行口說交流時，卻經常面臨「害怕犯錯」、「找不到對象練習」或「高昂的家教費用」等痛點。這些阻礙使得許多人停留在「啞巴外語」的階段，無法將多年所學轉化為實際的溝通能力。因此，Multi-Lang Coach 應運而生。': 'Somos un grupo de desarrolladores que aman el aprendizaje de idiomas y la última tecnología. En nuestras experiencias de aprendizaje pasadas, nos dimos cuenta profundamente de que los estudiantes asiáticos generalmente tienen un rendimiento excelente en lectura y escritura, pero cuando se trata de hablar, a menudo enfrentan puntos de dolor como "miedo a cometer errores", "incapacidad para encontrar compañeros de práctica" o "altos costos de tutoría". Estos obstáculos mantienen a muchas personas en la etapa de "idioma extranjero mudo", incapaces de convertir años de aprendizaje en habilidades de comunicación reales. Por lo tanto, nació Multi-Lang Coach.',
    'AI 驅動的學習革命：專屬您的 24 小時教練': 'Revolución de Aprendizaje Impulsada por IA: Su Entrenador Exclusivo de 24 Horas',
    '透過最新一代的生成式 AI 技術與大數據語料庫，我們打造了這個 24 小時隨時待命的智能語音教練。它不僅能模擬從「高階商務談判」、「學術論文研討」到「日常出遊點餐」的各種真實情境，更能以極高的耐心與專業度，即時聽寫並糾正您的發音與文法。': 'A través de la última generación de tecnología de IA generativa y corpus de big data, hemos construido este entrenador de voz inteligente disponible las 24 horas del día. No solo puede simular varios escenarios reales, desde "negociaciones comerciales de alto nivel", "discusiones de trabajos académicos" hasta "pedidos de salidas diarias", sino que también transcribe y corrige instantáneamente su pronunciación y gramática con gran paciencia y profesionalismo.',
    '在傳統的家教課程中，學生往往會因為頻繁被糾正而感到氣餒；但在這裡，您面對的是一位不會帶有批判眼光、永遠耐心指導的虛擬教練。它可以根據您的職務需求（例如：IT 工程師、業務銷售員）客製化專屬的對話劇本，並提供最道地、最符合當地文化習慣的用詞建議，讓您的學習效率成倍提升。': 'En las sesiones de tutoría tradicionales, los estudiantes a menudo se sienten desanimados por las correcciones frecuentes; pero aquí, te enfrentas a un entrenador virtual sin una mirada crítica y con una orientación siempre paciente. Puede personalizar guiones de diálogo exclusivos según tus necesidades laborales (por ejemplo, ingeniero de TI, representante de ventas) y proporcionar las sugerencias de vocabulario más nativas que se adapten a los hábitos culturales locales, multiplicando tu eficiencia de aprendizaje.',
    '未來的願景：讓語言不再是溝通的障礙': 'Visión del Futuro: Haciendo que el Idioma Ya No Sea una Barrera para la Comunicación',
    '語言是探索世界、理解不同文化的橋樑。我們的團隊致力於持續優化 AI 語言模型的推論能力，並不斷擴充學習情境庫。我們希望透過科技的力量，打破地域與資源的限制，讓每個人—無論身處何地、無論學習預算多少—都能擁有無壓力、高互動性的沉浸式語言練習體驗。我們相信，當您有自信開口說的那一刻，整個世界的機會都將為您敞開。': 'El idioma es un puente para explorar el mundo y comprender diferentes culturas. Nuestro equipo se compromete a optimizar continuamente las capacidades de inferencia de los modelos de lenguaje de IA y expandir continuamente la biblioteca de escenarios de aprendizaje. Esperamos que a través del poder de la tecnología, rompiendo los límites de geografía y recursos, todos, sin importar dónde se encuentren o cuánto presupuesto de aprendizaje tengan, puedan tener una experiencia de práctica de idiomas inmersiva, altamente interactiva y sin estrés. Creemos que en el momento en que hablas con confianza, se abrirán oportunidades en todo el mundo para ti.'
''',
  'fr': '''    // === Additional Titles & About Us ===
    '零基礎基礎訓練': 'Programme (Zéro Base)',
    '生詞筆記本': 'Carnet de Vocabulaire',
    '句型筆記本': 'Carnet de Modèles',
    '一群喜愛外語學習的科技人': 'Un groupe de passionnés de technologie qui aiment apprendre les langues',
    '我們的初衷：打破傳統語言學習的框架': 'Notre Intention Initiale : Briser le Cadre de l\\'Apprentissage Traditionnel des Langues',
    '學習一門外語，最困難的往往不是背誦成千上萬的單字，或是熟記繁雜的文法規則，而是缺乏一個「真實、沉浸且無壓力的對話環境」。': 'L\\'apprentissage d\\'une langue étrangère, la partie la plus difficile n\\'est souvent pas de mémoriser des milliers de mots ou de règles de grammaire complexes, mais le manque d\\'un "environnement de conversation réel, immersif et sans stress".',
    '我們是一群熱愛語言學習與鑽研最新科技的開發者。在過去的學習經驗中，我們深刻體會到，亞洲學生普遍在讀寫方面表現優異，但在需要開口進行口說交流時，卻經常面臨「害怕犯錯」、「找不到對象練習」或「高昂的家教費用」等痛點。這些阻礙使得許多人停留在「啞巴外語」的階段，無法將多年所學轉化為實際的溝通能力。因此，Multi-Lang Coach 應運而生。': 'Nous sommes un groupe de développeurs passionnés par l\\'apprentissage des langues et les dernières technologies. Dans nos expériences d\\'apprentissage passées, nous avons profondément réalisé que les étudiants asiatiques ont généralement d\\'excellentes performances en lecture et en écriture, mais lorsqu\\'il s\\'agit de parler, ils sont souvent confrontés à des points douloureux tels que la "peur de faire des erreurs", l\\'"incapacité de trouver des partenaires de pratique" ou les "frais de tutorat coûteux". Ces obstacles maintiennent de nombreuses personnes au stade de "langue étrangère muette", incapables de convertir des années d\\'apprentissage en compétences de communication réelles. Ainsi, Multi-Lang Coach est né.',
    'AI 驅動的學習革命：專屬您的 24 小時教練': 'Révolution de l\\'Apprentissage Pilotée par l\\'IA : Votre Coach Exclusif 24 Heures sur 24',
    '透過最新一代的生成式 AI 技術與大數據語料庫，我們打造了這個 24 小時隨時待命的智能語音教練。它不僅能模擬從「高階商務談判」、「學術論文研討」到「日常出遊點餐」的各種真實情境，更能以極高的耐心與專業度，即時聽寫並糾正您的發音與文法。': 'Grâce à la dernière génération de technologie d\\'IA générative et aux corpus de big data, nous avons construit ce coach vocal intelligent disponible 24 heures sur 24. Il peut non seulement simuler divers scénarios réels, allant des "négociations commerciales de haut niveau", des "discussions d\\'articles académiques" aux "commandes de sorties quotidiennes", mais aussi transcrire et corriger instantanément votre prononciation et votre grammaire avec une grande patience et un grand professionnalisme.',
    '在傳統的家教課程中，學生往往會因為頻繁被糾正而感到氣餒；但在這裡，您面對的是一位不會帶有批判眼光、永遠耐心指導的虛擬教練。它可以根據您的職務需求（例如：IT 工程師、業務銷售員）客製化專屬的對話劇本，並提供最道地、最符合當地文化習慣的用詞建議，讓您的學習效率成倍提升。': 'Dans les sessions de tutorat traditionnelles, les étudiants se sentent souvent découragés par des corrections fréquentes ; mais ici, vous faites face à un coach virtuel sans regard critique et avec des conseils toujours patients. Il peut personnaliser des scripts de dialogue exclusifs en fonction de vos besoins professionnels (par exemple, ingénieur informatique, représentant commercial) et fournir les suggestions de vocabulaire les plus natives qui correspondent aux habitudes culturelles locales, multipliant ainsi votre efficacité d\\'apprentissage.',
    '未來的願景：讓語言不再是溝通的障礙': 'Vision Future : Faire en Sorte que la Langue ne Soit Plus un Obstacle à la Communication',
    '語言是探索世界、理解不同文化的橋樑。我們的團隊致力於持續優化 AI 語言模型的推論能力，並不斷擴充學習情境庫。我們希望透過科技的力量，打破地域與資源的限制，讓每個人—無論身處何地、無論學習預算多少—都能擁有無壓力、高互動性的沉浸式語言練習體驗。我們相信，當您有自信開口說的那一刻，整個世界的機會都將為您敞開。': 'La langue est un pont pour explorer le monde et comprendre différentes cultures. Notre équipe s\\'engage à optimiser continuellement les capacités d\\'inférence des modèles linguistiques de l\\'IA et à élargir continuellement la bibliothèque de scénarios d\\'apprentissage. Nous espérons que grâce à la puissance de la technologie, en brisant les limites de la géographie et des ressources, chacun — peu importe où il se trouve, quel que soit son budget d\\'apprentissage — pourra vivre une expérience de pratique de la langue immersive, hautement interactive et sans stress. Nous pensons qu\\'au moment où vous parlez avec confiance, des opportunités dans le monde entier s\\'ouvriront à vous.'
'''
}

lines = content.split('\n')
new_lines = []
current_lang = None

for i, line in enumerate(lines):
    if line.startswith('  en: {'): current_lang = 'en'
    elif line.startswith('  ja: {'): current_lang = 'ja'
    elif line.startswith('  ko: {'): current_lang = 'ko'
    elif line.startswith('  es: {'): current_lang = 'es'
    elif line.startswith('  fr: {'): current_lang = 'fr'

    if current_lang and (line.strip() == '},' or line.strip() == '}') and line.startswith('  }'):
        # Add comma to the previous line if needed
        prev_idx = len(new_lines) - 1
        while prev_idx >= 0 and new_lines[prev_idx].strip() == '':
            prev_idx -= 1
        
        if prev_idx >= 0 and not new_lines[prev_idx].strip().endswith(','):
            new_lines[prev_idx] = new_lines[prev_idx] + ','
        
        new_lines.append(additions[current_lang])
        current_lang = None

    new_lines.append(line)

with codecs.open(r'd:\Antigravity_data\src\contexts\translations.js', 'w', 'utf-8') as f:
    f.write('\n'.join(new_lines))

print('Update via Python successful!')
