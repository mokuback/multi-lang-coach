export const curriculumData = {
  ja: [
    {
      id: 'ja_unit_1',
      title: {
        'zh-TW': '基本打招呼與禮貌用語',
        'zh-CN': '基本打招呼与礼貌用语',
        'en': 'Basic Greetings and Polite Expressions',
        'ja': '基本的な挨拶と礼儀正しい表現',
        'ko': '기본 인사 및 예의 표현',
        'es': 'Saludos básicos y expresiones de cortesía',
        'fr': 'Salutations de base et expressions de politesse',
        'de': 'Grundlegende Grüße und höfliche Ausdrücke'
      },
      description: {
        'zh-TW': '掌握最常用的見面與道別用語。',
        'zh-CN': '掌握最常用的见面与道别用语。',
        'en': 'Master the most common meeting and farewell expressions.',
        'ja': '最もよく使われる挨拶と別れの言葉をマスターします。',
        'ko': '가장 자주 사용되는 만남과 작별 인사를 익힙니다.',
        'es': 'Domina las expresiones más comunes de saludo y despedida.',
        'fr': 'Maîtrisez les expressions de rencontre et d\'adieu les plus courantes.',
        'de': 'Meistern Sie die gebräuchlichsten Begrüßungs- und Abschiedsfloskeln.'
      },
      vocab: [
        { word: 'おはようございます', meanings: {
      'zh-TW': '早安',
      'zh-CN': '早安',
      'en': 'Good morning',
      'ja': 'おはようございます',
      'ko': '좋은 아침',
      'es': 'Buenos días',
      'fr': 'Bonjour',
      'de': 'Guten Morgen'
    }, phonetic: '[0]' },
        { word: 'こんにちは', meanings: {
      'zh-TW': '你好',
      'zh-CN': '你好',
      'en': 'Hello',
      'ja': 'こんにちは',
      'ko': '안녕하세요',
      'es': 'Hola',
      'fr': 'Bonjour',
      'de': 'Hallo'
    }, phonetic: '[0]' },
        { word: 'こんばんは', meanings: {
      'zh-TW': '晚安',
      'zh-CN': '晚安',
      'en': 'Good evening',
      'ja': 'こんばんは',
      'ko': '좋은 저녁',
      'es': 'Buenas noches',
      'fr': 'Bonsoir',
      'de': 'Guten Abend'
    }, phonetic: '[0]' },
        { word: 'ありがとう', meanings: {
      'zh-TW': '謝謝',
      'zh-CN': '謝謝',
      'en': 'Thank you',
      'ja': 'ありがとう',
      'ko': '감사합니다',
      'es': 'Gracias',
      'fr': 'Merci',
      'de': 'Danke'
    }, phonetic: '[2]' },
        { word: 'さようなら', meanings: {
      'zh-TW': '再見',
      'zh-CN': '再見',
      'en': 'Goodbye',
      'ja': 'さようなら',
      'ko': '안녕히 가세요',
      'es': 'Adiós',
      'fr': 'Au revoir',
      'de': 'Auf Wiedersehen'
    }, phonetic: '[4]' }
      ],
      patterns: [
        { pattern: '基本問候 (無特定句型)', explanation: '依據時間不同使用對應的打招呼用語。', explanations: {"zh-TW":"依據時間不同使用對應的打招呼用語。","zh-CN":"依據时间不同使用对應的打招呼用语。","en":"Use appropriate greetings based on time of day."} }
      ]
    },
    {
      id: 'ja_unit_2',
      title: {
        'zh-TW': '自我介紹與身分',
        'zh-CN': '自我介绍与身份',
        'en': 'Self-Introduction and Identity',
        'ja': '自己紹介と身分',
        'ko': '자기소개와 신분',
        'es': 'Autopresentación e identidad',
        'fr': 'Auto-présentation et identité',
        'de': 'Selbstvorstellung und Identität'
      },
      description: {
        'zh-TW': '能用日文說出自己的身分，並詢問對方。',
        'zh-CN': '能用日文说出自己的身份，并询问对方。',
        'en': 'Learn to state your identity in Japanese and ask others about theirs.',
        'ja': '日本語で自分の身分を言い、相手に尋ねることができます。',
        'ko': '일본어로 자신의 신분을 말하고 상대방에게 물을 수 있습니다.',
        'es': 'Aprende a decir tu identidad en japonés y preguntar a otros sobre la suya.',
        'fr': 'Apprenez à indiquer votre identité en japonais et à demander celle des autres.',
        'de': 'Lernen Sie, Ihre Identität auf Japanisch anzugeben und andere danach zu fragen.'
      },
      vocab: [
        { word: 'わたし', meanings: {
      'zh-TW': '我',
      'zh-CN': '我',
      'en': 'I',
      'ja': '私',
      'ko': '나',
      'es': 'Yo',
      'fr': 'Je',
      'de': 'Ich'
    }, phonetic: '私 [0]' },
        { word: 'あなた', meanings: {
      'zh-TW': '你',
      'zh-CN': '你',
      'en': 'You',
      'ja': 'あなた',
      'ko': '너',
      'es': 'Tú',
      'fr': 'Tu',
      'de': 'Du'
    }, phonetic: '貴方 [2]' },
        { word: 'がくせい', meanings: {
      'zh-TW': '學生',
      'zh-CN': '學生',
      'en': 'Student',
      'ja': '学生',
      'ko': '학생',
      'es': 'Estudiante',
      'fr': 'Étudiant',
      'de': 'Student'
    }, phonetic: '学生 [0]' },
        { word: 'かいしゃいん', meanings: {
      'zh-TW': '上班族',
      'zh-CN': '上班族',
      'en': 'Office worker',
      'ja': '会社員',
      'ko': '회사원',
      'es': 'Empleado de oficina',
      'fr': 'Employé de bureau',
      'de': 'Büroangestellter'
    }, phonetic: '会社員 [3]' },
        { word: 'せんせい', meanings: {
      'zh-TW': '老師',
      'zh-CN': '老師',
      'en': 'Teacher',
      'ja': '先生',
      'ko': '선생님',
      'es': 'Profesor',
      'fr': 'Enseignant',
      'de': 'Lehrer'
    }, phonetic: '先生 [3]' }
      ],
      patterns: [
        { pattern: 'わたしは [名詞] です。', explanation: '我是...', explanations: {"zh-TW":"我是...","zh-CN":"我是...","en":"I am..."} },
        { pattern: 'あなたは [名詞] ですか。', explanation: '你是...嗎？', explanations: {"zh-TW":"你是...嗎？","zh-CN":"你是...吗？","en":"Are you...?"} }
      ]
    },
    {
      id: 'ja_unit_3',
      title: {
        'zh-TW': '這是什麼？(指示代名詞)',
        'zh-CN': '这是什么？(指示代词)',
        'en': 'What is This? (Demonstrative Pronouns)',
        'ja': 'これは何ですか？(指示代名詞)',
        'ko': '이것은 무엇입니까? (지시대명사)',
        'es': '¿Qué es esto? (Pronombres demostrativos)',
        'fr': 'Qu\'est-ce que c\'est ? (Pronoms démonstratifs)',
        'de': 'Was ist das? (Demonstrativpronomen)'
      },
      description: {
        'zh-TW': '學會指稱物品並詢問名稱。',
        'zh-CN': '学会指称物品并询问名称。',
        'en': 'Learn to point out objects and ask for their names.',
        'ja': '物を指差して、その名前を尋ねることを学びます。',
        'ko': '물건을 가리키고 이름을 묻는 법을 배웁니다.',
        'es': 'Aprende a señalar objetos y preguntar por sus nombres.',
        'fr': 'Apprenez à désigner des objets et à demander leurs noms.',
        'de': 'Lernen Sie, auf Gegenstände zu zeigen und nach ihren Namen zu fragen.'
      },
      vocab: [
        { word: 'これ', meanings: {
      'zh-TW': '這個',
      'zh-CN': '這個',
      'en': 'This',
      'ja': 'これ',
      'ko': '이것',
      'es': 'Esto',
      'fr': 'Ceci',
      'de': 'Dieses'
    }, phonetic: '[0]' },
        { word: 'それ', meanings: {
      'zh-TW': '那個',
      'zh-CN': '那個',
      'en': 'That',
      'ja': 'それ',
      'ko': '저것',
      'es': 'Eso',
      'fr': 'Cela',
      'de': 'Jenes'
    }, phonetic: '[0]' },
        { word: 'あれ', meanings: {
      'zh-TW': '那個(遠處)',
      'zh-CN': '那個(遠處)',
      'en': 'That over there',
      'ja': 'あれ',
      'ko': '저기',
      'es': 'Aquello',
      'fr': 'Ça',
      'de': 'Dort drüben'
    }, phonetic: '[0]' },
        { word: 'ほん', meanings: {
      'zh-TW': '書本',
      'zh-CN': '書本',
      'en': 'Book',
      'ja': '本',
      'ko': '책',
      'es': 'Libro',
      'fr': 'Livre',
      'de': 'Buch'
    }, phonetic: '本 [1]' },
        { word: 'ペン', meanings: {
      'zh-TW': '筆',
      'zh-CN': '筆',
      'en': 'Pen',
      'ja': 'ペン',
      'ko': '펜',
      'es': 'Bolígrafo',
      'fr': 'Stylo',
      'de': 'Kugelschreiber'
    }, phonetic: '[1]' },
        { word: 'パソコン', meanings: {
      'zh-TW': '電腦',
      'zh-CN': '電腦',
      'en': 'Computer',
      'ja': 'パソコン',
      'ko': '컴퓨터',
      'es': 'Computadora',
      'fr': 'Ordinateur',
      'de': 'Computer'
    }, phonetic: '[0]' }
      ],
      patterns: [
        { pattern: 'これは [名詞] です。', explanation: '這是...', explanations: {"zh-TW":"這是...","zh-CN":"这是...","en":"This is..."} },
        { pattern: 'それは [名詞] ですか。', explanation: '那是...嗎？', explanations: {"zh-TW":"那是...嗎？","zh-CN":"那是...吗？","en":"Is that...?"} }
      ]
    },
    {
      id: 'ja_unit_4',
      title: {
        'zh-TW': '場所與存在',
        'zh-CN': '场所与存在',
        'en': 'Places and Existence',
        'ja': '場所と存在',
        'ko': '장소와 존재',
        'es': 'Lugares y existencia',
        'fr': 'Lieux et existence',
        'de': 'Orte und Existenz'
      },
      description: {
        'zh-TW': '能在實體空間中詢問與指出地點。',
        'zh-CN': '能在实体空间中询问与指出地点。',
        'en': 'Learn to ask about and point out locations in physical space.',
        'ja': '実際の空間で場所を尋ねたり、指差したりすることができます。',
        'ko': '실제 공간에서 장소를 묻고 가리킬 수 있습니다.',
        'es': 'Aprende a preguntar y señalar lugares en el espacio físico.',
        'fr': 'Apprenez à demander et indiquer des lieux dans l\'espace physique.',
        'de': 'Lernen Sie, nach Orten zu fragen und diese im physischen Raum zu zeigen.'
      },
      vocab: [
        { word: 'ここ', meanings: {
      'zh-TW': '這裡',
      'zh-CN': '這裡',
      'en': 'Here',
      'ja': 'ここ',
      'ko': '여기',
      'es': 'Aquí',
      'fr': 'Ici',
      'de': 'Hier'
    }, phonetic: '[0]' },
        { word: 'そこ', meanings: {
      'zh-TW': '那裡',
      'zh-CN': '那裡',
      'en': 'There',
      'ja': 'そこ',
      'ko': '거기',
      'es': 'Allí',
      'fr': 'Là',
      'de': 'Dort'
    }, phonetic: '[0]' },
        { word: 'あそこ', meanings: {
      'zh-TW': '那裡(遠處)',
      'zh-CN': '那裡(遠處)',
      'en': 'Over there',
      'ja': 'あそこ',
      'ko': '저기',
      'es': 'Allá',
      'fr': 'Là-bas',
      'de': 'Dort drüben'
    }, phonetic: '[0]' },
        { word: 'トイレ', meanings: {
      'zh-TW': '廁所',
      'zh-CN': '廁所',
      'en': 'Toilet',
      'ja': 'トイレ',
      'ko': '화장실',
      'es': 'Baño',
      'fr': 'Toilette',
      'de': 'Toilette'
    }, phonetic: '[1]' },
        { word: 'かいしゃ', meanings: {
      'zh-TW': '公司',
      'zh-CN': '公司',
      'en': 'Company',
      'ja': '会社',
      'ko': '회사',
      'es': 'Empresa',
      'fr': 'Entreprise',
      'de': 'Firma'
    }, phonetic: '会社 [0]' },
        { word: 'どこ', meanings: {
      'zh-TW': '哪裡',
      'zh-CN': '哪裡',
      'en': 'Where',
      'ja': 'どこ',
      'ko': '어디',
      'es': 'Dónde',
      'fr': 'Où',
      'de': 'Wo'
    }, phonetic: '[1]' }
      ],
      patterns: [
        { pattern: '[名詞] は どこ ですか。', explanation: '...在哪裡？', explanations: {"zh-TW":"...在哪裡？","zh-CN":"...在哪里？","en":"Where is...?"} },
        { pattern: '[名詞] は [場所] です。', explanation: '...在某處', explanations: {"zh-TW":"...在某處","zh-CN":"...在某处","en":"...is somewhere."} }
      ]
    },
    {
      id: 'ja_unit_5',
      title: {
        'zh-TW': '數字與時間',
        'zh-CN': '数字与时间',
        'en': 'Numbers and Time',
        'ja': '数字と時間',
        'ko': '숫자와 시간',
        'es': 'Números y tiempo',
        'fr': 'Nombres et temps',
        'de': 'Zahlen und Zeit'
      },
      description: {
        'zh-TW': '學會日文基本數字與報時。',
        'zh-CN': '学会日文基本数字与报时。',
        'en': 'Learn basic Japanese numbers and how to tell time.',
        'ja': '日本語の基本数字と時間の言い方を学びます。',
        'ko': '일본어 기본 숫자와 시간 말하기를 배웁니다.',
        'es': 'Aprende los números básicos en japonés y cómo decir la hora.',
        'fr': 'Apprenez les chiffres de base en japonais et comment dire l\'heure.',
        'de': 'Lernen Sie die grundlegenden japanischen Zahlen und wie man die Zeit angibt.'
      },
      vocab: [
        { word: 'いち', meanings: {
      'zh-TW': '一',
      'zh-CN': '一',
      'en': 'One',
      'ja': '一',
      'ko': '하나',
      'es': 'Uno',
      'fr': 'Un',
      'de': 'Eins'
    }, phonetic: '一 [2]' },
        { word: 'に', meanings: {
      'zh-TW': '二',
      'zh-CN': '二',
      'en': 'Two',
      'ja': '二',
      'ko': '둘',
      'es': 'Dos',
      'fr': 'Deux',
      'de': 'Zwei'
    }, phonetic: '二 [1]' },
        { word: 'さん', meanings: {
      'zh-TW': '三',
      'zh-CN': '三',
      'en': 'Three',
      'ja': '三',
      'ko': '셋',
      'es': 'Tres',
      'fr': 'Trois',
      'de': 'Drei'
    }, phonetic: '三 [0]' },
        { word: 'いま', meanings: {
      'zh-TW': '現在',
      'zh-CN': '現在',
      'en': 'Now',
      'ja': '今',
      'ko': '지금',
      'es': 'Ahora',
      'fr': 'Maintenant',
      'de': 'Jetzt'
    }, phonetic: '今 [1]' },
        { word: '～じ', meanings: {
      'zh-TW': '～點',
      'zh-CN': '～點',
      'en': '~ o\'clock',
      'ja': '～時',
      'ko': '～시',
      'es': '~ en punto',
      'fr': '~ heures',
      'de': '~ Uhr'
    }, phonetic: '～時' },
        { word: '～ふん', meanings: {
      'zh-TW': '～分',
      'zh-CN': '～分',
      'en': '~ minutes',
      'ja': '～分',
      'ko': '～분',
      'es': '~ minutos',
      'fr': '~ minutes',
      'de': '~ Minuten'
    }, phonetic: '～分' }
      ],
      patterns: [
        { pattern: '今、何時ですか。', explanation: '現在幾點？', explanations: {"zh-TW":"現在幾點？","zh-CN":"现在几点？","en":"What time is it now?"} },
        { pattern: '今、[數字]時 です。', explanation: '現在...點', explanations: {"zh-TW":"現在...點","zh-CN":"现在...点","en":"It is... o'clock."} }
      ]
    },
    {
      id: 'ja_unit_6',
      title: {
        'zh-TW': '點餐與購物',
        'zh-CN': '点餐与购物',
        'en': 'Ordering and Shopping',
        'ja': '注文と買い物',
        'ko': '주문과 쇼핑',
        'es': 'Pedir comida y comprar',
        'fr': 'Commander et faire des achats',
        'de': 'Bestellen und Einkaufen'
      },
      description: {
        'zh-TW': '能在餐廳點餐或商店詢問價格。',
        'zh-CN': '能在餐厅点餐或商店询问价格。',
        'en': 'Learn to order food at restaurants or ask prices at shops.',
        'ja': 'レストランで注文したり、店で値段を尋ねたりすることができます。',
        'ko': '레스토랑에서 주문하거나 상점에서 가격을 물을 수 있습니다.',
        'es': 'Aprende a pedir comida en restaurantes o preguntar precios en tiendas.',
        'fr': 'Apprenez à commander de la nourriture au restaurant ou à demander les prix en magasin.',
        'de': 'Lernen Sie, im Restaurant zu bestellen oder im Geschäft nach Preisen zu fragen.'
      },
      vocab: [
        { word: 'いくら', meanings: {
      'zh-TW': '多少錢',
      'zh-CN': '多少錢',
      'en': 'How much',
      'ja': 'いくら',
      'ko': '얼마',
      'es': 'Cuánto',
      'fr': 'Combien',
      'de': 'Wieviel'
    }, phonetic: '[1]' },
        { word: 'メニュー', meanings: {
      'zh-TW': '菜單',
      'zh-CN': '菜單',
      'en': 'Menu',
      'ja': 'メニュー',
      'ko': '메뉴',
      'es': 'Menú',
      'fr': 'Menu',
      'de': 'Menü'
    }, phonetic: '[1]' },
        { word: 'みず', meanings: {
      'zh-TW': '水',
      'zh-CN': '水',
      'en': 'Water',
      'ja': '水',
      'ko': '물',
      'es': 'Agua',
      'fr': 'Eau',
      'de': 'Wasser'
    }, phonetic: '水 [0]' },
        { word: 'コーヒー', meanings: {
      'zh-TW': '咖啡',
      'zh-CN': '咖啡',
      'en': 'Coffee',
      'ja': 'コーヒー',
      'ko': '커피',
      'es': 'Café',
      'fr': 'Café',
      'de': 'Kaffee'
    }, phonetic: '[3]' },
        { word: 'えん', meanings: {
      'zh-TW': '日圓',
      'zh-CN': '日圓',
      'en': 'Yen',
      'ja': '円',
      'ko': '엔',
      'es': 'Yen',
      'fr': 'Yen',
      'de': 'Yen'
    }, phonetic: '円 [1]' }
      ],
      patterns: [
        { pattern: 'これは いくら ですか。', explanation: '這個多少錢？', explanations: {"zh-TW":"這個多少錢？","zh-CN":"这个多少钱？","en":"...o'clock...minutes."} },
        { pattern: '[名詞] を お願いします。', explanation: '麻煩給我...', explanations: {"zh-TW":"麻煩給我...","zh-CN":"麻煩給我...","en":"How much is this?"} }
      ]
    },
    {
      id: 'ja_unit_7',
      title: {
        'zh-TW': '日常動作',
        'zh-CN': '日常动作',
        'en': 'Daily Actions',
        'ja': '日常の動作',
        'ko': '일상 동작',
        'es': 'Acciones diarias',
        'fr': 'Actions quotidiennes',
        'de': 'Tägliche Handlungen'
      },
      description: {
        'zh-TW': '描述習慣性的動作或即將要做的事。',
        'zh-CN': '描述习惯性的动作或即将要做的事。',
        'en': 'Describe habitual actions or things you are about to do.',
        'ja': '習慣的な動作やこれからすることについて述べます。',
        'ko': '습관적인 동작이나 하려고 하는 일을 묘사합니다.',
        'es': 'Describe acciones habituales o cosas que vas a hacer.',
        'fr': 'Décrivez les actions habituelles ou les choses que vous allez faire.',
        'de': 'Beschreiben Sie gewohnheitsmäßige Handlungen oder Dinge, die Sie tun werden.'
      },
      vocab: [
        { word: 'たべます', meanings: {
      'zh-TW': '吃',
      'zh-CN': '吃',
      'en': 'Eat',
      'ja': '食べる',
      'ko': '먹다',
      'es': 'Comer',
      'fr': 'Manger',
      'de': 'Essen'
    }, phonetic: '食べます [3]' },
        { word: 'のみます', meanings: {
      'zh-TW': '喝',
      'zh-CN': '喝',
      'en': 'Drink',
      'ja': '飲む',
      'ko': '마시다',
      'es': 'Beber',
      'fr': 'Boire',
      'de': 'Trinken'
    }, phonetic: '飲みます [3]' },
        { word: 'みます', meanings: {
      'zh-TW': '看',
      'zh-CN': '看',
      'en': 'See',
      'ja': '見る',
      'ko': '보다',
      'es': 'Ver',
      'fr': 'Voir',
      'de': 'Sehen'
    }, phonetic: '見ます [2]' },
        { word: 'あさごはん', meanings: {
      'zh-TW': '早餐',
      'zh-CN': '早餐',
      'en': 'Breakfast',
      'ja': '朝食',
      'ko': '아침 식사',
      'es': 'Desayuno',
      'fr': 'Petit-déjeuner',
      'de': 'Frühstück'
    }, phonetic: '朝ごはん [3]' },
        { word: 'おちゃ', meanings: {
      'zh-TW': '茶',
      'zh-CN': '茶',
      'en': 'Tea',
      'ja': 'お茶',
      'ko': '차',
      'es': 'Té',
      'fr': 'Thé',
      'de': 'Tee'
    }, phonetic: 'お茶 [0]' }
      ],
      patterns: [
        { pattern: 'わたしは [名詞] を [動詞ます]。', explanation: '我要/我習慣做...', explanations: {"zh-TW":"我要/我習慣做...","zh-CN":"我要/我习惯做...","en":"I want to / I usually do..."} },
        { pattern: '何を [動詞ます] か。', explanation: '你要做什麼？', explanations: {"zh-TW":"你要做什麼？","zh-CN":"你要做什么？","en":"Would you like to... together?"} }
      ]
    },
    {
      id: 'ja_unit_8',
      title: {
        'zh-TW': '邀請與提議',
        'zh-CN': '邀请与提议',
        'en': 'Invitations and Suggestions',
        'ja': '招待と提案',
        'ko': '초대와 제안',
        'es': 'Invitaciones y sugerencias',
        'fr': 'Invitations et suggestions',
        'de': 'Einladungen und Vorschläge'
      },
      description: {
        'zh-TW': '學會約別人一起做某件事。',
        'zh-CN': '学会约别人一起做某件事。',
        'en': 'Learn to invite someone to do something together.',
        'ja': '誰かと一緒に何かをするように誘うことを学びます。',
        'ko': '누군가와 함께 무언가를 하자고 제안하는 법을 배웁니다.',
        'es': 'Aprende a invitar a alguien a hacer algo juntos.',
        'fr': 'Apprenez à inviter quelqu\'un à faire quelque chose ensemble.',
        'de': 'Lernen Sie, jemanden einzuladen, etwas gemeinsam zu machen.'
      },
      vocab: [
        { word: 'いっしょに', meanings: {
      'zh-TW': '一起',
      'zh-CN': '一起',
      'en': 'Together',
      'ja': '一緒に',
      'ko': '함께',
      'es': 'Juntos',
      'fr': 'Ensemble',
      'de': 'Zusammen'
    }, phonetic: '一緒に [0]' },
        { word: 'えいが', meanings: {
      'zh-TW': '電影',
      'zh-CN': '电影',
      'en': 'Movie',
      'ja': '映画',
      'ko': '영화',
      'es': 'Película',
      'fr': 'Film',
      'de': 'Film'
    }, phonetic: '映画 [0]' },
        { word: 'あした', meanings: {
      'zh-TW': '明天',
      'zh-CN': '明天',
      'en': 'Tomorrow',
      'ja': '明日',
      'ko': '내일',
      'es': 'Mañana',
      'fr': 'Demain',
      'de': 'Morgen'
    }, phonetic: '明日 [3]' },
        { word: 'いきます', meanings: {
      'zh-TW': '去',
      'zh-CN': '去',
      'en': 'Go',
      'ja': '行く',
      'ko': '가다',
      'es': 'Ir',
      'fr': 'Aller',
      'de': 'Gehen'
    }, phonetic: '行きます [3]' }
      ],
      patterns: [
        { pattern: '一緒に [動詞] ませんか。', explanation: '要不要一起...？', explanations: {"zh-TW":"要不要一起...？","zh-CN":"要不要一起...？","en":"At that time, it was..."} },
        { pattern: '[動詞] ましょう。', explanation: '我們...吧', explanations: {"zh-TW":"我們...吧","zh-CN":"我们...吧","en":"I want something."} }
      ]
    },
    {
      id: 'ja_unit_9',
      title: {
        'zh-TW': '過去的經驗',
        'zh-CN': '过去的经验',
        'en': 'Past Experiences',
        'ja': '過去の経験',
        'ko': '과거의 경험',
        'es': 'Experiencias pasadas',
        'fr': 'Expériences passées',
        'de': 'Vergangene Erfahrungen'
      },
      description: {
        'zh-TW': '描述昨天或以前發生的事情。',
        'zh-CN': '描述昨天或以前发生的事情。',
        'en': 'Describe things that happened yesterday or in the past.',
        'ja': '昨日や以前に起こったことを述べます。',
        'ko': '어제나 과거에 일어난 일을 묘사합니다.',
        'es': 'Describe cosas que sucedieron ayer o en el pasado.',
        'fr': 'Décrivez des choses qui se sont passées hier ou dans le passé.',
        'de': 'Beschreiben Sie Dinge, die gestern oder in der Vergangenheit passiert sind.'
      },
      vocab: [
        { word: 'きのう', meanings: {
      'zh-TW': '昨天',
      'zh-CN': '昨天',
      'en': 'Yesterday',
      'ja': '昨日',
      'ko': '어제',
      'es': 'Ayer',
      'fr': 'Hier',
      'de': 'Gestern'
    }, phonetic: '昨日 [2]' },
        { word: 'せんしゅう', meanings: {
      'zh-TW': '上週',
      'zh-CN': '上週',
      'en': 'Last week',
      'ja': '先週',
      'ko': '지난 주',
      'es': 'La semana pasada',
      'fr': 'La semaine dernière',
      'de': 'Letzte Woche'
    }, phonetic: '先週 [0]' },
        { word: 'いそがしい', meanings: {
      'zh-TW': '忙碌的',
      'zh-CN': '忙碌的',
      'en': 'Busy',
      'ja': '忙しい',
      'ko': '바쁜',
      'es': 'Ocupado',
      'fr': 'Occupé',
      'de': 'Beschäftigt'
    }, phonetic: '忙しい [4]' },
        { word: 'ひま', meanings: {
      'zh-TW': '閒暇的',
      'zh-CN': '闲暇的',
      'en': 'Free time',
      'ja': '暇な',
      'ko': '여유로운',
      'es': 'Libre',
      'fr': 'Libre',
      'de': 'Frei'
    }, phonetic: '暇 [0]' }
      ],
      patterns: [
        { pattern: '[名詞/形容詞] でした。', explanation: '當時是...', explanations: {"zh-TW":"當時是...","zh-CN":"当时是...","en":"Please connect me to someone."} },
        { pattern: '[動詞] ました。', explanation: '已經做了...', explanations: {"zh-TW":"已經做了...","zh-CN":"已經做了...","en":"May I...?"} }
      ]
    },
    {
      id: 'ja_unit_10',
      title: {
        'zh-TW': '想要與願望',
        'zh-CN': '想要与愿望',
        'en': 'Wants and Desires',
        'ja': '欲しいものと願望',
        'ko': '원함과 소망',
        'es': 'Deseos y aspiraciones',
        'fr': 'Envies et désirs',
        'de': 'Wünsche und Begierden'
      },
      description: {
        'zh-TW': '表達自己想要的東西或想做的事。',
        'zh-CN': '表达自己想要的东西或想做的事。',
        'en': 'Express things you want or things you want to do.',
        'ja': '欲しい物ややりたいことを表現します。',
        'ko': '원하는 것이나 하고 싶은 일을 표현합니다.',
        'es': 'Expresa cosas que quieres o cosas que quieres hacer.',
        'fr': 'Exprimez les choses que vous voulez ou que vous voulez faire.',
        'de': 'Drücken Sie Dinge aus, die Sie wollen oder tun möchten.'
      },
      vocab: [
        { word: 'ほしい', meanings: {
      'zh-TW': '想要的',
      'zh-CN': '想要的',
      'en': 'Wanted',
      'ja': '欲しい',
      'ko': '원하는',
      'es': 'Deseado',
      'fr': 'Voulu',
      'de': 'Gewollt'
    }, phonetic: '欲しい [2]' },
        { word: 'くるま', meanings: {
      'zh-TW': '車子',
      'zh-CN': '车子',
      'en': 'Car',
      'ja': '車',
      'ko': '자동차',
      'es': 'Coche',
      'fr': 'Voiture',
      'de': 'Auto'
    }, phonetic: '車 [0]' },
        { word: 'あたらしい', meanings: {
      'zh-TW': '新的',
      'zh-CN': '新的',
      'en': 'New',
      'ja': '新しい',
      'ko': '새로운',
      'es': 'Nuevo',
      'fr': 'Nouveau',
      'de': 'Neu'
    }, phonetic: '新しい [4]' },
        { word: 'かいます', meanings: {
      'zh-TW': '買',
      'zh-CN': '买',
      'en': 'Buy',
      'ja': '買う',
      'ko': '사다',
      'es': 'Comprar',
      'fr': 'Acheter',
      'de': 'Kaufen'
    }, phonetic: '買います [3]' }
      ],
      patterns: [
        { pattern: 'わたしは [名詞] が 欲しいです。', explanation: '我想要某物', explanations: {"zh-TW":"我想要某物","zh-CN":"我想要某物","en":"To become..."} },
        { pattern: 'わたしは [動詞ます去ます] たいです。', explanation: '我想要做某事', explanations: {"zh-TW":"我想要做某事","zh-CN":"我想要做某事","en":"A is more... than B."} }
      ]
    },
    {
      id: 'ja_unit_11',
      title: {
        'zh-TW': '打電話與留言',
        'zh-CN': '打电话与留言',
        'en': 'Phone Calls and Messages',
        'ja': '電話と伝言',
        'ko': '전화와 메시지',
        'es': 'Llamadas telefónicas y mensajes',
        'fr': 'Appels téléphoniques et messages',
        'de': 'Telefonanrufe und Nachrichten'
      },
      description: {
        'zh-TW': '學會基本的電話接聽與留言說法。',
        'zh-CN': '学会基本的电话接听与留言说法。',
        'en': 'Learn basic phone answering and message taking expressions.',
        'ja': '基本的な電話の出方と伝言の言い方を学びます。',
        'ko': '기본적인 전화 받기와 메시지 남기기 표현을 배웁니다.',
        'es': 'Aprende expresiones básicas para contestar el teléfono y dejar mensajes.',
        'fr': 'Apprenez les expressions de base pour répondre au téléphone et laisser des messages.',
        'de': 'Lernen Sie grundlegende Ausdrücke für das Telefonieren und Hinterlassen von Nachrichten.'
      },
      vocab: [
        { word: 'もしもし', meanings: {
      'zh-TW': '喂',
      'zh-CN': '喂',
      'en': 'Hello (phone)',
      'ja': 'もしもし',
      'ko': '여보세요',
      'es': 'Aló',
      'fr': 'Allô',
      'de': 'Hallo'
    }, phonetic: '[1]' },
        { word: 'でんわ', meanings: {
      'zh-TW': '電話',
      'zh-CN': '电话',
      'en': 'Phone',
      'ja': '電話',
      'ko': '전화',
      'es': 'Teléfono',
      'fr': 'Téléphone',
      'de': 'Telefon'
    }, phonetic: '電話 [0]' },
        { word: 'おねがいします', meanings: {
      'zh-TW': '麻煩您了',
      'zh-CN': '麻烦您了',
      'en': 'Thank you for your trouble',
      'ja': 'お手数をおかけします',
      'ko': '신세 집니다',
      'es': 'Gracias por su molestia',
      'fr': 'Merci de votre aide',
      'de': 'Danke für die Mühe'
    }, phonetic: 'お願いします [4]' },
        { word: 'いま', meanings: {
      'zh-TW': '現在',
      'zh-CN': '現在',
      'en': 'Now',
      'ja': '今',
      'ko': '지금',
      'es': 'Ahora',
      'fr': 'Maintenant',
      'de': 'Jetzt'
    }, phonetic: '今 [1]' },
        { word: 'かいぎ', meanings: {
      'zh-TW': '會議',
      'zh-CN': '会议',
      'en': 'Meeting',
      'ja': '会議',
      'ko': '회의',
      'es': 'Reunión',
      'fr': 'Réunion',
      'de': 'Besprechung'
    }, phonetic: '会議 [1]' }
      ],
      patterns: [
        { pattern: '[名詞] を お願いします。', explanation: '請找某人聽電話', explanations: {"zh-TW":"請找某人聽電話","zh-CN":"请找某人聽电话","en":"Have had the experience of..."} },
        { pattern: '今は [名詞] 中です。', explanation: '現在正在...中', explanations: {"zh-TW":"現在正在...中","zh-CN":"现在正在...中","en":"My name is..."} }
      ]
    },
    {
      id: 'ja_unit_12',
      title: {
        'zh-TW': '請求與許可',
        'zh-CN': '请求与许可',
        'en': 'Requests and Permissions',
        'ja': '依頼と許可',
        'ko': '요청과 허락',
        'es': 'Peticiones y permisos',
        'fr': 'Demandes et permissions',
        'de': 'Bitten und Erlaubnis'
      },
      description: {
        'zh-TW': '客氣地請別人幫忙或詢問可不可以做某事。',
        'zh-CN': '客气地请别人帮忙或询问可不可以做某事。',
        'en': 'Politely ask someone for help or inquire if you can do something.',
        'ja': '丁寧に人に助けを求めたり、何かしてもいいか尋ねたりします。',
        'ko': '정중하게 도움을 요청하거나 무엇을 해도 되는지 물어봅니다.',
        'es': 'Pide ayuda a alguien amablemente o pregunta si puedes hacer algo.',
        'fr': 'Demandez poliment de l\'aide à quelqu\'un ou demandez si vous pouvez faire quelque chose.',
        'de': 'Bitten Sie höflich jemanden um Hilfe oder fragen Sie, ob Sie etwas tun dürfen.'
      },
      vocab: [
        { word: 'てつだいます', meanings: {
      'zh-TW': '幫忙',
      'zh-CN': '帮忙',
      'en': 'Help',
      'ja': '手伝い',
      'ko': '도움',
      'es': 'Ayuda',
      'fr': 'Aide',
      'de': 'Hilfe'
    }, phonetic: '手伝います [4]' },
        { word: 'つかいます', meanings: {
      'zh-TW': '使用',
      'zh-CN': '使用',
      'en': 'Use',
      'ja': '使う',
      'ko': '사용',
      'es': 'Usar',
      'fr': 'Utiliser',
      'de': 'Benutzen'
    }, phonetic: '使います [4]' },
        { word: 'どうぞ', meanings: {
      'zh-TW': '請',
      'zh-CN': '请',
      'en': 'Please',
      'ja': 'ください',
      'ko': '제발',
      'es': 'Por favor',
      'fr': 'S\'il vous plaît',
      'de': 'Bitte'
    }, phonetic: '[1]' },
        { word: 'いいですか', meanings: {
      'zh-TW': '可以嗎',
      'zh-CN': '可以吗',
      'en': 'May I?',
      'ja': 'いいですか？',
      'ko': '되나요?',
      'es': '¿Puedo?',
      'fr': 'Puis-je?',
      'de': 'Darf ich?'
    }, phonetic: '[1]' }
      ],
      patterns: [
        { pattern: '[動詞て形] も いいですか。', explanation: '我可以...嗎？', explanations: {"zh-TW":"我可以...嗎？","zh-CN":"我可以...吗？","en":"I am a..."} },
        { pattern: '[動詞て形] ください。', explanation: '請你幫我...', explanations: {"zh-TW":"請你幫我...","zh-CN":"请你幫我...","en":"What is this?"} }
      ]
    },
    {
      id: 'ja_unit_13',
      title: {
        'zh-TW': '狀態與變化',
        'zh-CN': '状态与变化',
        'en': 'States and Changes',
        'ja': '状態と変化',
        'ko': '상태와 변화',
        'es': 'Estados y cambios',
        'fr': 'États et changements',
        'de': 'Zustände und Veränderungen'
      },
      description: {
        'zh-TW': '描述天氣或事物的狀態改變。',
        'zh-CN': '描述天气或事物的状态改变。',
        'en': 'Describe changes in weather or the state of things.',
        'ja': '天気や物事の状態の変化を述べます。',
        'ko': '날씨나 사물의 상태 변화를 묘사합니다.',
        'es': 'Describe cambios en el clima o en el estado de las cosas.',
        'fr': 'Décrivez les changements de la météo ou de l\'état des choses.',
        'de': 'Beschreiben Sie Änderungen des Wetters oder des Zustands von Dingen.'
      },
      vocab: [
        { word: 'てんき', meanings: {
      'zh-TW': '天氣',
      'zh-CN': '天氣',
      'en': 'Weather',
      'ja': '天気',
      'ko': '날씨',
      'es': 'Clima',
      'fr': 'Temps',
      'de': 'Wetter'
    }, phonetic: '天気 [1]' },
        { word: 'あつい', meanings: {
      'zh-TW': '熱的',
      'zh-CN': '热的',
      'en': 'Hot',
      'ja': '暑い',
      'ko': '더운',
      'es': 'Caliente',
      'fr': 'Chaud',
      'de': 'Heiß'
    }, phonetic: '暑い [2]' },
        { word: 'さむい', meanings: {
      'zh-TW': '冷的',
      'zh-CN': '冷的',
      'en': 'Cold',
      'ja': '寒い',
      'ko': '추운',
      'es': 'Frío',
      'fr': 'Froid',
      'de': 'Kalt'
    }, phonetic: '寒い [2]' },
        { word: 'なります', meanings: {
      'zh-TW': '變成',
      'zh-CN': '变成',
      'en': 'Become',
      'ja': 'なる',
      'ko': '되다',
      'es': 'Convertirse en',
      'fr': 'Devenir',
      'de': 'Werden'
    }, phonetic: '[3]' }
      ],
      patterns: [
        { pattern: '[形容詞/名詞] に なります。', explanation: '變得...', explanations: {"zh-TW":"變得...","zh-CN":"变得...","en":"Where is...?"} },
        { pattern: 'とても [形容詞] です。', explanation: '非常...', explanations: {"zh-TW":"非常...","zh-CN":"非常...","en":"How much is...?"} }
      ]
    },
    {
      id: 'ja_unit_14',
      title: {
        'zh-TW': '比較與選擇',
        'zh-CN': '比较与选择',
        'en': 'Comparisons and Choices',
        'ja': '比較と選択',
        'ko': '비교와 선택',
        'es': 'Comparaciones y elecciones',
        'fr': 'Comparaisons et choix',
        'de': 'Vergleiche und Wahlen'
      },
      description: {
        'zh-TW': '學會比較兩樣事物並表達偏好。',
        'zh-CN': '学会比较两样事物并表达偏好。',
        'en': 'Learn to compare two things and express preferences.',
        'ja': '二つの物を比較して、好みを表現することを学びます。',
        'ko': '두 가지를 비교하고 선호도를 표현하는 법을 배웁니다.',
        'es': 'Aprende a comparar dos cosas y expresar preferencias.',
        'fr': 'Apprenez à comparer deux choses et à exprimer vos préférences.',
        'de': 'Lernen Sie, zwei Dinge zu vergleichen und Vorlieben auszudrücken.'
      },
      vocab: [
        { word: 'おおきい', meanings: {
      'zh-TW': '大的',
      'zh-CN': '大的',
      'en': 'Big',
      'ja': '大きい',
      'ko': '큰',
      'es': 'Grande',
      'fr': 'Grand',
      'de': 'Groß'
    }, phonetic: '大きい [3]' },
        { word: 'ちいさい', meanings: {
      'zh-TW': '小的',
      'zh-CN': '小的',
      'en': 'Small',
      'ja': '小さい',
      'ko': '작은',
      'es': 'Pequeño',
      'fr': 'Petit',
      'de': 'Klein'
    }, phonetic: '小さい [3]' },
        { word: 'どちら', meanings: {
      'zh-TW': '哪一邊',
      'zh-CN': '哪一边',
      'en': 'Which side',
      'ja': 'どちら',
      'ko': '어느 쪽',
      'es': 'Qué lado',
      'fr': 'Quel côté',
      'de': 'Welche Seite'
    }, phonetic: '[1]' },
        { word: 'より', meanings: {
      'zh-TW': '比...',
      'zh-CN': '比...',
      'en': 'Compared to...',
      'ja': '…より',
      'ko': '…보다',
      'es': 'Comparado con...',
      'fr': 'Comparé à...',
      'de': 'Im Vergleich zu...'
    }, phonetic: '[1]' }
      ],
      patterns: [
        { pattern: 'Aは Bより [形容詞] です。', explanation: 'A比B更...', explanations: {"zh-TW":"A比B更...","zh-CN":"A比B更...","en":"What time is it?"} },
        { pattern: 'Aと Bと どちらが [形容詞] ですか。', explanation: 'A跟B哪個比較...？', explanations: {"zh-TW":"A跟B哪個比較...？","zh-CN":"A跟B哪个比較...？","en":"Do you like...?"} }
      ]
    },
    {
      id: 'ja_unit_15',
      title: {
        'zh-TW': '經驗與建議',
        'zh-CN': '经验与建议',
        'en': 'Experience and Advice',
        'ja': '経験とアドバイス',
        'ko': '경험과 조언',
        'es': 'Experiencia y consejos',
        'fr': 'Expérience et conseils',
        'de': 'Erfahrung und Ratschläge'
      },
      description: {
        'zh-TW': '分享做過的事並給予他人建議。',
        'zh-CN': '分享做过的事并给予他人建议。',
        'en': 'Share things you have done and give advice to others.',
        'ja': 'やったことを共有し、他の人にアドバイスを与えます。',
        'ko': '해본 일을 공유하고 다른 사람에게 조언을 합니다.',
        'es': 'Comparte cosas que has hecho y da consejos a otros.',
        'fr': 'Partagez des choses que vous avez faites et donnez des conseils aux autres.',
        'de': 'Teilen Sie Dinge, die Sie getan haben, und geben Sie anderen Ratschläge.'
      },
      vocab: [
        { word: '日本', meanings: {
      'zh-TW': '日本',
      'zh-CN': '日本',
      'en': 'Japan',
      'ja': '日本',
      'ko': '일본',
      'es': 'Japón',
      'fr': 'Japon',
      'de': 'Japan'
    }, phonetic: '[2]' },
        { word: 'べんきょう', meanings: {
      'zh-TW': '學習',
      'zh-CN': '学习',
      'en': 'Study',
      'ja': '勉強',
      'ko': '공부',
      'es': 'Estudio',
      'fr': 'Étude',
      'de': 'Studium'
    }, phonetic: '勉強 [0]' },
        { word: 'ほうがいい', meanings: {
      'zh-TW': '比較好',
      'zh-CN': '比较好',
      'en': 'Better',
      'ja': 'より良い',
      'ko': '더 낫다',
      'es': 'Mejor',
      'fr': 'Meilleur',
      'de': 'Besser'
    }, phonetic: '[1]' },
        { word: 'あります', meanings: {
      'zh-TW': '有',
      'zh-CN': '有',
      'en': 'Have',
      'ja': 'ある',
      'ko': '있다',
      'es': 'Tener',
      'fr': 'Avoir',
      'de': 'Haben'
    }, phonetic: '[3]' }
      ],
      patterns: [
        { pattern: '[動詞た形] ことが あります。', explanation: '曾經有...的經驗', explanations: {"zh-TW":"曾經有...的經驗","zh-CN":"曾经有...的经验","en":"Can you...?"} },
        { pattern: '[動詞た形] ほうが いいです。', explanation: '最好做...', explanations: {"zh-TW":"最好做...","zh-CN":"最好做...","en":"Have you ever...?"} }
      ]
    }
  ],
  en: [
    {
      id: 'en_unit_1',
      title: {
        'zh-TW': '基本問候與見面',
        'zh-CN': '基本问候与见面',
        'en': 'Basic Greetings and Meetings',
        'ja': '基本的な挨拶と出会い',
        'ko': '기본 인사와 만남',
        'es': 'Saludos básicos y encuentros',
        'fr': 'Salutations de base et rencontres',
        'de': 'Grundlegende Begrüßungen und Begegnungen'
      },
      description: {
        'zh-TW': '用英文自信地打招呼。',
        'zh-CN': '用英文自信地打招呼。',
        'en': 'Greet confidently in English.',
        'ja': '英語で自信を持って挨拶します。',
        'ko': '영어로 자신있게 인사합니다.',
        'es': 'Saluda con confianza en inglés.',
        'fr': 'Saluez avec confiance en anglais.',
        'de': 'Grüßen Sie selbstbewusst auf Englisch.'
      },
      vocab: [
        { word: 'Hello', meanings: {
      'zh-TW': '你好',
      'zh-CN': '你好',
      'en': 'Hello',
      'ja': 'こんにちは',
      'ko': '안녕하세요',
      'es': 'Hola',
      'fr': 'Bonjour',
      'de': 'Hallo'
    }, phonetic: '/həˈloʊ/' },
        { word: 'Good morning', meanings: {
      'zh-TW': '早安',
      'zh-CN': '早安',
      'en': 'Good morning',
      'ja': 'おはようございます',
      'ko': '좋은 아침',
      'es': 'Buenos días',
      'fr': 'Bonjour',
      'de': 'Guten Morgen'
    }, phonetic: '/ɡʊd ˈmɔːrnɪŋ/' },
        { word: 'Name', meanings: {
      'zh-TW': '名字',
      'zh-CN': '名字',
      'en': 'Name',
      'ja': '名前',
      'ko': '이름',
      'es': 'Nombre',
      'fr': 'Nom',
      'de': 'Name'
    }, phonetic: '/neɪm/' },
        { word: 'Nice', meanings: {
      'zh-TW': '好的/高興的',
      'zh-CN': '好的/高兴的',
      'en': 'Good / Happy',
      'ja': '良い / 嬉しい',
      'ko': '좋은 / 기쁜',
      'es': 'Bueno / Feliz',
      'fr': 'Bon / Heureux',
      'de': 'Gut / Glücklich'
    }, phonetic: '/naɪs/' },
        { word: 'Meet', meanings: {
      'zh-TW': '遇見',
      'zh-CN': '遇见',
      'en': 'Meet',
      'ja': '会う',
      'ko': '만나다',
      'es': 'Conocer',
      'fr': 'Rencontrer',
      'de': 'Treffen'
    }, phonetic: '/miːt/' }
      ],
      patterns: [
        { pattern: 'My name is [Name].', explanation: '我的名字是...', explanations: {"zh-TW":"我的名字是...","zh-CN":"我的名字是...","en":"What are you going to do?"} },
        { pattern: 'Nice to meet you.', explanation: '很高興認識你。', explanations: {"zh-TW":"很高興認識你。","zh-CN":"很高興认識你。","en":"May I speak to...?"} }
      ]
    },
    {
      id: 'en_unit_2',
      title: {
        'zh-TW': '職業與國籍',
        'zh-CN': '职业与国籍',
        'en': 'Professions and Nationality',
        'ja': '職業と国籍',
        'ko': '직업과 국적',
        'es': 'Profesiones y nacionalidad',
        'fr': 'Professions et nationalité',
        'de': 'Berufe und Staatsangehörigkeit'
      },
      description: {
        'zh-TW': '使用 Be 動詞描述狀態與身分。',
        'zh-CN': '使用 Be 动词描述状态与身份。',
        'en': 'Use the verb "to be" to describe status and identity.',
        'ja': '動詞「to be」を使って状態と身分を述べます。',
        'ko': '"to be" 동사를 사용하여 상태와 신분을 묘사합니다.',
        'es': 'Usa el verbo "to be" para describir el estado y la identidad.',
        'fr': 'Utilisez le verbe "to be" pour décrire l\'état et l\'identité.',
        'de': 'Verwenden Sie das Verb "to be", um Status und Identität zu beschreiben.'
      },
      vocab: [
        { word: 'Teacher', meanings: {
      'zh-TW': '老師',
      'zh-CN': '老師',
      'en': 'Teacher',
      'ja': '先生',
      'ko': '선생님',
      'es': 'Profesor',
      'fr': 'Enseignant',
      'de': 'Lehrer'
    }, phonetic: '/ˈtiːtʃər/' },
        { word: 'Student', meanings: {
      'zh-TW': '學生',
      'zh-CN': '學生',
      'en': 'Student',
      'ja': '学生',
      'ko': '학생',
      'es': 'Estudiante',
      'fr': 'Étudiant',
      'de': 'Student'
    }, phonetic: '/ˈstjuːdənt/' },
        { word: 'Engineer', meanings: {
      'zh-TW': '工程師',
      'zh-CN': '工程師',
      'en': 'Engineer',
      'ja': 'エンジニア',
      'ko': '엔지니어',
      'es': 'Ingeniero',
      'fr': 'Ingénieur',
      'de': 'Ingenieur'
    }, phonetic: '/ˌendʒɪˈnɪr/' },
        { word: 'Taiwan', meanings: {
      'zh-TW': '台灣',
      'zh-CN': '台湾',
      'en': 'Taiwan',
      'ja': '台湾',
      'ko': '대만',
      'es': 'Taiwán',
      'fr': 'Taïwan',
      'de': 'Taiwan'
    }, phonetic: '/taɪˈwɑːn/' },
        { word: 'America', meanings: {
      'zh-TW': '美國',
      'zh-CN': '美国',
      'en': 'America',
      'ja': 'アメリカ',
      'ko': '미국',
      'es': 'Estados Unidos',
      'fr': 'Amérique',
      'de': 'Amerika'
    }, phonetic: '/əˈmerɪkə/' }
      ],
      patterns: [
        { pattern: 'I am a [Noun].', explanation: '我是一個...', explanations: {"zh-TW":"我是一個...","zh-CN":"我是一个...","en":"Can you help me...?"} },
        { pattern: 'Are you a [Noun]?', explanation: '你是一個...嗎？', explanations: {"zh-TW":"你是一個...嗎？","zh-CN":"你是一个...吗？","en":"A is better than B."} }
      ]
    },
    {
      id: 'en_unit_3',
      title: {
        'zh-TW': '指示與物品',
        'zh-CN': '指示与物品',
        'en': 'Demonstratives and Objects',
        'ja': '指示と物',
        'ko': '지시와 물건',
        'es': 'Demostrativos y objetos',
        'fr': 'Démonstratifs et objets',
        'de': 'Zeige- und Objektpronomen'
      },
      description: {
        'zh-TW': '指認周遭物品。',
        'zh-CN': '指认周遭物品。',
        'en': 'Point out and identify objects around you.',
        'ja': '周りの物を指差して、それが何か言います。',
        'ko': '주변의 물건을 가리키고 식별합니다.',
        'es': 'Señala y identifica objetos a tu alrededor.',
        'fr': 'Désignez et identifiez les objets autour de vous.',
        'de': 'Zeigen Sie auf Gegenstände in Ihrer Umgebung und identifizieren Sie diese.'
      },
      vocab: [
        { word: 'This', meanings: {
      'zh-TW': '這個',
      'zh-CN': '這個',
      'en': 'This',
      'ja': 'これ',
      'ko': '이것',
      'es': 'Esto',
      'fr': 'Ceci',
      'de': 'Dieses'
    }, phonetic: '/ðɪs/' },
        { word: 'That', meanings: {
      'zh-TW': '那個',
      'zh-CN': '那個',
      'en': 'That',
      'ja': 'それ',
      'ko': '저것',
      'es': 'Eso',
      'fr': 'Cela',
      'de': 'Jenes'
    }, phonetic: '/ðæt/' },
        { word: 'Pen', meanings: {
      'zh-TW': '筆',
      'zh-CN': '筆',
      'en': 'Pen',
      'ja': 'ペン',
      'ko': '펜',
      'es': 'Bolígrafo',
      'fr': 'Stylo',
      'de': 'Kugelschreiber'
    }, phonetic: '/pen/' },
        { word: 'Computer', meanings: {
      'zh-TW': '電腦',
      'zh-CN': '電腦',
      'en': 'Computer',
      'ja': 'パソコン',
      'ko': '컴퓨터',
      'es': 'Computadora',
      'fr': 'Ordinateur',
      'de': 'Computer'
    }, phonetic: '/kəmˈpjuːtər/' },
        { word: 'Phone', meanings: {
      'zh-TW': '電話',
      'zh-CN': '电话',
      'en': 'Phone',
      'ja': '電話',
      'ko': '전화',
      'es': 'Teléfono',
      'fr': 'Téléphone',
      'de': 'Telefon'
    }, phonetic: '/foʊn/' }
      ],
      patterns: [
        { pattern: 'What is this?', explanation: '這是什麼？', explanations: {"zh-TW":"這是什麼？","zh-CN":"这是什么？","en":"You should..."} },
        { pattern: 'This is a [Noun].', explanation: '這是一個...', explanations: {"zh-TW":"這是一個...","zh-CN":"这是一个...","en":"Have you ever...?"} }
      ]
    },
    {
      id: 'en_unit_4',
      title: {
        'zh-TW': '地點與方向',
        'zh-CN': '地点与方向',
        'en': 'Places and Directions',
        'ja': '場所と方向',
        'ko': '장소와 방향',
        'es': 'Lugares y direcciones',
        'fr': 'Lieux et directions',
        'de': 'Orte und Richtungen'
      },
      description: {
        'zh-TW': '詢問廁所或辦公室在哪裡。',
        'zh-CN': '询问厕所在哪里。',
        'en': 'Ask where the restroom or office is.',
        'ja': 'トイレやオフィスがどこにあるか尋ねます。',
        'ko': '화장실이나 사무실이 어디에 있는지 물어봅니다.',
        'es': 'Pregunta dónde está el baño o la oficina.',
        'fr': 'Demandez où sont les toilettes ou le bureau.',
        'de': 'Fragen Sie, wo sich die Toilette oder das Büro befindet.'
      },
      vocab: [
        { word: 'Here', meanings: {
      'zh-TW': '這裡',
      'zh-CN': '這裡',
      'en': 'Here',
      'ja': 'ここ',
      'ko': '여기',
      'es': 'Aquí',
      'fr': 'Ici',
      'de': 'Hier'
    }, phonetic: '/hɪr/' },
        { word: 'There', meanings: {
      'zh-TW': '那裡',
      'zh-CN': '那裡',
      'en': 'There',
      'ja': 'そこ',
      'ko': '거기',
      'es': 'Allí',
      'fr': 'Là',
      'de': 'Dort'
    }, phonetic: '/ðer/' },
        { word: 'Restroom', meanings: {
      'zh-TW': '廁所',
      'zh-CN': '廁所',
      'en': 'Toilet',
      'ja': 'トイレ',
      'ko': '화장실',
      'es': 'Baño',
      'fr': 'Toilette',
      'de': 'Toilette'
    }, phonetic: '/ˈrestruːm/' },
        { word: 'Office', meanings: {
      'zh-TW': '辦公室',
      'zh-CN': '办公室',
      'en': 'Office',
      'ja': 'オフィス',
      'ko': '사무실',
      'es': 'Oficina',
      'fr': 'Bureau',
      'de': 'Büro'
    }, phonetic: '/ˈɔːfɪs/' },
        { word: 'Where', meanings: {
      'zh-TW': '哪裡',
      'zh-CN': '哪裡',
      'en': 'Where',
      'ja': 'どこ',
      'ko': '어디',
      'es': 'Dónde',
      'fr': 'Où',
      'de': 'Wo'
    }, phonetic: '/wer/' }
      ],
      patterns: [
        { pattern: 'Where is the [Noun]?', explanation: '...在哪裡？', explanations: {"zh-TW":"...在哪裡？","zh-CN":"...在哪里？","en":"I am doing..."} },
        { pattern: 'It is [Location].', explanation: '它在...', explanations: {"zh-TW":"它在...","zh-CN":"它在...","en":"Please tell me more about..."} }
      ]
    },
    {
      id: 'en_unit_5',
      title: {
        'zh-TW': '數字與購物',
        'zh-CN': '数字与购物',
        'en': 'Numbers and Shopping',
        'ja': '数字と買い物',
        'ko': '숫자와 쇼핑',
        'es': 'Números y compras',
        'fr': 'Nombres et achats',
        'de': 'Zahlen und Einkaufen'
      },
      description: {
        'zh-TW': '詢問價格與基本點餐。',
        'zh-CN': '询问价格与基本点餐。',
        'en': 'Ask about prices and order food basics.',
        'ja': '値段を尋ねたり、基本的な注文の仕方を学びます。',
        'ko': '가격을 묻고 기본적인 음식 주문을 합니다.',
        'es': 'Pregunta sobre precios y haz pedidos básicos de comida.',
        'fr': 'Demandez les prix et faites des commandes de base.',
        'de': 'Fragen Sie nach Preisen und geben Sie einfache Bestellungen auf.'
      },
      vocab: [
        { word: 'How much', meanings: {
      'zh-TW': '多少錢',
      'zh-CN': '多少錢',
      'en': 'How much',
      'ja': 'いくら',
      'ko': '얼마',
      'es': 'Cuánto',
      'fr': 'Combien',
      'de': 'Wieviel'
    }, phonetic: '/haʊ mʌtʃ/' },
        { word: 'Dollar', meanings: {
      'zh-TW': '元',
      'zh-CN': '元',
      'en': 'Yuan',
      'ja': '元',
      'ko': '위안',
      'es': 'Yuan',
      'fr': 'Yuan',
      'de': 'Yuan'
    }, phonetic: '/ˈdɑːlər/' },
        { word: 'Coffee', meanings: {
      'zh-TW': '咖啡',
      'zh-CN': '咖啡',
      'en': 'Coffee',
      'ja': 'コーヒー',
      'ko': '커피',
      'es': 'Café',
      'fr': 'Café',
      'de': 'Kaffee'
    }, phonetic: '/ˈkɔːfi/' },
        { word: 'Menu', meanings: {
      'zh-TW': '菜單',
      'zh-CN': '菜單',
      'en': 'Menu',
      'ja': 'メニュー',
      'ko': '메뉴',
      'es': 'Menú',
      'fr': 'Menu',
      'de': 'Menü'
    }, phonetic: '/ˈmenjuː/' },
        { word: 'Receipt', meanings: {
      'zh-TW': '收據',
      'zh-CN': '收据',
      'en': 'Receipt',
      'ja': 'レシート',
      'ko': '영수증',
      'es': 'Recibo',
      'fr': 'Reçu',
      'de': 'Quittung'
    }, phonetic: '/rɪˈsiːt/' }
      ],
      patterns: [
        { pattern: 'How much is [Noun]?', explanation: '...多少錢？', explanations: {"zh-TW":"...多少錢？","zh-CN":"...多少钱？","en":"This sounds like..."} },
        { pattern: 'I would like [Noun], please.', explanation: '麻煩給我...', explanations: {"zh-TW":"麻煩給我...","zh-CN":"麻煩給我...","en":"I want..."} }
      ]
    },
    {
      id: 'en_unit_6',
      title: {
        'zh-TW': '時間與日常作息',
        'zh-CN': '时间与日常作息',
        'en': 'Time and Daily Routine',
        'ja': '時間と日常生活',
        'ko': '시간과 일상 생활',
        'es': 'Tiempo y rutina diaria',
        'fr': 'Temps et routine quotidienne',
        'de': 'Zeit und Tagesablauf'
      },
      description: {
        'zh-TW': '看懂時間，並描述每天固定行程。',
        'zh-CN': '看懂时间，并描述每天固定行程。',
        'en': 'Tell time and describe daily fixed schedules.',
        'ja': '時間を理解し、毎日の決まったスケジュールを述べます。',
        'ko': '시간을 읽고 매일의 고정 스케줄을 묘사합니다.',
        'es': 'Diga la hora y describa los horarios fijos diarios.',
        'fr': 'Lisez l\'heure et décrivez les horaires fixes quotidiens.',
        'de': 'Lesen Sie die Uhrzeit und beschreiben Sie tägliche feste Zeitpläne.'
      },
      vocab: [
        { word: 'Time', meanings: {
      'zh-TW': '時間',
      'zh-CN': '時間',
      'en': 'Time',
      'ja': '時間',
      'ko': '시간',
      'es': 'Tiempo',
      'fr': 'Temps',
      'de': 'Zeit'
    }, phonetic: '/taɪm/' },
        { word: 'Clock', meanings: {
      'zh-TW': '時鐘',
      'zh-CN': '时钟',
      'en': 'Clock',
      'ja': '時計',
      'ko': '시계',
      'es': 'Reloj',
      'fr': 'Horloge',
      'de': 'Uhr'
    }, phonetic: '/klɑːk/' },
        { word: 'Breakfast', meanings: {
      'zh-TW': '早餐',
      'zh-CN': '早餐',
      'en': 'Breakfast',
      'ja': '朝食',
      'ko': '아침 식사',
      'es': 'Desayuno',
      'fr': 'Petit-déjeuner',
      'de': 'Frühstück'
    }, phonetic: '/ˈbrekfəst/' },
        { word: 'Work', meanings: {
      'zh-TW': '工作',
      'zh-CN': '工作',
      'en': 'Work',
      'ja': '仕事',
      'ko': '일',
      'es': 'Trabajo',
      'fr': 'Travail',
      'de': 'Arbeit'
    }, phonetic: '/wɜːrk/' },
        { word: 'Sleep', meanings: {
      'zh-TW': '睡覺',
      'zh-CN': '睡觉',
      'en': 'Sleep',
      'ja': '寝る',
      'ko': '자다',
      'es': 'Dormir',
      'fr': 'Dormir',
      'de': 'Schlafen'
    }, phonetic: '/sliːp/' }
      ],
      patterns: [
        { pattern: 'What time is it?', explanation: '現在幾點？', explanations: {"zh-TW":"現在幾點？","zh-CN":"现在几点？","en":"I need to schedule..."} },
        { pattern: 'I [Verb] at [Time].', explanation: '我在...點做...', explanations: {"zh-TW":"我在...點做...","zh-CN":"我在...点做...","en":"When are you available?"} }
      ]
    },
    {
      id: 'en_unit_7',
      title: {
        'zh-TW': '喜好與厭惡',
        'zh-CN': '喜好与厌恶',
        'en': 'Likes and Dislikes',
        'ja': '好き嫌い',
        'ko': '좋아함과 싫어함',
        'es': 'Gustos y disgustos',
        'fr': 'Goûts et dégoûts',
        'de': 'Vorlieben und Abneigungen'
      },
      description: {
        'zh-TW': '表達自己喜歡或討厭的事物。',
        'zh-CN': '表达自己喜欢或讨厌的事物。',
        'en': 'Express things you like or dislike.',
        'ja': '好きなことや嫌いなことを表現します。',
        'ko': '좋아하거나 싫어하는 것을 표현합니다.',
        'es': 'Expresa cosas que te gustan o que no te gustan.',
        'fr': 'Exprimez les choses que vous aimez ou que vous n\'aimez pas.',
        'de': 'Drücken Sie Dinge aus, die Sie mögen oder nicht mögen.'
      },
      vocab: [
        { word: 'Like', meanings: {
      'zh-TW': '喜歡',
      'zh-CN': '喜欢',
      'en': 'Like',
      'ja': '好き',
      'ko': '좋아하다',
      'es': 'Gustar',
      'fr': 'Aimer',
      'de': 'Mögen'
    }, phonetic: '/laɪk/' },
        { word: 'Love', meanings: {
      'zh-TW': '愛/很喜歡',
      'zh-CN': '爱/很喜欢',
      'en': 'Love',
      'ja': '大好き',
      'ko': '사랑하다',
      'es': 'Amar',
      'fr': 'Aimer beaucoup',
      'de': 'Lieben'
    }, phonetic: '/lʌv/' },
        { word: 'Hate', meanings: {
      'zh-TW': '討厭',
      'zh-CN': '讨厌',
      'en': 'Dislike',
      'ja': '嫌い',
      'ko': '싫다',
      'es': 'No gustar',
      'fr': 'Détester',
      'de': 'Nicht mögen'
    }, phonetic: '/heɪt/' },
        { word: 'Food', meanings: {
      'zh-TW': '食物',
      'zh-CN': '食物',
      'en': 'Food',
      'ja': '食べ物',
      'ko': '음식',
      'es': 'Comida',
      'fr': 'Nourriture',
      'de': 'Essen'
    }, phonetic: '/fuːd/' },
        { word: 'Music', meanings: {
      'zh-TW': '音樂',
      'zh-CN': '音乐',
      'en': 'Music',
      'ja': '音楽',
      'ko': '음악',
      'es': 'Música',
      'fr': 'Musique',
      'de': 'Musik'
    }, phonetic: '/ˈmjuːzɪk/' }
      ],
      patterns: [
        { pattern: 'Do you like [Noun]?', explanation: '你喜歡...嗎？', explanations: {"zh-TW":"你喜歡...嗎？","zh-CN":"你喜歡...吗？","en":"I want to confirm..."} },
        { pattern: 'I like [Noun].', explanation: '我喜歡...', explanations: {"zh-TW":"我喜歡...","zh-CN":"我喜歡...","en":"I will..."} }
      ]
    },
    {
      id: 'en_unit_8',
      title: {
        'zh-TW': '能力與請求',
        'zh-CN': '能力与请求',
        'en': 'Abilities and Requests',
        'ja': '能力と依頼',
        'ko': '능력과 요청',
        'es': 'Habilidades y peticiones',
        'fr': 'Capacités et demandes',
        'de': 'Fähigkeiten und Bitten'
      },
      description: {
        'zh-TW': '說明自己會做什麼，以及請別人幫忙。',
        'zh-CN': '说明自己会做什么，以及请别人帮忙。',
        'en': 'Explain what you can do and ask others for help.',
        'ja': '自分が何ができるか説明し、他の人に助けを求めます。',
        'ko': '자신이 무엇을 할 수 있는지 설명하고 다른 사람에게 도움을 요청합니다.',
        'es': 'Explica qué puedes hacer y pide ayuda a otros.',
        'fr': 'Expliquez ce que vous pouvez faire et demandez de l\'aide aux autres.',
        'de': 'Erklären Sie, was Sie tun können, und bitten Sie andere um Hilfe.'
      },
      vocab: [
        { word: 'Can', meanings: {
      'zh-TW': '會/能夠',
      'zh-CN': '会/能够',
      'en': 'Can',
      'ja': 'できる',
      'ko': '할 수 있다',
      'es': 'Poder',
      'fr': 'Pouvoir',
      'de': 'Können'
    }, phonetic: '/kæn/' },
        { word: 'Speak', meanings: {
      'zh-TW': '說',
      'zh-CN': '说',
      'en': 'Say',
      'ja': '言う',
      'ko': '말하다',
      'es': 'Decir',
      'fr': 'Dire',
      'de': 'Sagen'
    }, phonetic: '/spiːk/' },
        { word: 'Swim', meanings: {
      'zh-TW': '游泳',
      'zh-CN': '游泳',
      'en': 'Swim',
      'ja': '泳ぐ',
      'ko': '수영하다',
      'es': 'Nadar',
      'fr': 'Nager',
      'de': 'Schwimmen'
    }, phonetic: '/swɪm/' },
        { word: 'Play', meanings: {
      'zh-TW': '玩/演奏',
      'zh-CN': '玩/演奏',
      'en': 'Play',
      'ja': '遊ぶ / 演奏する',
      'ko': '놀다 / 연주하다',
      'es': 'Jugar / Tocar',
      'fr': 'Jouer',
      'de': 'Spielen'
    }, phonetic: '/pleɪ/' },
        { word: 'English', meanings: {
      'zh-TW': '英文',
      'zh-CN': '英文',
      'en': 'English',
      'ja': '英語',
      'ko': '영어',
      'es': 'Inglés',
      'fr': 'Anglais',
      'de': 'Englisch'
    }, phonetic: '/ˈɪŋɡlɪʃ/' }
      ],
      patterns: [
        { pattern: 'Can you [Verb]?', explanation: '你會...嗎？', explanations: {"zh-TW":"你會...嗎？","zh-CN":"你会...吗？","en":"This is my reply."} },
        { pattern: 'I can [Verb].', explanation: '我會...', explanations: {"zh-TW":"我會...","zh-CN":"我会...","en":"Thank you for your message."} }
      ]
    },
    {
      id: 'en_unit_9',
      title: {
        'zh-TW': '過去發生的事',
        'zh-CN': '过去发生的事',
        'en': 'Past Events',
        'ja': '過去に起こったこと',
        'ko': '과거에 일어난 일',
        'es': 'Eventos pasados',
        'fr': 'Événements passés',
        'de': 'Vergangene Ereignisse'
      },
      description: {
        'zh-TW': '描述昨天去哪裡或做了什麼。',
        'zh-CN': '描述昨天去哪里或做了什么。',
        'en': 'Describe where you went or what you did yesterday.',
        'ja': '昨日どこに行ったか、何をしたか述べます。',
        'ko': '어제 어디에 갔거나 무엇을 했는지 묘사합니다.',
        'es': 'Describe adónde fuiste o qué hiciste ayer.',
        'fr': 'Décrivez où vous êtes allé ou ce que vous avez fait hier.',
        'de': 'Beschreiben Sie, wo Sie gestern waren oder was Sie gemacht haben.'
      },
      vocab: [
        { word: 'Yesterday', meanings: {
      'zh-TW': '昨天',
      'zh-CN': '昨天',
      'en': 'Yesterday',
      'ja': '昨日',
      'ko': '어제',
      'es': 'Ayer',
      'fr': 'Hier',
      'de': 'Gestern'
    }, phonetic: '/ˈjestərdeɪ/' },
        { word: 'Last week', meanings: {
      'zh-TW': '上週',
      'zh-CN': '上週',
      'en': 'Last week',
      'ja': '先週',
      'ko': '지난 주',
      'es': 'La semana pasada',
      'fr': 'La semaine dernière',
      'de': 'Letzte Woche'
    }, phonetic: '/læst wiːk/' },
        { word: 'Went', meanings: {
      'zh-TW': '去(過去式)',
      'zh-CN': '去(过去式)',
      'en': 'Went',
      'ja': '行った',
      'ko': '갔다',
      'es': 'Fui',
      'fr': 'Suis allé',
      'de': 'Ging'
    }, phonetic: '/went/' },
        { word: 'Saw', meanings: {
      'zh-TW': '看(過去式)',
      'zh-CN': '看(过去式)',
      'en': 'Saw',
      'ja': '見た',
      'ko': '봤다',
      'es': 'Vi',
      'fr': 'Ai vu',
      'de': 'Sah'
    }, phonetic: '/sɔː/' },
        { word: 'Ate', meanings: {
      'zh-TW': '吃(過去式)',
      'zh-CN': '吃(过去式)',
      'en': 'Ate',
      'ja': '食べた',
      'ko': '먹었다',
      'es': 'Comí',
      'fr': 'Ai mangé',
      'de': 'Aß'
    }, phonetic: '/eɪt/' }
      ],
      patterns: [
        { pattern: 'Did you [Verb]?', explanation: '你有...嗎？', explanations: {"zh-TW":"你有...嗎？","zh-CN":"你有...吗？","en":"I want to book..."} },
        { pattern: 'I [Past Verb] [Noun].', explanation: '我做了...', explanations: {"zh-TW":"我做了...","zh-CN":"我做了...","en":"May I speak to...?"} }
      ]
    },
    {
      id: 'en_unit_10',
      title: {
        'zh-TW': '未來計畫',
        'zh-CN': '未来计划',
        'en': 'Future Plans',
        'ja': '未来の計画',
        'ko': '미래 계획',
        'es': 'Planes futuros',
        'fr': 'Plans futurs',
        'de': 'Zukunftspläne'
      },
      description: {
        'zh-TW': '說明即將到來的週末或明天的計畫。',
        'zh-CN': '说明即将到来的周末或明天的计划。',
        'en': 'Talk about upcoming weekend or tomorrow\'s plans.',
        'ja': '今度の週末や明日の計画について話します。',
        'ko': '다가오는 주말이나 내일의 계획에 대해 이야기합니다.',
        'es': 'Habla sobre los planes del próximo fin de semana o de mañana.',
        'fr': 'Parlez des plans du week-end prochain ou de demain.',
        'de': 'Sprechen Sie über die Pläne für das kommende Wochenende oder morgen.'
      },
      vocab: [
        { word: 'Tomorrow', meanings: {
      'zh-TW': '明天',
      'zh-CN': '明天',
      'en': 'Tomorrow',
      'ja': '明日',
      'ko': '내일',
      'es': 'Mañana',
      'fr': 'Demain',
      'de': 'Morgen'
    }, phonetic: '/təˈmɔːroʊ/' },
        { word: 'Next year', meanings: {
      'zh-TW': '明年',
      'zh-CN': '明年',
      'en': 'Next year',
      'ja': '来年',
      'ko': '내년',
      'es': 'El próximo año',
      'fr': 'L\'année prochaine',
      'de': 'Nächstes Jahr'
    }, phonetic: '/nekst jɪr/' },
        { word: 'Going to', meanings: {
      'zh-TW': '將要',
      'zh-CN': '将要',
      'en': 'Will',
      'ja': '～するつもり',
      'ko': '～할 것이다',
      'es': 'Voy a',
      'fr': 'Vais',
      'de': 'Werde'
    }, phonetic: '/ˈɡoʊɪŋ tu/' },
        { word: 'Will', meanings: {
      'zh-TW': '將會',
      'zh-CN': '将会',
      'en': 'Will',
      'ja': '～だろう',
      'ko': '～할 것이다',
      'es': 'Será',
      'fr': 'Sera',
      'de': 'Wird'
    }, phonetic: '/wɪl/' },
        { word: 'Travel', meanings: {
      'zh-TW': '旅行',
      'zh-CN': '旅行',
      'en': 'Travel',
      'ja': '旅行',
      'ko': '여행',
      'es': 'Viaje',
      'fr': 'Voyage',
      'de': 'Reise'
    }, phonetic: '/ˈtrævl/' }
      ],
      patterns: [
        { pattern: 'What are you going to do?', explanation: '你打算做什麼？', explanations: {"zh-TW":"你打算做什麼？","zh-CN":"你打算做什么？","en":"Can you help me...?"} },
        { pattern: 'I am going to [Verb].', explanation: '我打算要...', explanations: {"zh-TW":"我打算要...","zh-CN":"我打算要...","en":"Please help me arrange..."} }
      ]
    },
    {
      id: 'en_unit_11',
      title: {
        'zh-TW': '電話禮儀與留言',
        'zh-CN': '电话礼仪与留言',
        'en': 'Phone Etiquette and Messages',
        'ja': '電話のエチケットと伝言',
        'ko': '전화 예절과 메시지',
        'es': 'Etiqueta telefónica y mensajes',
        'fr': 'Étiquette téléphonique et messages',
        'de': 'Telefonetikette und Nachrichten'
      },
      description: {
        'zh-TW': '學會基本的英文電話對答與留言。',
        'zh-CN': '学会基本的英文电话对答与留言。',
        'en': 'Learn basic English phone conversation and messaging.',
        'ja': '基本的な英語の電話対話と伝言の残し方を学びます。',
        'ko': '기본적인 영어 전화 대화와 메시지 남기기를 배웁니다.',
        'es': 'Aprende conversación telefónica básica en inglés y mensajería.',
        'fr': 'Apprenez la conversation téléphonique de base en anglais et la messagerie.',
        'de': 'Lernen Sie einfache englische Telefongespräche und Nachrichtenübermittlung.'
      },
      vocab: [
        { word: 'Call', meanings: {
      'zh-TW': '打電話',
      'zh-CN': '打电话',
      'en': 'Make a phone call',
      'ja': '電話をかける',
      'ko': '전화를 걸다',
      'es': 'Hacer una llamada',
      'fr': 'Passer un appel',
      'de': 'Anrufen'
    }, phonetic: '/kɔːl/' },
        { word: 'Message', meanings: {
      'zh-TW': '訊息/留言',
      'zh-CN': '讯息/留言',
      'en': 'Message',
      'ja': 'メッセージ',
      'ko': '메시지',
      'es': 'Mensaje',
      'fr': 'Message',
      'de': 'Nachricht'
    }, phonetic: '/ˈmesɪdʒ/' },
        { word: 'Speak', meanings: {
      'zh-TW': '說話',
      'zh-CN': '說話',
      'en': 'Speak',
      'ja': '話す',
      'ko': '말하다',
      'es': 'Hablar',
      'fr': 'Parler',
      'de': 'Sprechen'
    }, phonetic: '/spiːk/' },
        { word: 'Busy', meanings: {
      'zh-TW': '忙碌的',
      'zh-CN': '忙碌的',
      'en': 'Busy',
      'ja': '忙しい',
      'ko': '바쁜',
      'es': 'Ocupado',
      'fr': 'Occupé',
      'de': 'Beschäftigt'
    }, phonetic: '/ˈbɪzi/' },
        { word: 'Meeting', meanings: {
      'zh-TW': '會議',
      'zh-CN': '会议',
      'en': 'Meeting',
      'ja': '会議',
      'ko': '회의',
      'es': 'Reunión',
      'fr': 'Réunion',
      'de': 'Besprechung'
    }, phonetic: '/ˈmiːtɪŋ/' }
      ],
      patterns: [
        { pattern: 'May I speak to [Name]?', explanation: '我可以和...通話嗎？', explanations: {"zh-TW":"我可以和...通話嗎？","zh-CN":"我可以和...通話吗？","en":"I'm considering..."} },
        { pattern: 'Can I leave a message?', explanation: '我可以留個言嗎？', explanations: {"zh-TW":"我可以留個言嗎？","zh-CN":"我可以留个言吗？","en":"I'm glad to meet you."} }
      ]
    },
    {
      id: 'en_unit_12',
      title: {
        'zh-TW': '請求與許可',
        'zh-CN': '请求与许可',
        'en': 'Requests and Permissions',
        'ja': '依頼と許可',
        'ko': '요청과 허락',
        'es': 'Peticiones y permisos',
        'fr': 'Demandes et permissions',
        'de': 'Bitten und Erlaubnis'
      },
      description: {
        'zh-TW': '有禮貌地提出請求或詢問是否可以做某事。',
        'zh-CN': '有礼貌地提出请求或询问是否可以做某事。',
        'en': 'Politely make requests or ask if you can do something.',
        'ja': '丁寧に依頼をしたり、何かしてもいいか尋ねたりします。',
        'ko': '정중하게 요청하거나 무엇을 해도 되는지 물어봅니다.',
        'es': 'Haz peticiones amablemente o pregunta si puedes hacer algo.',
        'fr': 'Faites des demandes poliment ou demandez si vous pouvez faire quelque chose.',
        'de': 'Bitten Sie höflich oder fragen Sie, ob Sie etwas tun dürfen.'
      },
      vocab: [
        { word: 'Borrow', meanings: {
      'zh-TW': '借(入)',
      'zh-CN': '借(入)',
      'en': 'Borrow',
      'ja': '借りる',
      'ko': '빌리다',
      'es': 'Pedir prestado',
      'fr': 'Emprunter',
      'de': 'Leihen'
    }, phonetic: '/ˈbɔːroʊ/' },
        { word: 'Use', meanings: {
      'zh-TW': '使用',
      'zh-CN': '使用',
      'en': 'Use',
      'ja': '使う',
      'ko': '사용',
      'es': 'Usar',
      'fr': 'Utiliser',
      'de': 'Benutzen'
    }, phonetic: '/juːz/' },
        { word: 'Help', meanings: {
      'zh-TW': '幫助',
      'zh-CN': '帮助',
      'en': 'Help (verb)',
      'ja': '助ける',
      'ko': '돕다',
      'es': 'Ayudar',
      'fr': 'Aider',
      'de': 'Helfen'
    }, phonetic: '/help/' },
        { word: 'Sure', meanings: {
      'zh-TW': '當然',
      'zh-CN': '当然',
      'en': 'Of course',
      'ja': 'もちろん',
      'ko': '물론',
      'es': 'Claro',
      'fr': 'Bien sûr',
      'de': 'Natürlich'
    }, phonetic: '/ʃʊr/' },
        { word: 'Problem', meanings: {
      'zh-TW': '問題',
      'zh-CN': '问题',
      'en': 'Question',
      'ja': '質問',
      'ko': '질문',
      'es': 'Pregunta',
      'fr': 'Question',
      'de': 'Frage'
    }, phonetic: '/ˈprɑːbləm/' }
      ],
      patterns: [
        { pattern: 'Could you help me [Verb]?', explanation: '你能幫我...嗎？', explanations: {"zh-TW":"你能幫我...嗎？","zh-CN":"你能幫我...吗？","en":"What are your interests?"} },
        { pattern: 'May I [Verb]?', explanation: '我可以...嗎？', explanations: {"zh-TW":"我可以...嗎？","zh-CN":"我可以...吗？","en":"What do you think about...?"} }
      ]
    },
    {
      id: 'en_unit_13',
      title: {
        'zh-TW': '比較與描述',
        'zh-CN': '比较与描述',
        'en': 'Comparisons and Descriptions',
        'ja': '比較と描写',
        'ko': '비교와 묘사',
        'es': 'Comparaciones y descripciones',
        'fr': 'Comparaisons et descriptions',
        'de': 'Vergleiche und Beschreibungen'
      },
      description: {
        'zh-TW': '比較兩種事物並表達其差異。',
        'zh-CN': '比较两种事物并表达其差异。',
        'en': 'Compare two things and express their differences.',
        'ja': '二つの物を比較して、その違いを表現します。',
        'ko': '두 가지를 비교하고 차이점을 표현합니다.',
        'es': 'Compara dos cosas y expresa sus diferencias.',
        'fr': 'Comparez deux choses et exprimez leurs différences.',
        'de': 'Vergleichen Sie zwei Dinge und drücken Sie ihre Unterschiede aus.'
      },
      vocab: [
        { word: 'Better', meanings: {
      'zh-TW': '更好的',
      'zh-CN': '更好的',
      'en': 'Better',
      'ja': 'もっと良い',
      'ko': '더 나은',
      'es': 'Mejor',
      'fr': 'Meilleur',
      'de': 'Besser'
    }, phonetic: '/ˈbetər/' },
        { word: 'Faster', meanings: {
      'zh-TW': '更快的',
      'zh-CN': '更快的',
      'en': 'Faster',
      'ja': 'もっと速い',
      'ko': '더 빠른',
      'es': 'Más rápido',
      'fr': 'Plus rapide',
      'de': 'Schneller'
    }, phonetic: '/ˈfæstər/' },
        { word: 'Cheap', meanings: {
      'zh-TW': '便宜的',
      'zh-CN': '便宜的',
      'en': 'Cheap',
      'ja': '安い',
      'ko': '싼',
      'es': 'Barato',
      'fr': 'Bon marché',
      'de': 'Billig'
    }, phonetic: '/tʃiːp/' },
        { word: 'Expensive', meanings: {
      'zh-TW': '昂貴的',
      'zh-CN': '昂貴的',
      'en': 'Expensive',
      'ja': '高い',
      'ko': '비싼',
      'es': 'Caro',
      'fr': 'Cher',
      'de': 'Teuer'
    }, phonetic: '/ɪkˈspensɪv/' },
        { word: 'Than', meanings: {
      'zh-TW': '比',
      'zh-CN': '比',
      'en': 'Than',
      'ja': 'より',
      'ko': '보다',
      'es': 'Que',
      'fr': 'Que',
      'de': 'Als'
    }, phonetic: '/ðæn/' }
      ],
      patterns: [
        { pattern: '[A] is better than [B].', explanation: 'A比B更好。', explanations: {"zh-TW":"A比B更好。","zh-CN":"A比B更好。","en":"Do you...?"} },
        { pattern: 'Which one is [Adjective+er]?', explanation: '哪一個比較...？', explanations: {"zh-TW":"哪一個比較...？","zh-CN":"哪一个比較...？","en":"I think..."} }
      ]
    },
    {
      id: 'en_unit_14',
      title: {
        'zh-TW': '提供建議與意見',
        'zh-CN': '提供建议与意见',
        'en': 'Giving Advice and Opinions',
        'ja': 'アドバイスと意見を与える',
        'ko': '조언과 의견 제공',
        'es': 'Dar consejos y opiniones',
        'fr': 'Donner des conseils et des opinions',
        'de': 'Ratschläge und Meinungen geben'
      },
      description: {
        'zh-TW': '對別人的狀況給予簡單的建議。',
        'zh-CN': '对别人的状况给予简单的建议。',
        'en': 'Give simple advice for other people\'s situations.',
        'ja': '他の人の状況に対して簡単なアドバイスを与えます。',
        'ko': '다른 사람의 상황에 대해 간단한 조언을 합니다.',
        'es': 'Da consejos simples para las situaciones de otras personas.',
        'fr': 'Donnez des conseils simples pour les situations des autres.',
        'de': 'Geben Sie einfache Ratschläge für die Situationen anderer Leute.'
      },
      vocab: [
        { word: 'Should', meanings: {
      'zh-TW': '應該',
      'zh-CN': '应该',
      'en': 'Should',
      'ja': 'べき',
      'ko': '해야 한다',
      'es': 'Debería',
      'fr': 'Devrait',
      'de': 'Sollte'
    }, phonetic: '/ʃʊd/' },
        { word: 'Idea', meanings: {
      'zh-TW': '主意',
      'zh-CN': '主意',
      'en': 'Idea',
      'ja': 'アイデア',
      'ko': '아이디어',
      'es': 'Idea',
      'fr': 'Idée',
      'de': 'Idee'
    }, phonetic: '/aɪˈdiːə/' },
        { word: 'Maybe', meanings: {
      'zh-TW': '也許',
      'zh-CN': '也許',
      'en': 'Maybe',
      'ja': '多分',
      'ko': '아마',
      'es': 'Quizás',
      'fr': 'Peut-être',
      'de': 'Vielleicht'
    }, phonetic: '/ˈmeɪbi/' },
        { word: 'Try', meanings: {
      'zh-TW': '嘗試',
      'zh-CN': '尝试',
      'en': 'Try',
      'ja': '試す',
      'ko': '시도하다',
      'es': 'Intentar',
      'fr': 'Essayer',
      'de': 'Versuchen'
    }, phonetic: '/traɪ/' },
        { word: 'Rest', meanings: {
      'zh-TW': '休息',
      'zh-CN': '休息',
      'en': 'Rest',
      'ja': '休む',
      'ko': '쉬다',
      'es': 'Descansar',
      'fr': 'Se reposer',
      'de': 'Ruhe'
    }, phonetic: '/rest/' }
      ],
      patterns: [
        { pattern: 'You should [Verb].', explanation: '你應該...', explanations: {"zh-TW":"你應該...","zh-CN":"你应该...","en":"Shall we go to...?"} },
        { pattern: 'That is a good idea.', explanation: '那是個好主意。', explanations: {"zh-TW":"那是個好主意。","zh-CN":"那是个好主意。","en":"那是個好主意。"} }
      ]
    },
    {
      id: 'en_unit_15',
      title: {
        'zh-TW': '經驗與感受',
        'zh-CN': '经验与感受',
        'en': 'Experience and Feelings',
        'ja': '経験と感情',
        'ko': '경험과 감정',
        'es': 'Experiencia y sentimientos',
        'fr': 'Expérience et sentiments',
        'de': 'Erfahrung und Gefühle'
      },
      description: {
        'zh-TW': '描述過去的經驗並表達自己的感覺。',
        'zh-CN': '描述过去的经验并表达自己的感觉。',
        'en': 'Describe past experiences and express your own feelings.',
        'ja': '過去の経験を述べ、自分の気持ちを表現します。',
        'ko': '과거의 경험을 묘사하고 자신의 감정을 표현합니다.',
        'es': 'Describe experiencias pasadas y expresa tus propios sentimientos.',
        'fr': 'Décrivez des expériences passées et exprimez vos propres sentiments.',
        'de': 'Beschreiben Sie vergangene Erfahrungen und drücken Sie Ihre eigenen Gefühle aus.'
      },
      vocab: [
        { word: 'Experience', meanings: {
      'zh-TW': '經驗',
      'zh-CN': '经验',
      'en': 'Experience',
      'ja': '経験',
      'ko': '경험',
      'es': 'Experiencia',
      'fr': 'Expérience',
      'de': 'Erfahrung'
    }, phonetic: '/ɪkˈspɪriəns/' },
        { word: 'Feel', meanings: {
      'zh-TW': '感覺',
      'zh-CN': '感觉',
      'en': 'Feel',
      'ja': '感じる',
      'ko': '느끼다',
      'es': 'Sentir',
      'fr': 'Sentir',
      'de': 'Fühlen'
    }, phonetic: '/fiːl/' },
        { word: 'Tired', meanings: {
      'zh-TW': '疲倦的',
      'zh-CN': '疲倦的',
      'en': 'Tired',
      'ja': '疲れた',
      'ko': '피곤한',
      'es': 'Cansado',
      'fr': 'Fatigué',
      'de': 'Müde'
    }, phonetic: '/ˈtaɪərd/' },
        { word: 'Excited', meanings: {
      'zh-TW': '興奮的',
      'zh-CN': '兴奋的',
      'en': 'Excited',
      'ja': '興奮した',
      'ko': '흥분한',
      'es': 'Emocionado',
      'fr': 'Excité',
      'de': 'Aufgeregt'
    }, phonetic: '/ɪkˈsaɪtɪd/' },
        { word: 'Ever', meanings: {
      'zh-TW': '曾經',
      'zh-CN': '曾经',
      'en': 'Ever',
      'ja': '～たことがある',
      'ko': '～한 적이 있다',
      'es': 'Alguna vez',
      'fr': 'Déjà',
      'de': 'Schon einmal'
    }, phonetic: '/ˈevər/' }
      ],
      patterns: [
        { pattern: 'Have you ever [Past Participle]?', explanation: '你曾經...過嗎？', explanations: {"zh-TW":"你曾經...過嗎？","zh-CN":"你曾经...过吗？","en":"你曾經...過嗎？"} },
        { pattern: 'I feel [Adjective].', explanation: '我感到...', explanations: {"zh-TW":"我感到...","zh-CN":"我感到...","en":"我感到..."} }
      ]
    }
  ],
﻿  'zh-CN': [
    {
      id: 'zh-CN_unit_1',
      title: {
        'zh-TW': '基本打招呼',
        'zh-CN': '基本打招呼',
        'en': 'Basic Greetings',
        'ja': '基本的な挨拶',
        'ko': '기본 인사',
        'es': 'Saludos básicos',
        'fr': 'Salutations de base',
        'de': 'Grundlegende Grüße',
      },
      description: {
        'zh-TW': '學會最基本的中文打招呼用語。',
        'zh-CN': '学会最基本的中文打招呼用语。',
        'en': 'Learn the most basic Chinese greeting expressions.',
        'ja': '中国語の最も基本的な挨拶表現を学びます。',
        'ko': '중국어의 가장 기본적인 인사 표현을 배웁니다.',
        'es': 'Aprende las expresiones de saludo más básicas en chino.',
        'fr': 'Apprenez les expressions de salutation les plus basiques en chinois.',
        'de': 'Lernen Sie die grundlegendsten chinesischen Grußausdrücke.',
      },
      vocab: [
        { word: '你好', meanings: {
          'zh-TW': '你好',
          'zh-CN': '你好',
          'en': 'Hello',
          'ja': 'こんにちは',
          'ko': '안녕하세요',
          'es': 'Hola',
          'fr': 'Bonjour',
          'de': 'Hallo',
        }, phonetic: 'nǐ hǎo' },
        { word: '早安', meanings: {
          'zh-TW': '早安',
          'zh-CN': '早安',
          'en': 'Good morning',
          'ja': 'おはようございます',
          'ko': '좋은 아침',
          'es': 'Buenos días',
          'fr': 'Bonjour',
          'de': 'Guten Morgen',
        }, phonetic: 'zǎo ān' },
        { word: '谢谢', meanings: {
          'zh-TW': '謝謝',
          'zh-CN': '谢谢',
          'en': 'Thank you',
          'ja': 'ありがとう',
          'ko': '감사합니다',
          'es': 'Gracias',
          'fr': 'Merci',
          'de': 'Danke',
        }, phonetic: 'xièxie' },
        { word: '再见', meanings: {
          'zh-TW': '再見',
          'zh-CN': '再见',
          'en': 'Goodbye',
          'ja': 'さようなら',
          'ko': '안녕히 가세요',
          'es': 'Adiós',
          'fr': 'Au revoir',
          'de': 'Auf Wiedersehen',
        }, phonetic: 'zàijiàn' },
        { word: '对不起', meanings: {
          'zh-TW': '對不起',
          'zh-CN': '对不起',
          'en': 'Sorry',
          'ja': 'すみません',
          'ko': '죄송합니다',
          'es': 'Lo siento',
          'fr': 'Désolé',
          'de': 'Entschuldigung',
        }, phonetic: 'duìbùqǐ' }
      ],
      patterns: [
        { pattern: '你好，我叫[名字]。',
          explanation: '你好，我叫...',
          explanations: {'zh-TW': '你好，我叫...', 'zh-CN': '你好，我叫...', 'en': 'Hello, my name is...'} },
        { pattern: '[名字]，謝謝你。',
          explanation: '..., 謝謝你。',
          explanations: {'zh-TW': '..., 謝謝你。', 'zh-CN': '..., 谢谢你。', 'en': '..., thank you.'} }
      ]
    },
    {
      id: 'zh-CN_unit_2',
      title: {
        'zh-TW': '數字與計數',
        'zh-CN': '数字与计数',
        'en': 'Numbers and Counting',
        'ja': '数字と数え方',
        'ko': '숫자와 세기',
        'es': 'Números y conteo',
        'fr': 'Nombres et comptage',
        'de': 'Zahlen und Zählen',
      },
      description: {
        'zh-TW': '學會中文數字 0 到 100。',
        'zh-CN': '学会中文数字 0 到 100。',
        'en': 'Learn Chinese numbers 0 to 100.',
        'ja': '中国語の数字0から100を学びます。',
        'ko': '중국어 숫자 0부터 100까지를 배웁니다.',
        'es': 'Aprende los números chinos del 0 al 100.',
        'fr': 'Apprenez les chiffres chinois de 0 à 100.',
        'de': 'Lernen Sie chinesische Zahlen von 0 bis 100.',
      },
      vocab: [
        { word: '零', meanings: {
          'zh-TW': '零',
          'zh-CN': '零',
          'en': 'Zero',
          'ja': 'ゼロ',
          'ko': '영',
          'es': 'Cero',
          'fr': 'Zéro',
          'de': 'Null',
        }, phonetic: 'líng' },
        { word: '一', meanings: {
          'zh-TW': '一',
          'zh-CN': '一',
          'en': 'One',
          'ja': '一',
          'ko': '일',
          'es': 'Uno',
          'fr': 'Un',
          'de': 'Eins',
        }, phonetic: 'yī' },
        { word: '十', meanings: {
          'zh-TW': '十',
          'zh-CN': '十',
          'en': 'Ten',
          'ja': '十',
          'ko': '십',
          'es': 'Diez',
          'fr': 'Dix',
          'de': 'Zehn',
        }, phonetic: 'shí' },
        { word: '多少', meanings: {
          'zh-TW': '多少',
          'zh-CN': '多少',
          'en': 'How many/much',
          'ja': 'いくつ',
          'ko': '얼마나',
          'es': 'Cuánto',
          'fr': 'Combien',
          'de': 'Wie viel',
        }, phonetic: 'duōshao' },
        { word: '岁', meanings: {
          'zh-TW': '歲',
          'zh-CN': '岁',
          'en': 'Years old',
          'ja': '歳',
          'ko': '살',
          'es': 'Años',
          'fr': 'Ans',
          'de': 'Jahre alt',
        }, phonetic: 'suì' }
      ],
      patterns: [
        { pattern: '我有[數字]個。',
          explanation: '我有...個。',
          explanations: {'zh-TW': '我有...個。', 'zh-CN': '我有...个。', 'en': 'I have ... (counter).'} },
        { pattern: '你幾歲？',
          explanation: '你幾歲？',
          explanations: {'zh-TW': '你幾歲？', 'zh-CN': '你几岁？', 'en': 'How old are you?'} }
      ]
    },
    {
      id: 'zh-CN_unit_3',
      title: {
        'zh-TW': '時間與日期',
        'zh-CN': '时间与日期',
        'en': 'Time and Date',
        'ja': '時間と日付',
        'ko': '시간과 날짜',
        'es': 'Tiempo y fecha',
        'fr': 'Temps et date',
        'de': 'Zeit und Datum',
      },
      description: {
        'zh-TW': '學會說時間、星期和月份。',
        'zh-CN': '学会说时间、星期和月份。',
        'en': 'Learn to tell time, days of the week, and months.',
        'ja': '時間、曜日、月を言うことを学びます。',
        'ko': '시간, 요일, 월을 말하는 것을 배웁니다.',
        'es': 'Aprende a decir la hora, los días de la semana y los meses.',
        'fr': 'Apprenez à dire l\'heure, les jours de la semaine et les mois.',
        'de': 'Lernen Sie, die Uhrzeit, Wochentage und Monate zu sagen.',
      },
      vocab: [
        { word: '现在', meanings: {
          'zh-TW': '現在',
          'zh-CN': '现在',
          'en': 'Now',
          'ja': '今',
          'ko': '지금',
          'es': 'Ahora',
          'fr': 'Maintenant',
          'de': 'Jetzt',
        }, phonetic: 'xiànzài' },
        { word: '点', meanings: {
          'zh-TW': '點（鐘點）',
          'zh-CN': '点（钟点）',
          'en': 'O\'clock',
          'ja': '時',
          'ko': '시',
          'es': 'En punto',
          'fr': 'Heure',
          'de': 'Uhr',
        }, phonetic: 'diǎn' },
        { word: '今天', meanings: {
          'zh-TW': '今天',
          'zh-CN': '今天',
          'en': 'Today',
          'ja': '今日',
          'ko': '오늘',
          'es': 'Hoy',
          'fr': 'Aujourd\'hui',
          'de': 'Heute',
        }, phonetic: 'jīntiān' },
        { word: '明天', meanings: {
          'zh-TW': '明天',
          'zh-CN': '明天',
          'en': 'Tomorrow',
          'ja': '明日',
          'ko': '내일',
          'es': 'Mañana',
          'fr': 'Demain',
          'de': 'Morgen',
        }, phonetic: 'míngtiān' },
        { word: '星期一', meanings: {
          'zh-TW': '星期一',
          'zh-CN': '星期一',
          'en': 'Monday',
          'ja': '月曜日',
          'ko': '월요일',
          'es': 'Lunes',
          'fr': 'Lundi',
          'de': 'Montag',
        }, phonetic: 'xīngqīyī' }
      ],
      patterns: [
        { pattern: '現在幾點？',
          explanation: '現在幾點？',
          explanations: {'zh-TW': '現在幾點？', 'zh-CN': '现在几点？', 'en': 'What time is it now?'} },
        { pattern: '今天是[星期]。',
          explanation: '今天是...。',
          explanations: {'zh-TW': '今天是...。', 'zh-CN': '今天是...。', 'en': 'Today is ... (day of week).'} }
      ]
    },
    {
      id: 'zh-CN_unit_4',
      title: {
        'zh-TW': '自我介紹',
        'zh-CN': '自我介绍',
        'en': 'Self-Introduction',
        'ja': '自己紹介',
        'ko': '자기소개',
        'es': 'Autopresentación',
        'fr': 'Auto-présentation',
        'de': 'Selbstvorstellung',
      },
      description: {
        'zh-TW': '學會用中文介紹自己。',
        'zh-CN': '学会用中文介绍自己。',
        'en': 'Learn to introduce yourself in Chinese.',
        'ja': '中国語で自己紹介をすることを学びます。',
        'ko': '중국어로 자기소개를 하는 것을 배웁니다.',
        'es': 'Aprende a presentarte en chino.',
        'fr': 'Apprenez à vous présenter en chinois.',
        'de': 'Lernen Sie, sich auf Chinesisch vorzustellen.',
      },
      vocab: [
        { word: '我叫', meanings: {
          'zh-TW': '我叫',
          'zh-CN': '我叫',
          'en': 'My name is',
          'ja': '私は...と言います',
          'ko': '제 이름은 ...입니다',
          'es': 'Me llamo',
          'fr': 'Je m\'appelle',
          'de': 'Ich heiße',
        }, phonetic: 'wǒ jiào' },
        { word: '是中国人', meanings: {
          'zh-TW': '是中國人',
          'zh-CN': '是中国人',
          'en': 'am Chinese',
          'ja': 'は中国人です',
          'ko': '중국 사람입니다',
          'es': 'soy chino',
          'fr': 'suis chinois',
          'de': 'bin Chinesin',
        }, phonetic: 'shì zhōngguórén' },
        { word: '工程师', meanings: {
          'zh-TW': '工程師',
          'zh-CN': '工程师',
          'en': 'Engineer',
          'ja': 'エンジニア',
          'ko': '엔지니어',
          'es': 'Ingeniero',
          'fr': 'Ingénieur',
          'de': 'Ingenieur',
        }, phonetic: 'gōngchéngshī' },
        { word: '学生', meanings: {
          'zh-TW': '學生',
          'zh-CN': '学生',
          'en': 'Student',
          'ja': '学生',
          'ko': '학생',
          'es': 'Estudiante',
          'fr': 'Étudiant',
          'de': 'Student',
        }, phonetic: 'xuéshēng' },
        { word: '老师', meanings: {
          'zh-TW': '老師',
          'zh-CN': '老师',
          'en': 'Teacher',
          'ja': '先生',
          'ko': '선생님',
          'es': 'Profesor',
          'fr': 'Enseignant',
          'de': 'Lehrer',
        }, phonetic: 'lǎoshī' }
      ],
      patterns: [
        { pattern: '我叫[名字]，我是[職業]。',
          explanation: '我叫...，我是...。',
          explanations: {'zh-TW': '我叫...，我是...。', 'zh-CN': '我叫...，我是...。', 'en': 'My name is ..., I am a/an ...'} },
        { pattern: '我是[國籍]人。',
          explanation: '我是...人。',
          explanations: {'zh-TW': '我是...人。', 'zh-CN': '我是...人。', 'en': 'I am ... (nationality).'} }
      ]
    },
    {
      id: 'zh-CN_unit_5',
      title: {
        'zh-TW': '家庭與外貌',
        'zh-CN': '家庭与外貌',
        'en': 'Family and Appearance',
        'ja': '家族と外見',
        'ko': '가족과 외모',
        'es': 'Familia y apariencia',
        'fr': 'Famille et apparence',
        'de': 'Familie und Aussehen',
      },
      description: {
        'zh-TW': '學會描述家人。',
        'zh-CN': '学会描述家人。',
        'en': 'Learn to describe family members.',
        'ja': '家族を述べることを学びます。',
        'ko': '가족을 묘사하는 것을 배웁니다.',
        'es': 'Aprende a describir a los miembros de la familia.',
        'fr': 'Apprenez à décrire les membres de la famille.',
        'de': 'Lernen Sie, Familienmitglieder zu beschreiben.',
      },
      vocab: [
        { word: '爸爸', meanings: {
          'zh-TW': '爸爸',
          'zh-CN': '爸爸',
          'en': 'Dad',
          'ja': 'お父さん',
          'ko': '아빠',
          'es': 'Papá',
          'fr': 'Papa',
          'de': 'Papa',
        }, phonetic: 'bàba' },
        { word: '妈妈', meanings: {
          'zh-TW': '媽媽',
          'zh-CN': '妈妈',
          'en': 'Mom',
          'ja': 'お母さん',
          'ko': '엄마',
          'es': 'Mamá',
          'fr': 'Maman',
          'de': 'Mama',
        }, phonetic: 'māma' },
        { word: '高', meanings: {
          'zh-TW': '高',
          'zh-CN': '高',
          'en': 'Tall',
          'ja': '高い',
          'ko': '키가 크다',
          'es': 'Alto',
          'fr': 'Grand',
          'de': 'Groß',
        }, phonetic: 'gāo' },
        { word: '胖', meanings: {
          'zh-TW': '胖',
          'zh-CN': '胖',
          'en': 'Fat',
          'ja': '太っている',
          'ko': '뚱뚱하다',
          'es': 'Gordo',
          'fr': 'Gros',
          'de': 'Dick',
        }, phonetic: 'pàng' },
        { word: '漂亮', meanings: {
          'zh-TW': '漂亮',
          'zh-CN': '漂亮',
          'en': 'Pretty',
          'ja': 'きれい',
          'ko': '예쁘다',
          'es': 'Guapa',
          'fr': 'Jolie',
          'de': 'Hübsch',
        }, phonetic: 'piàoliang' }
      ],
      patterns: [
        { pattern: '這是我[家人稱謂]。',
          explanation: '這是我...。',
          explanations: {'zh-TW': '這是我...。', 'zh-CN': '这是我...。', 'en': 'This is my ...'} },
        { pattern: '他/她很[形容詞]。',
          explanation: '他/她很...。',
          explanations: {'zh-TW': '他/她很...。', 'zh-CN': '他/她很...。', 'en': 'He/She is very ...'} }
      ]
    },
    {
      id: 'zh-CN_unit_6',
      title: {
        'zh-TW': '日常生活',
        'zh-CN': '日常生活',
        'en': 'Daily Life',
        'ja': '日常生活',
        'ko': '일상생활',
        'es': 'Vida diaria',
        'fr': 'Vie quotidienne',
        'de': 'Alltag',
      },
      description: {
        'zh-TW': '學會描述日常活動。',
        'zh-CN': '学会描述日常活动。',
        'en': 'Learn to describe daily activities.',
        'ja': '日常活動を述べることを学びます。',
        'ko': '일상 활동을 묘사하는 것을 배웁니다.',
        'es': 'Aprende a describir actividades diarias.',
        'fr': 'Apprenez à décrire les activités quotidiennes.',
        'de': 'Lernen Sie, tägliche Aktivitäten zu beschreiben.',
      },
      vocab: [
        { word: '起床', meanings: {
          'zh-TW': '起床',
          'zh-CN': '起床',
          'en': 'Get up',
          'ja': '起きる',
          'ko': '일어나다',
          'es': 'Levantarse',
          'fr': 'Se lever',
          'de': 'Aufstehen',
        }, phonetic: 'qǐchuáng' },
        { word: '上班', meanings: {
          'zh-TW': '上班',
          'zh-CN': '上班',
          'en': 'Go to work',
          'ja': '出勤する',
          'ko': '출근하다',
          'es': 'Ir a trabajar',
          'fr': 'Aller au travail',
          'de': 'Zur Arbeit gehen',
        }, phonetic: 'shàngbān' },
        { word: '下班', meanings: {
          'zh-TW': '下班',
          'zh-CN': '下班',
          'en': 'Get off work',
          'ja': '退勤する',
          'ko': '퇴근하다',
          'es': 'Salir del trabajo',
          'fr': 'Quitter le travail',
          'de': 'Feierabend haben',
        }, phonetic: 'xiàbān' },
        { word: '睡觉', meanings: {
          'zh-TW': '睡覺',
          'zh-CN': '睡觉',
          'en': 'Sleep',
          'ja': '寝る',
          'ko': '자다',
          'es': 'Dormir',
          'fr': 'Dormir',
          'de': 'Schlafen',
        }, phonetic: 'shuìjiào' },
        { word: '吃饭', meanings: {
          'zh-TW': '吃飯',
          'zh-CN': '吃饭',
          'en': 'Eat a meal',
          'ja': 'ご飯を食べる',
          'ko': '밥을 먹다',
          'es': 'Comer',
          'fr': 'Manger',
          'de': 'Essen',
        }, phonetic: 'chīfàn' }
      ],
      patterns: [
        { pattern: '我每天[時間][動詞]。',
          explanation: '我每天...。',
          explanations: {'zh-TW': '我每天...。', 'zh-CN': '我每天...。', 'en': 'I ... every day.'} },
        { pattern: '你什麼時候[動詞]？',
          explanation: '你什麼時候...？',
          explanations: {'zh-TW': '你什麼時候...？', 'zh-CN': '你什么时候...？', 'en': 'When do you ...?'} }
      ]
    },
    {
      id: 'zh-CN_unit_7',
      title: {
        'zh-TW': '餐飲與點菜',
        'zh-CN': '餐饮与点菜',
        'en': 'Dining and Ordering',
        'ja': '飲食と注文',
        'ko': '식사와 주문',
        'es': 'Comer y pedir',
        'fr': 'Manger et commander',
        'de': 'Essen und bestellen',
      },
      description: {
        'zh-TW': '學會在餐廳點菜。',
        'zh-CN': '学会在餐厅点菜。',
        'en': 'Learn to order food at a restaurant.',
        'ja': 'レストランで注文することを学びます。',
        'ko': '식당에서 주문하는 것을 배웁니다.',
        'es': 'Aprende a pedir comida en un restaurante.',
        'fr': 'Apprenez à commander de la nourriture au restaurant.',
        'de': 'Lernen Sie, im Restaurant Essen zu bestellen.',
      },
      vocab: [
        { word: '餐厅', meanings: {
          'zh-TW': '餐廳',
          'zh-CN': '餐厅',
          'en': 'Restaurant',
          'ja': 'レストラン',
          'ko': '식당',
          'es': 'Restaurante',
          'fr': 'Restaurant',
          'de': 'Restaurant',
        }, phonetic: 'cāntīng' },
        { word: '菜单', meanings: {
          'zh-TW': '菜單',
          'zh-CN': '菜单',
          'en': 'Menu',
          'ja': 'メニュー',
          'ko': '메뉴',
          'es': 'Menú',
          'fr': 'Menu',
          'de': 'Speisekarte',
        }, phonetic: 'càidān' },
        { word: '咖啡', meanings: {
          'zh-TW': '咖啡',
          'zh-CN': '咖啡',
          'en': 'Coffee',
          'ja': 'コーヒー',
          'ko': '커피',
          'es': 'Café',
          'fr': 'Café',
          'de': 'Kaffee',
        }, phonetic: 'kāfēi' },
        { word: '水', meanings: {
          'zh-TW': '水',
          'zh-CN': '水',
          'en': 'Water',
          'ja': '水',
          'ko': '물',
          'es': 'Agua',
          'fr': 'Eau',
          'de': 'Wasser',
        }, phonetic: 'shuǐ' },
        { word: '好吃', meanings: {
          'zh-TW': '好吃',
          'zh-CN': '好吃',
          'en': 'Delicious',
          'ja': 'おいしい',
          'ko': '맛있다',
          'es': 'Delicioso',
          'fr': 'Délicieux',
          'de': 'Leckere',
        }, phonetic: 'hǎochī' }
      ],
      patterns: [
        { pattern: '我想吃[食物]。',
          explanation: '我想吃...。',
          explanations: {'zh-TW': '我想吃...。', 'zh-CN': '我想吃...。', 'en': 'I want to eat ...'} },
        { pattern: '請給我[食物]。',
          explanation: '請給我...。',
          explanations: {'zh-TW': '請給我...。', 'zh-CN': '请给我...。', 'en': 'Please give me ...'} }
      ]
    },
    {
      id: 'zh-CN_unit_8',
      title: {
        'zh-TW': '購物與價格',
        'zh-CN': '购物与价格',
        'en': 'Shopping and Prices',
        'ja': '買い物と価格',
        'ko': '쇼핑과 가격',
        'es': 'Compras y precios',
        'fr': 'Achats et prix',
        'de': 'Einkaufen und Preise',
      },
      description: {
        'zh-TW': '學會問價格。',
        'zh-CN': '学会问价格。',
        'en': 'Learn to ask prices.',
        'ja': '価格を聞くことを学びます。',
        'ko': '가격을 묻는 것을 배웁니다.',
        'es': 'Aprende a preguntar precios.',
        'fr': 'Apprenez à demander les prix.',
        'de': 'Lernen Sie, nach Preisen zu fragen.',
      },
      vocab: [
        { word: '多少钱', meanings: {
          'zh-TW': '多少錢',
          'zh-CN': '多少钱',
          'en': 'How much',
          'ja': 'いくら',
          'ko': '얼마예요',
          'es': 'Cuánto cuesta',
          'fr': 'Combien',
          'de': 'Wie viel kostet',
        }, phonetic: 'duōshaoqián' },
        { word: '块', meanings: {
          'zh-TW': '塊（人民幣單位）',
          'zh-CN': '块（人民币单位）',
          'en': 'Yuan',
          'ja': '元',
          'ko': '위안',
          'es': 'Yuan',
          'fr': 'Yuan',
          'de': 'Yuan',
        }, phonetic: 'kuài' },
        { word: '贵', meanings: {
          'zh-TW': '貴',
          'zh-CN': '贵',
          'en': 'Expensive',
          'ja': '高い',
          'ko': '비싸다',
          'es': 'Caro',
          'fr': 'Cher',
          'de': 'Teuer',
        }, phonetic: 'guì' },
        { word: '便宜', meanings: {
          'zh-TW': '便宜',
          'zh-CN': '便宜',
          'en': 'Cheap',
          'ja': '安い',
          'ko': '싸다',
          'es': 'Barato',
          'fr': 'Pas cher',
          'de': 'Günstig',
        }, phonetic: 'piányi' },
        { word: '买', meanings: {
          'zh-TW': '買',
          'zh-CN': '买',
          'en': 'Buy',
          'ja': '買う',
          'ko': '사다',
          'es': 'Comprar',
          'fr': 'Acheter',
          'de': 'Kaufen',
        }, phonetic: 'mǎi' }
      ],
      patterns: [
        { pattern: '這個多少錢？',
          explanation: '這個多少錢？',
          explanations: {'zh-TW': '這個多少錢？', 'zh-CN': '这个多少钱？', 'en': 'How much is this?'} },
        { pattern: '太貴了，可以便宜一點嗎？',
          explanation: '太貴了，可以便宜一點嗎？',
          explanations: {'zh-TW': '太貴了，可以便宜一點嗎？', 'zh-CN': '太贵了，可以便宜一点吗？', 'en': 'Too expensive, can it be cheaper?'} }
      ]
    },
    {
      id: 'zh-CN_unit_9',
      title: {
        'zh-TW': '交通與方向',
        'zh-CN': '交通与方向',
        'en': 'Transportation and Directions',
        'ja': '交通と方向',
        'ko': '교통과 방향',
        'es': 'Transporte y direcciones',
        'fr': 'Transport et directions',
        'de': 'Verkehr und Richtungen',
      },
      description: {
        'zh-TW': '學會問路。',
        'zh-CN': '学会问路。',
        'en': 'Learn to ask for directions.',
        'ja': '道を尋ねることを学びます。',
        'ko': '길을 묻는 것을 배웁니다.',
        'es': 'Aprende a preguntar por direcciones.',
        'fr': 'Apprenez à demander votre chemin.',
        'de': 'Lernen Sie, nach dem Weg zu fragen.',
      },
      vocab: [
        { word: '地铁', meanings: {
          'zh-TW': '地鐵',
          'zh-CN': '地铁',
          'en': 'Subway',
          'ja': '地下鉄',
          'ko': '지하철',
          'es': 'Metro',
          'fr': 'Métro',
          'de': 'U-Bahn',
        }, phonetic: 'dìtiě' },
        { word: '公交车', meanings: {
          'zh-TW': '公交車',
          'zh-CN': '公交车',
          'en': 'Bus',
          'ja': 'バス',
          'ko': '버스',
          'es': 'Autobús',
          'fr': 'Bus',
          'de': 'Bus',
        }, phonetic: 'gōngjiāochē' },
        { word: '左', meanings: {
          'zh-TW': '左',
          'zh-CN': '左',
          'en': 'Left',
          'ja': '左',
          'ko': '왼쪽',
          'es': 'Izquierda',
          'fr': 'Gauche',
          'de': 'Links',
        }, phonetic: 'zuǒ' },
        { word: '右', meanings: {
          'zh-TW': '右',
          'zh-CN': '右',
          'en': 'Right',
          'ja': '右',
          'ko': '오른쪽',
          'es': 'Derecha',
          'fr': 'Droite',
          'de': 'Rechts',
        }, phonetic: 'yòu' },
        { word: '哪里', meanings: {
          'zh-TW': '哪裡',
          'zh-CN': '哪里',
          'en': 'Where',
          'ja': 'どこ',
          'ko': '어디',
          'es': 'Dónde',
          'fr': 'Où',
          'de': 'Wo',
        }, phonetic: 'nǎlǐ' }
      ],
      patterns: [
        { pattern: '[地點]在哪裡？',
          explanation: '...在哪裡？',
          explanations: {'zh-TW': '...在哪裡？', 'zh-CN': '...在哪里？', 'en': 'Where is ...?'} },
        { pattern: '請往[左/右]拐。',
          explanation: '請往...拐。',
          explanations: {'zh-TW': '請往...拐。', 'zh-CN': '请往...拐。', 'en': 'Please turn ...'} }
      ]
    },
    {
      id: 'zh-CN_unit_10',
      title: {
        'zh-TW': '天氣與季節',
        'zh-CN': '天气与季节',
        'en': 'Weather and Seasons',
        'ja': '天気と季節',
        'ko': '날씨와 계절',
        'es': 'Clima y estaciones',
        'fr': 'Météo et saisons',
        'de': 'Wetter und Jahreszeiten',
      },
      description: {
        'zh-TW': '學會描述天氣。',
        'zh-CN': '学会描述天气。',
        'en': 'Learn to describe weather.',
        'ja': '天気を述べることを学びます。',
        'ko': '날씨를 묘사하는 것을 배웁니다.',
        'es': 'Aprende a describir el clima.',
        'fr': 'Apprenez à décrire la météo.',
        'de': 'Lernen Sie, das Wetter zu beschreiben.',
      },
      vocab: [
        { word: '热', meanings: {
          'zh-TW': '熱',
          'zh-CN': '热',
          'en': 'Hot',
          'ja': '熱い',
          'ko': '덥다',
          'es': 'Caliente',
          'fr': 'Chaud',
          'de': 'Heiß',
        }, phonetic: 'rè' },
        { word: '冷', meanings: {
          'zh-TW': '冷',
          'zh-CN': '冷',
          'en': 'Cold',
          'ja': '寒い',
          'ko': '춥다',
          'es': 'Frío',
          'fr': 'Froid',
          'de': 'Kalt',
        }, phonetic: 'lěng' },
        { word: '下雨', meanings: {
          'zh-TW': '下雨',
          'zh-CN': '下雨',
          'en': 'Raining',
          'ja': '雨が降る',
          'ko': '비가 오다',
          'es': 'Lloviendo',
          'fr': 'Il pleut',
          'de': 'Es regnet',
        }, phonetic: 'xiàyǔ' },
        { word: '春天', meanings: {
          'zh-TW': '春天',
          'zh-CN': '春天',
          'en': 'Spring',
          'ja': '春',
          'ko': '봄',
          'es': 'Primavera',
          'fr': 'Printemps',
          'de': 'Frühling',
        }, phonetic: 'chūntiān' },
        { word: '冬天', meanings: {
          'zh-TW': '冬天',
          'zh-CN': '冬天',
          'en': 'Winter',
          'ja': '冬',
          'ko': '겨울',
          'es': 'Invierno',
          'fr': 'Hiver',
          'de': 'Winter',
        }, phonetic: 'dōngtiān' }
      ],
      patterns: [
        { pattern: '今天天氣怎麼樣？',
          explanation: '今天天氣怎麼樣？',
          explanations: {'zh-TW': '今天天氣怎麼樣？', 'zh-CN': '今天天气怎么样？', 'en': 'How is the weather today?'} },
        { pattern: '我覺得很[熱/冷]。',
          explanation: '我覺得很...。',
          explanations: {'zh-TW': '我覺得很...。', 'zh-CN': '我觉得很...。', 'en': 'I feel very ...'} }
      ]
    },
    {
      id: 'zh-CN_unit_11',
      title: {
        'zh-TW': '打電話',
        'zh-CN': '打电话',
        'en': 'Making Phone Calls',
        'ja': '電話をかける',
        'ko': '전화하기',
        'es': 'Hacer llamadas',
        'fr': 'Passer des appels',
        'de': 'Telefonieren',
      },
      description: {
        'zh-TW': '學會用中文打電話。',
        'zh-CN': '学会用中文打电话。',
        'en': 'Learn to make phone calls in Chinese.',
        'ja': '中国語で電話をかけることを学びます。',
        'ko': '중국어로 전화 거는 것을 배웁니다.',
        'es': 'Aprende a hacer llamadas en chino.',
        'fr': 'Apprenez à passer des appels en chinois.',
        'de': 'Lernen Sie, Telefonate auf Chinesisch zu führen.',
      },
      vocab: [
        { word: '喂', meanings: {
          'zh-TW': '喂',
          'zh-CN': '喂',
          'en': 'Hello (phone)',
          'ja': 'もしもし',
          'ko': '여보세요',
          'es': '¿Diga?',
          'fr': 'Allô',
          'de': 'Hallo',
        }, phonetic: 'wèi' },
        { word: '请问', meanings: {
          'zh-TW': '請問',
          'zh-CN': '请问',
          'en': 'May I ask',
          'ja': 'すみません',
          'ko': '실례합니다',
          'es': 'Disculpe',
          'fr': 'Excusez-moi',
          'de': 'Darf ich fragen',
        }, phonetic: 'qǐngwèn' },
        { word: '在吗', meanings: {
          'zh-TW': '在嗎',
          'zh-CN': '在吗',
          'en': 'Are you there',
          'ja': 'いますか',
          'ko': '계세요',
          'es': '¿Está ahí?',
          'fr': 'Êtes-vous là?',
          'de': 'Sind Sie da?',
        }, phonetic: 'zàima' },
        { word: '电话', meanings: {
          'zh-TW': '電話',
          'zh-CN': '电话',
          'en': 'Phone',
          'ja': '電話',
          'ko': '전화',
          'es': 'Teléfono',
          'fr': 'Téléphone',
          'de': 'Telefon',
        }, phonetic: 'diànhuà' },
        { word: '留言', meanings: {
          'zh-TW': '留言',
          'zh-CN': '留言',
          'en': 'Leave a message',
          'ja': '伝言',
          'ko': '메시지',
          'es': 'Mensaje',
          'fr': 'Message',
          'de': 'Nachricht',
        }, phonetic: 'liúyán' }
      ],
      patterns: [
        { pattern: '喂，請問[名字]在嗎？',
          explanation: '喂，請問...在嗎？',
          explanations: {'zh-TW': '喂，請問...在嗎？', 'zh-CN': '喂，请问...在吗？', 'en': 'Hello, may I ask if ... is there?'} },
        { pattern: '請讓我留言。',
          explanation: '請讓我留言。',
          explanations: {'zh-TW': '請讓我留言。', 'zh-CN': '请让我留言。', 'en': 'Please let me leave a message.'} }
      ]
    },
    {
      id: 'zh-CN_unit_12',
      title: {
        'zh-TW': '健康與就醫',
        'zh-CN': '健康与就医',
        'en': 'Health and Seeing a Doctor',
        'ja': '健康と診察',
        'ko': '건강과 진료',
        'es': 'Salud y visita al médico',
        'fr': 'Santé et consultation',
        'de': 'Gesundheit und Arztbesuch',
      },
      description: {
        'zh-TW': '學會描述身體不適。',
        'zh-CN': '学会描述身体不适。',
        'en': 'Learn to describe physical discomfort.',
        'ja': '体調不良を述べることを学びます。',
        'ko': '신체 불편함을 묘사하는 것을 배웁니다.',
        'es': 'Aprende a describir malestar físico.',
        'fr': 'Apprenez à décrire un malaise physique.',
        'de': 'Lernen Sie, körperliches Unwohlsein zu beschreiben.',
      },
      vocab: [
        { word: '头疼', meanings: {
          'zh-TW': '頭疼',
          'zh-CN': '头疼',
          'en': 'Headache',
          'ja': '頭痛',
          'ko': '머리가 아프다',
          'es': 'Dolor de cabeza',
          'fr': 'Mal de tête',
          'de': 'Kopfschmerzen',
        }, phonetic: 'tóuténg' },
        { word: '药', meanings: {
          'zh-TW': '藥',
          'zh-CN': '药',
          'en': 'Medicine',
          'ja': '薬',
          'ko': '약',
          'es': 'Medicina',
          'fr': 'Médicament',
          'de': 'Medizin',
        }, phonetic: 'yào' },
        { word: '医生', meanings: {
          'zh-TW': '醫生',
          'zh-CN': '医生',
          'en': 'Doctor',
          'ja': '医者',
          'ko': '의사',
          'es': 'Médico',
          'fr': 'Médecin',
          'de': 'Arzt',
        }, phonetic: 'yīshēng' },
        { word: '医院', meanings: {
          'zh-TW': '醫院',
          'zh-CN': '医院',
          'en': 'Hospital',
          'ja': '病院',
          'ko': '병원',
          'es': 'Hospital',
          'fr': 'Hôpital',
          'de': 'Krankenhaus',
        }, phonetic: 'yīyuàn' },
        { word: '发烧', meanings: {
          'zh-TW': '發燒',
          'zh-CN': '发烧',
          'en': 'Fever',
          'ja': '熱がある',
          'ko': '열이 나다',
          'es': 'Fiebre',
          'fr': 'Fièvre',
          'de': 'Fieber',
        }, phonetic: 'fāshāo' }
      ],
      patterns: [
        { pattern: '我[身體部位]很疼。',
          explanation: '我...很疼。',
          explanations: {'zh-TW': '我...很疼。', 'zh-CN': '我...很疼。', 'en': 'My ... hurts.'} },
        { pattern: '我需要看醫生。',
          explanation: '我需要看醫生。',
          explanations: {'zh-TW': '我需要看醫生。', 'zh-CN': '我需要看医生。', 'en': 'I need to see a doctor.'} }
      ]
    },
    {
      id: 'zh-CN_unit_13',
      title: {
        'zh-TW': '業餘愛好',
        'zh-CN': '业余爱好',
        'en': 'Hobbies',
        'ja': '趣味',
        'ko': '취미',
        'es': 'Pasatiempos',
        'fr': 'Loisirs',
        'de': 'Hobbys',
      },
      description: {
        'zh-TW': '學會說自己的興趣。',
        'zh-CN': '学会说自己的兴趣。',
        'en': 'Learn to talk about your interests.',
        'ja': '趣味について話すことを学びます。',
        'ko': '취미에 대해 말하는 것을 배웁니다.',
        'es': 'Aprende a hablar de tus intereses.',
        'fr': 'Apprenez à parler de vos intérêts.',
        'de': 'Lernen Sie, über Ihre Interessen zu sprechen.',
      },
      vocab: [
        { word: '运动', meanings: {
          'zh-TW': '運動',
          'zh-CN': '运动',
          'en': 'Sports',
          'ja': '運動',
          'ko': '운동',
          'es': 'Deporte',
          'fr': 'Sport',
          'de': 'Sport',
        }, phonetic: 'yùndòng' },
        { word: '电影', meanings: {
          'zh-TW': '電影',
          'zh-CN': '电影',
          'en': 'Movie',
          'ja': '映画',
          'ko': '영화',
          'es': 'Película',
          'fr': 'Film',
          'de': 'Film',
        }, phonetic: 'diànyǐng' },
        { word: '音乐', meanings: {
          'zh-TW': '音樂',
          'zh-CN': '音乐',
          'en': 'Music',
          'ja': '音楽',
          'ko': '음악',
          'es': 'Música',
          'fr': 'Musique',
          'de': 'Musik',
        }, phonetic: 'yīnyuè' },
        { word: '旅游', meanings: {
          'zh-TW': '旅遊',
          'zh-CN': '旅游',
          'en': 'Travel',
          'ja': '旅行',
          'ko': '여행',
          'es': 'Viaje',
          'fr': 'Voyage',
          'de': 'Reise',
        }, phonetic: 'lǚyóu' },
        { word: '喜欢', meanings: {
          'zh-TW': '喜歡',
          'zh-CN': '喜欢',
          'en': 'Like',
          'ja': '好き',
          'ko': '좋아하다',
          'es': 'Gustar',
          'fr': 'Aimer',
          'de': 'Mögen',
        }, phonetic: 'xǐhuān' }
      ],
      patterns: [
        { pattern: '我喜歡[愛好]。',
          explanation: '我喜歡...。',
          explanations: {'zh-TW': '我喜歡...。', 'zh-CN': '我喜欢...。', 'en': 'I like ...'} },
        { pattern: '你喜歡做什麼？',
          explanation: '你喜歡做什麼？',
          explanations: {'zh-TW': '你喜歡做什麼？', 'zh-CN': '你喜欢做什么？', 'en': 'What do you like to do?'} }
      ]
    },
    {
      id: 'zh-CN_unit_14',
      title: {
        'zh-TW': '工作職場',
        'zh-CN': '工作职场',
        'en': 'Work and Workplace',
        'ja': '仕事と職場',
        'ko': '직장생활',
        'es': 'Trabajo',
        'fr': 'Travail',
        'de': 'Arbeit',
      },
      description: {
        'zh-TW': '學會描述工作。',
        'zh-CN': '学会描述工作。',
        'en': 'Learn to describe work.',
        'ja': '仕事を述べることを学びます。',
        'ko': '일에 대해 묘사하는 것을 배웁니다.',
        'es': 'Aprende a describir el trabajo.',
        'fr': 'Apprenez à décrire le travail.',
        'de': 'Lernen Sie, die Arbeit zu beschreiben.',
      },
      vocab: [
        { word: '上班', meanings: {
          'zh-TW': '上班',
          'zh-CN': '上班',
          'en': 'Go to work',
          'ja': '出勤',
          'ko': '출근',
          'es': 'Ir a trabajar',
          'fr': 'Aller au travail',
          'de': 'Zur Arbeit gehen',
        }, phonetic: 'shàngbān' },
        { word: '开会', meanings: {
          'zh-TW': '開會',
          'zh-CN': '开会',
          'en': 'Have a meeting',
          'ja': '会議をする',
          'ko': '회의하다',
          'es': 'Tener una reunión',
          'fr': 'Avoir une réunion',
          'de': 'Eine Besprechung haben',
        }, phonetic: 'kāihuì' },
        { word: '加班', meanings: {
          'zh-TW': '加班',
          'zh-CN': '加班',
          'en': 'Work overtime',
          'ja': '残業',
          'ko': '야근',
          'es': 'Hacer horas extras',
          'fr': 'Faire des heures supplémentaires',
          'de': 'Überstunden machen',
        }, phonetic: 'jiābān' },
        { word: '同事', meanings: {
          'zh-TW': '同事',
          'zh-CN': '同事',
          'en': 'Colleague',
          'ja': '同僚',
          'ko': '동료',
          'es': 'Colega',
          'fr': 'Collègue',
          'de': 'Kollege',
        }, phonetic: 'tóngshì' },
        { word: '忙', meanings: {
          'zh-TW': '忙',
          'zh-CN': '忙',
          'en': 'Busy',
          'ja': '忙しい',
          'ko': '바쁘다',
          'es': 'Ocupado',
          'fr': 'Occupé',
          'de': 'Beschäftigt',
        }, phonetic: 'máng' }
      ],
      patterns: [
        { pattern: '我今天要[工作活動]。',
          explanation: '我今天要...。',
          explanations: {'zh-TW': '我今天要...。', 'zh-CN': '我今天要...。', 'en': 'I have to ... today.'} },
        { pattern: '你今天忙嗎？',
          explanation: '你今天忙嗎？',
          explanations: {'zh-TW': '你今天忙嗎？', 'zh-CN': '你今天忙吗？', 'en': 'Are you busy today?'} }
      ]
    },
    {
      id: 'zh-CN_unit_15',
      title: {
        'zh-TW': '旅行與住宿',
        'zh-CN': '旅行与住宿',
        'en': 'Travel and Accommodation',
        'ja': '旅行と宿泊',
        'ko': '여행과 숙박',
        'es': 'Viajes y alojamiento',
        'fr': 'Voyage et hébergement',
        'de': 'Reisen und Unterkunft',
      },
      description: {
        'zh-TW': '學會旅行相關用語。',
        'zh-CN': '学会旅行相关用语。',
        'en': 'Learn travel-related terms.',
        'ja': '旅行関連用語を学びます。',
        'ko': '여행 관련 용어를 배웁니다.',
        'es': 'Aprende términos relacionados con viajes.',
        'fr': 'Apprenez les termes liés aux voyages.',
        'de': 'Lernen Sie reisebezogene Begriffe.',
      },
      vocab: [
        { word: '机票', meanings: {
          'zh-TW': '機票',
          'zh-CN': '机票',
          'en': 'Flight ticket',
          'ja': '航空券',
          'ko': '항공권',
          'es': 'Billete de avión',
          'fr': 'Billet d\'avion',
          'de': 'Flugticket',
        }, phonetic: 'jīpiào' },
        { word: '酒店', meanings: {
          'zh-TW': '酒店',
          'zh-CN': '酒店',
          'en': 'Hotel',
          'ja': 'ホテル',
          'ko': '호텔',
          'es': 'Hotel',
          'fr': 'Hôtel',
          'de': 'Hotel',
        }, phonetic: 'jiǔdiàn' },
        { word: '护照', meanings: {
          'zh-TW': '護照',
          'zh-CN': '护照',
          'en': 'Passport',
          'ja': 'パスポート',
          'ko': '여권',
          'es': 'Pasaporte',
          'fr': 'Passeport',
          'de': 'Reisepass',
        }, phonetic: 'hùzhào' },
        { word: '行李', meanings: {
          'zh-TW': '行李',
          'zh-CN': '行李',
          'en': 'Luggage',
          'ja': '荷物',
          'ko': '짐',
          'es': 'Equipaje',
          'fr': 'Bagages',
          'de': 'Gepäck',
        }, phonetic: 'xíngli' },
        { word: '签证', meanings: {
          'zh-TW': '簽證',
          'zh-CN': '签证',
          'en': 'Visa',
          'ja': 'ビザ',
          'ko': '비자',
          'es': 'Visa',
          'fr': 'Visa',
          'de': 'Visum',
        }, phonetic: 'qiānzhèng' }
      ],
      patterns: [
        { pattern: '我要訂[日期]的機票。',
          explanation: '我要訂...的機票。',
          explanations: {'zh-TW': '我要訂...的機票。', 'zh-CN': '我要订...的机票。', 'en': 'I want to book a flight ticket for ...'} },
        { pattern: '請問有沒有空房？',
          explanation: '請問有沒有空房？',
          explanations: {'zh-TW': '請問有沒有空房？', 'zh-CN': '请问有没有空房？', 'en': 'Excuse me, is there a vacant room?'} }
      ]
    }
  ],
﻿  'ko': [
    {
      id: 'ko_unit_1',
      title: {
        'zh-TW': '基本問候',
        'zh-CN': '基本问候',
        'en': 'Basic Greetings',
        'ja': '基本的な挨拶',
        'ko': '기본 인사',
        'es': 'Saludos básicos',
        'fr': 'Salutations de base',
        'de': 'Grundlegende Grüße',
      },
      description: {
        'zh-TW': '學會最基本的韓文打招呼用語。',
        'zh-CN': '学会最基本的韩文打招呼用语。',
        'en': 'Learn the most basic Korean greeting expressions.',
        'ja': '韓国語の最も基本的な挨拶表現を学びます。',
        'ko': '한국어의 가장 기본적인 인사 표현을 배웁니다.',
        'es': 'Aprende las expresiones de saludo más básicas en coreano.',
        'fr': 'Apprenez les expressions de salutation les plus basiques en coréen.',
        'de': 'Lernen Sie die grundlegendsten koreanischen Grußausdrücke.',
      },
      vocab: [
        { word: '안녕하세요', meanings: {
          'zh-TW': '你好',
          'zh-CN': '你好',
          'en': 'Hello',
          'ja': 'こんにちは',
          'ko': '안녕하세요',
          'es': 'Hola',
          'fr': 'Bonjour',
          'de': 'Hallo',
        }, phonetic: 'annyeonghaseyo' },
        { word: '감사합니다', meanings: {
          'zh-TW': '謝謝',
          'zh-CN': '谢谢',
          'en': 'Thank you',
          'ja': 'ありがとう',
          'ko': '감사합니다',
          'es': 'Gracias',
          'fr': 'Merci',
          'de': 'Danke',
        }, phonetic: 'gamsahamnida' },
        { word: '죄송합니다', meanings: {
          'zh-TW': '對不起',
          'zh-CN': '对不起',
          'en': 'Sorry',
          'ja': 'すみません',
          'ko': '죄송합니다',
          'es': 'Lo siento',
          'fr': 'Désolé',
          'de': 'Entschuldigung',
        }, phonetic: 'joesonghamnida' },
        { word: '안녕히 가세요', meanings: {
          'zh-TW': '再見',
          'zh-CN': '再见',
          'en': 'Goodbye',
          'ja': 'さようなら',
          'ko': '안녕히 가세요',
          'es': 'Adiós',
          'fr': 'Au revoir',
          'de': 'Auf Wiedersehen',
        }, phonetic: 'annyeonghi gaseyo' },
        { word: '네', meanings: {
          'zh-TW': '是/好',
          'zh-CN': '是/好',
          'en': 'Yes',
          'ja': 'はい',
          'ko': '네',
          'es': 'Sí',
          'fr': 'Oui',
          'de': 'Ja',
        }, phonetic: 'ne' }
      ],
      patterns: [
        { pattern: '안녕하세요, 저는 [이름]입니다.',
          explanation: '你好，我是...。',
          explanations: {'zh-TW': '你好，我是...。', 'zh-CN': '你好，我是...。', 'en': 'Hello, I am ...'} },
        { pattern: '[이름] 씨, 감사합니다.',
          explanation: '..., 謝謝你。',
          explanations: {'zh-TW': '..., 謝謝你。', 'zh-CN': '..., 谢谢你。', 'en': '..., thank you.'} }
      ]
    },
    {
      id: 'ko_unit_2',
      title: {
        'zh-TW': '數字與計數',
        'zh-CN': '数字与计数',
        'en': 'Numbers and Counting',
        'ja': '数字と数え方',
        'ko': '숫자와 세기',
        'es': 'Números y conteo',
        'fr': 'Nombres et comptage',
        'de': 'Zahlen und Zählen',
      },
      description: {
        'zh-TW': '學會韓文數字。',
        'zh-CN': '学会韩文数字。',
        'en': 'Learn Korean numbers.',
        'ja': '韓国語の数字を学びます。',
        'ko': '한국어 숫자를 배웁니다.',
        'es': 'Aprende los números coreanos.',
        'fr': 'Apprenez les chiffres coréens.',
        'de': 'Lernen Sie koreanische Zahlen.',
      },
      vocab: [
        { word: '영', meanings: {
          'zh-TW': '零',
          'zh-CN': '零',
          'en': 'Zero',
          'ja': 'ゼロ',
          'ko': '영',
          'es': 'Cero',
          'fr': 'Zéro',
          'de': 'Null',
        }, phonetic: 'yeong' },
        { word: '하나', meanings: {
          'zh-TW': '一',
          'zh-CN': '一',
          'en': 'One',
          'ja': '一',
          'ko': '하나',
          'es': 'Uno',
          'fr': 'Un',
          'de': 'Eins',
        }, phonetic: 'hana' },
        { word: '열', meanings: {
          'zh-TW': '十',
          'zh-CN': '十',
          'en': 'Ten',
          'ja': '十',
          'ko': '열',
          'es': 'Diez',
          'fr': 'Dix',
          'de': 'Zehn',
        }, phonetic: 'yeol' },
        { word: '몇', meanings: {
          'zh-TW': '多少/幾',
          'zh-CN': '多少/几',
          'en': 'How many',
          'ja': 'いくつ',
          'ko': '몇',
          'es': 'Cuántos',
          'fr': 'Combien',
          'de': 'Wie viele',
        }, phonetic: 'myeot' },
        { word: '살', meanings: {
          'zh-TW': '歲',
          'zh-CN': '岁',
          'en': 'Years old',
          'ja': '歳',
          'ko': '살',
          'es': 'Años',
          'fr': 'Ans',
          'de': 'Jahre alt',
        }, phonetic: 'sal' }
      ],
      patterns: [
        { pattern: '저는 [숫자]개 있어요.',
          explanation: '我有...個。',
          explanations: {'zh-TW': '我有...個。', 'zh-CN': '我有...个。', 'en': 'I have ... (counter).'} },
        { pattern: '몇 살이에요?',
          explanation: '幾歲？',
          explanations: {'zh-TW': '幾歲？', 'zh-CN': '几岁？', 'en': 'How old are you?'} }
      ]
    },
    {
      id: 'ko_unit_3',
      title: {
        'zh-TW': '時間與日期',
        'zh-CN': '时间与日期',
        'en': 'Time and Date',
        'ja': '時間と日付',
        'ko': '시간과 날짜',
        'es': 'Tiempo y fecha',
        'fr': 'Temps et date',
        'de': 'Zeit und Datum',
      },
      description: {
        'zh-TW': '學會說時間。',
        'zh-CN': '学会说时间。',
        'en': 'Learn to tell time.',
        'ja': '時間を言うことを学びます。',
        'ko': '시간을 말하는 것을 배웁니다.',
        'es': 'Aprende a decir la hora.',
        'fr': 'Apprenez à dire l\'heure.',
        'de': 'Lernen Sie, die Uhrzeit zu sagen.',
      },
      vocab: [
        { word: '지금', meanings: {
          'zh-TW': '現在',
          'zh-CN': '现在',
          'en': 'Now',
          'ja': '今',
          'ko': '지금',
          'es': 'Ahora',
          'fr': 'Maintenant',
          'de': 'Jetzt',
        }, phonetic: 'jigeum' },
        { word: '시', meanings: {
          'zh-TW': '點（鐘點）',
          'zh-CN': '点（钟点）',
          'en': 'O\'clock',
          'ja': '時',
          'ko': '시',
          'es': 'En punto',
          'fr': 'Heure',
          'de': 'Uhr',
        }, phonetic: 'si' },
        { word: '오늘', meanings: {
          'zh-TW': '今天',
          'zh-CN': '今天',
          'en': 'Today',
          'ja': '今日',
          'ko': '오늘',
          'es': 'Hoy',
          'fr': 'Aujourd\'hui',
          'de': 'Heute',
        }, phonetic: 'oneul' },
        { word: '내일', meanings: {
          'zh-TW': '明天',
          'zh-CN': '明天',
          'en': 'Tomorrow',
          'ja': '明日',
          'ko': '내일',
          'es': 'Mañana',
          'fr': 'Demain',
          'de': 'Morgen',
        }, phonetic: 'naeil' },
        { word: '월요일', meanings: {
          'zh-TW': '星期一',
          'zh-CN': '星期一',
          'en': 'Monday',
          'ja': '月曜日',
          'ko': '월요일',
          'es': 'Lunes',
          'fr': 'Lundi',
          'de': 'Montag',
        }, phonetic: 'woryoil' }
      ],
      patterns: [
        { pattern: '지금 몇 시예요?',
          explanation: '現在幾點？',
          explanations: {'zh-TW': '現在幾點？', 'zh-CN': '现在几点？', 'en': 'What time is it now?'} },
        { pattern: '오늘은 [요일]이에요.',
          explanation: '今天是...。',
          explanations: {'zh-TW': '今天是...。', 'zh-CN': '今天是...。', 'en': 'Today is ... (day of week).'} }
      ]
    },
    {
      id: 'ko_unit_4',
      title: {
        'zh-TW': '自我介紹',
        'zh-CN': '自我介绍',
        'en': 'Self-Introduction',
        'ja': '自己紹介',
        'ko': '자기소개',
        'es': 'Autopresentación',
        'fr': 'Auto-présentation',
        'de': 'Selbstvorstellung',
      },
      description: {
        'zh-TW': '學會用韓文介紹自己。',
        'zh-CN': '学会用韩文介绍自己。',
        'en': 'Learn to introduce yourself in Korean.',
        'ja': '韓国語で自己紹介をすることを学びます。',
        'ko': '한국어로 자기소개를 하는 것을 배웁니다.',
        'es': 'Aprende a presentarte en coreano.',
        'fr': 'Apprenez à vous présenter en coréen.',
        'de': 'Lernen Sie, sich auf Koreanisch vorzustellen.',
      },
      vocab: [
        { word: '저는 ...입니다', meanings: {
          'zh-TW': '我是...',
          'zh-CN': '我是...',
          'en': 'I am ...',
          'ja': '私は...です',
          'ko': '저는 ...입니다',
          'es': 'Soy ...',
          'fr': 'Je suis ...',
          'de': 'Ich bin ...',
        }, phonetic: 'jeoneun ... imnida' },
        { word: '한국 사람', meanings: {
          'zh-TW': '韓國人',
          'zh-CN': '韩国人',
          'en': 'Korean',
          'ja': '韓国人',
          'ko': '한국 사람',
          'es': 'Coreano',
          'fr': 'Coréen',
          'de': 'Koreaner',
        }, phonetic: 'hanguk saram' },
        { word: '엔지니어', meanings: {
          'zh-TW': '工程師',
          'zh-CN': '工程师',
          'en': 'Engineer',
          'ja': 'エンジニア',
          'ko': '엔지니어',
          'es': 'Ingeniero',
          'fr': 'Ingénieur',
          'de': 'Ingenieur',
        }, phonetic: 'enjini-eo' },
        { word: '학생', meanings: {
          'zh-TW': '學生',
          'zh-CN': '学生',
          'en': 'Student',
          'ja': '学生',
          'ko': '학생',
          'es': 'Estudiante',
          'fr': 'Étudiant',
          'de': 'Student',
        }, phonetic: 'haksaeng' },
        { word: '선생님', meanings: {
          'zh-TW': '老師',
          'zh-CN': '老师',
          'en': 'Teacher',
          'ja': '先生',
          'ko': '선생님',
          'es': 'Profesor',
          'fr': 'Enseignant',
          'de': 'Lehrer',
        }, phonetic: 'seonsaengnim' }
      ],
      patterns: [
        { pattern: '저는 [이름]이고, [직업]입니다.',
          explanation: '我叫...，我是...。',
          explanations: {'zh-TW': '我叫...，我是...。', 'zh-CN': '我叫...，我是...。', 'en': 'My name is ..., I am a/an ...'} },
        { pattern: '저는 [국적] 사람입니다.',
          explanation: '我是...人。',
          explanations: {'zh-TW': '我是...人。', 'zh-CN': '我是...人。', 'en': 'I am ... (nationality).'} }
      ]
    },
    {
      id: 'ko_unit_5',
      title: {
        'zh-TW': '家庭與外貌',
        'zh-CN': '家庭与外貌',
        'en': 'Family and Appearance',
        'ja': '家族と外見',
        'ko': '가족과 외모',
        'es': 'Familia y apariencia',
        'fr': 'Famille et apparence',
        'de': 'Familie und Aussehen',
      },
      description: {
        'zh-TW': '學會描述家人。',
        'zh-CN': '学会描述家人。',
        'en': 'Learn to describe family members.',
        'ja': '家族を述べることを学びます。',
        'ko': '가족을 묘사하는 것을 배웁니다.',
        'es': 'Aprende a describir a los miembros de la familia.',
        'fr': 'Apprenez à décrire les membres de la famille.',
        'de': 'Lernen Sie, Familienmitglieder zu beschreiben.',
      },
      vocab: [
        { word: '아빠', meanings: {
          'zh-TW': '爸爸',
          'zh-CN': '爸爸',
          'en': 'Dad',
          'ja': 'お父さん',
          'ko': '아빠',
          'es': 'Papá',
          'fr': 'Papa',
          'de': 'Papa',
        }, phonetic: 'appa' },
        { word: '엄마', meanings: {
          'zh-TW': '媽媽',
          'zh-CN': '妈妈',
          'en': 'Mom',
          'ja': 'お母さん',
          'ko': '엄마',
          'es': 'Mamá',
          'fr': 'Maman',
          'de': 'Mama',
        }, phonetic: 'eomma' },
        { word: '키', meanings: {
          'zh-TW': '身高',
          'zh-CN': '身高',
          'en': 'Height',
          'ja': '身長',
          'ko': '키',
          'es': 'Altura',
          'fr': 'Taille',
          'de': 'Größe',
        }, phonetic: 'ki' },
        { word: '뚱뚱하다', meanings: {
          'zh-TW': '胖',
          'zh-CN': '胖',
          'en': 'Fat',
          'ja': '太っている',
          'ko': '뚱뚱하다',
          'es': 'Gordo',
          'fr': 'Gros',
          'de': 'Dick',
        }, phonetic: 'ttungttunghada' },
        { word: '예쁘다', meanings: {
          'zh-TW': '漂亮',
          'zh-CN': '漂亮',
          'en': 'Pretty',
          'ja': 'きれい',
          'ko': '예쁘다',
          'es': 'Guapa',
          'fr': 'Jolie',
          'de': 'Hübsch',
        }, phonetic: 'yeppeuda' }
      ],
      patterns: [
        { pattern: '이분은 제 [가족]이에요.',
          explanation: '這是我...。',
          explanations: {'zh-TW': '這是我...。', 'zh-CN': '这是我...。', 'en': 'This is my ...'} },
        { pattern: '그는/그녀는 매우 [형용사]어요.',
          explanation: '他/她很...。',
          explanations: {'zh-TW': '他/她很...。', 'zh-CN': '他/她很...。', 'en': 'He/She is very ...'} }
      ]
    },
    {
      id: 'ko_unit_6',
      title: {
        'zh-TW': '日常生活',
        'zh-CN': '日常生活',
        'en': 'Daily Life',
        'ja': '日常生活',
        'ko': '일상생활',
        'es': 'Vida diaria',
        'fr': 'Vie quotidienne',
        'de': 'Alltag',
      },
      description: {
        'zh-TW': '學會描述日常活動。',
        'zh-CN': '学会描述日常活动。',
        'en': 'Learn to describe daily activities.',
        'ja': '日常活動を述べることを学びます。',
        'ko': '일상 활동을 묘사하는 것을 배웁니다.',
        'es': 'Aprende a describir actividades diarias.',
        'fr': 'Apprenez à décrire les activités quotidiennes.',
        'de': 'Lernen Sie, tägliche Aktivitäten zu beschreiben.',
      },
      vocab: [
        { word: '일어나다', meanings: {
          'zh-TW': '起床',
          'zh-CN': '起床',
          'en': 'Get up',
          'ja': '起きる',
          'ko': '일어나다',
          'es': 'Levantarse',
          'fr': 'Se lever',
          'de': 'Aufstehen',
        }, phonetic: 'ireonada' },
        { word: '출근하다', meanings: {
          'zh-TW': '上班',
          'zh-CN': '上班',
          'en': 'Go to work',
          'ja': '出勤する',
          'ko': '출근하다',
          'es': 'Ir a trabajar',
          'fr': 'Aller au travail',
          'de': 'Zur Arbeit gehen',
        }, phonetic: 'chugeunhada' },
        { word: '퇴근하다', meanings: {
          'zh-TW': '下班',
          'zh-CN': '下班',
          'en': 'Get off work',
          'ja': '退勤する',
          'ko': '퇴근하다',
          'es': 'Salir del trabajo',
          'fr': 'Quitter le travail',
          'de': 'Feierabend haben',
        }, phonetic: 'toegeunhada' },
        { word: '자다', meanings: {
          'zh-TW': '睡覺',
          'zh-CN': '睡觉',
          'en': 'Sleep',
          'ja': '寝る',
          'ko': '자다',
          'es': 'Dormir',
          'fr': 'Dormir',
          'de': 'Schlafen',
        }, phonetic: 'jada' },
        { word: '밥을 먹다', meanings: {
          'zh-TW': '吃飯',
          'zh-CN': '吃饭',
          'en': 'Eat a meal',
          'ja': 'ご飯を食べる',
          'ko': '밥을 먹다',
          'es': 'Comer',
          'fr': 'Manger',
          'de': 'Essen',
        }, phonetic: 'babeul meokda' }
      ],
      patterns: [
        { pattern: '저는 매일 [시간]에 [동사]요.',
          explanation: '我每天...。',
          explanations: {'zh-TW': '我每天...。', 'zh-CN': '我每天...。', 'en': 'I ... every day.'} },
        { pattern: '언제 [동사]세요?',
          explanation: '你什麼時候...？',
          explanations: {'zh-TW': '你什麼時候...？', 'zh-CN': '你什么时候...？', 'en': 'When do you ...?'} }
      ]
    },
    {
      id: 'ko_unit_7',
      title: {
        'zh-TW': '餐飲與點菜',
        'zh-CN': '餐饮与点菜',
        'en': 'Dining and Ordering',
        'ja': '飲食と注文',
        'ko': '식사와 주문',
        'es': 'Comer y pedir',
        'fr': 'Manger et commander',
        'de': 'Essen und bestellen',
      },
      description: {
        'zh-TW': '學會在餐廳點菜。',
        'zh-CN': '学会在餐厅点菜。',
        'en': 'Learn to order food at a restaurant.',
        'ja': 'レストランで注文することを学びます。',
        'ko': '식당에서 주문하는 것을 배웁니다.',
        'es': 'Aprende a pedir comida en un restaurante.',
        'fr': 'Apprenez à commander de la nourriture au restaurant.',
        'de': 'Lernen Sie, im Restaurant Essen zu bestellen.',
      },
      vocab: [
        { word: '식당', meanings: {
          'zh-TW': '餐廳',
          'zh-CN': '餐厅',
          'en': 'Restaurant',
          'ja': 'レストラン',
          'ko': '식당',
          'es': 'Restaurante',
          'fr': 'Restaurant',
          'de': 'Restaurant',
        }, phonetic: 'sikdang' },
        { word: '메뉴', meanings: {
          'zh-TW': '菜單',
          'zh-CN': '菜单',
          'en': 'Menu',
          'ja': 'メニュー',
          'ko': '메뉴',
          'es': 'Menú',
          'fr': 'Menu',
          'de': 'Speisekarte',
        }, phonetic: 'menyu' },
        { word: '커피', meanings: {
          'zh-TW': '咖啡',
          'zh-CN': '咖啡',
          'en': 'Coffee',
          'ja': 'コーヒー',
          'ko': '커피',
          'es': 'Café',
          'fr': 'Café',
          'de': 'Kaffee',
        }, phonetic: 'keopi' },
        { word: '물', meanings: {
          'zh-TW': '水',
          'zh-CN': '水',
          'en': 'Water',
          'ja': '水',
          'ko': '물',
          'es': 'Agua',
          'fr': 'Eau',
          'de': 'Wasser',
        }, phonetic: 'mul' },
        { word: '맛있다', meanings: {
          'zh-TW': '好吃',
          'zh-CN': '好吃',
          'en': 'Delicious',
          'ja': 'おいしい',
          'ko': '맛있다',
          'es': 'Delicioso',
          'fr': 'Délicieux',
          'de': 'Leckere',
        }, phonetic: 'masitda' }
      ],
      patterns: [
        { pattern: '저는 [음식]을 먹고 싶어요.',
          explanation: '我想吃...。',
          explanations: {'zh-TW': '我想吃...。', 'zh-CN': '我想吃...。', 'en': 'I want to eat ...'} },
        { pattern: '[음식]을 주세요.',
          explanation: '請給我...。',
          explanations: {'zh-TW': '請給我...。', 'zh-CN': '请给我...。', 'en': 'Please give me ...'} }
      ]
    },
    {
      id: 'ko_unit_8',
      title: {
        'zh-TW': '購物與價格',
        'zh-CN': '购物与价格',
        'en': 'Shopping and Prices',
        'ja': '買い物と価格',
        'ko': '쇼핑과 가격',
        'es': 'Compras y precios',
        'fr': 'Achats et prix',
        'de': 'Einkaufen und Preise',
      },
      description: {
        'zh-TW': '學會問價格。',
        'zh-CN': '学会问价格。',
        'en': 'Learn to ask prices.',
        'ja': '価格を聞くことを学びます。',
        'ko': '가격을 묻는 것을 배웁니다.',
        'es': 'Aprende a preguntar precios.',
        'fr': 'Apprenez à demander les prix.',
        'de': 'Lernen Sie, nach Preisen zu fragen.',
      },
      vocab: [
        { word: '얼마예요', meanings: {
          'zh-TW': '多少錢',
          'zh-CN': '多少钱',
          'en': 'How much',
          'ja': 'いくら',
          'ko': '얼마예요',
          'es': 'Cuánto cuesta',
          'fr': 'Combien',
          'de': 'Wie viel kostet',
        }, phonetic: 'eolmayeyo' },
        { word: '원', meanings: {
          'zh-TW': '韓元',
          'zh-CN': '韩元',
          'en': 'Won',
          'ja': 'ウォン',
          'ko': '원',
          'es': 'Won',
          'fr': 'Won',
          'de': 'Won',
        }, phonetic: 'won' },
        { word: '비싸다', meanings: {
          'zh-TW': '貴',
          'zh-CN': '贵',
          'en': 'Expensive',
          'ja': '高い',
          'ko': '비싸다',
          'es': 'Caro',
          'fr': 'Cher',
          'de': 'Teuer',
        }, phonetic: 'bissada' },
        { word: '싸다', meanings: {
          'zh-TW': '便宜',
          'zh-CN': '便宜',
          'en': 'Cheap',
          'ja': '安い',
          'ko': '싸다',
          'es': 'Barato',
          'fr': 'Pas cher',
          'de': 'Günstig',
        }, phonetic: 'ssada' },
        { word: '사다', meanings: {
          'zh-TW': '買',
          'zh-CN': '买',
          'en': 'Buy',
          'ja': '買う',
          'ko': '사다',
          'es': 'Comprar',
          'fr': 'Acheter',
          'de': 'Kaufen',
        }, phonetic: 'sada' }
      ],
      patterns: [
        { pattern: '이거 얼마예요?',
          explanation: '這個多少錢？',
          explanations: {'zh-TW': '這個多少錢？', 'zh-CN': '这个多少钱？', 'en': 'How much is this?'} },
        { pattern: '너무 비싸요, 좀 싸게 해주세요.',
          explanation: '太貴了，可以便宜一點嗎？',
          explanations: {'zh-TW': '太貴了，可以便宜一點嗎？', 'zh-CN': '太贵了，可以便宜一点吗？', 'en': 'Too expensive, can it be cheaper?'} }
      ]
    },
    {
      id: 'ko_unit_9',
      title: {
        'zh-TW': '交通與方向',
        'zh-CN': '交通与方向',
        'en': 'Transportation and Directions',
        'ja': '交通と方向',
        'ko': '교통과 방향',
        'es': 'Transporte y direcciones',
        'fr': 'Transport et directions',
        'de': 'Verkehr und Richtungen',
      },
      description: {
        'zh-TW': '學會問路。',
        'zh-CN': '学会问路。',
        'en': 'Learn to ask for directions.',
        'ja': '道を尋ねることを学びます。',
        'ko': '길을 묻는 것을 배웁니다.',
        'es': 'Aprende a preguntar por direcciones.',
        'fr': 'Apprenez à demander votre chemin.',
        'de': 'Lernen Sie, nach dem Weg zu fragen.',
      },
      vocab: [
        { word: '지하철', meanings: {
          'zh-TW': '地鐵',
          'zh-CN': '地铁',
          'en': 'Subway',
          'ja': '地下鉄',
          'ko': '지하철',
          'es': 'Metro',
          'fr': 'Métro',
          'de': 'U-Bahn',
        }, phonetic: 'jihacheol' },
        { word: '버스', meanings: {
          'zh-TW': '公交車',
          'zh-CN': '公交车',
          'en': 'Bus',
          'ja': 'バス',
          'ko': '버스',
          'es': 'Autobús',
          'fr': 'Bus',
          'de': 'Bus',
        }, phonetic: 'beoseu' },
        { word: '왼쪽', meanings: {
          'zh-TW': '左',
          'zh-CN': '左',
          'en': 'Left',
          'ja': '左',
          'ko': '왼쪽',
          'es': 'Izquierda',
          'fr': 'Gauche',
          'de': 'Links',
        }, phonetic: 'oenjjok' },
        { word: '오른쪽', meanings: {
          'zh-TW': '右',
          'zh-CN': '右',
          'en': 'Right',
          'ja': '右',
          'ko': '오른쪽',
          'es': 'Derecha',
          'fr': 'Droite',
          'de': 'Rechts',
        }, phonetic: 'oreunjjok' },
        { word: '어디', meanings: {
          'zh-TW': '哪裡',
          'zh-CN': '哪里',
          'en': 'Where',
          'ja': 'どこ',
          'ko': '어디',
          'es': 'Dónde',
          'fr': 'Où',
          'de': 'Wo',
        }, phonetic: 'eodi' }
      ],
      patterns: [
        { pattern: '[장소]가 어디예요?',
          explanation: '...在哪裡？',
          explanations: {'zh-TW': '...在哪裡？', 'zh-CN': '...在哪里？', 'en': 'Where is ...?'} },
        { pattern: '[왼쪽/오른쪽]으로 가세요.',
          explanation: '請往...。',
          explanations: {'zh-TW': '請往...。', 'zh-CN': '请往...。', 'en': 'Please go ...'} }
      ]
    },
    {
      id: 'ko_unit_10',
      title: {
        'zh-TW': '天氣與季節',
        'zh-CN': '天气与季节',
        'en': 'Weather and Seasons',
        'ja': '天気と季節',
        'ko': '날씨와 계절',
        'es': 'Clima y estaciones',
        'fr': 'Météo et saisons',
        'de': 'Wetter und Jahreszeiten',
      },
      description: {
        'zh-TW': '學會描述天氣。',
        'zh-CN': '学会描述天气。',
        'en': 'Learn to describe weather.',
        'ja': '天気を述べることを学びます。',
        'ko': '날씨를 묘사하는 것을 배웁니다.',
        'es': 'Aprende a describir el clima.',
        'fr': 'Apprenez à décrire la météo.',
        'de': 'Lernen Sie, das Wetter zu beschreiben.',
      },
      vocab: [
        { word: '덥다', meanings: {
          'zh-TW': '熱',
          'zh-CN': '热',
          'en': 'Hot',
          'ja': '熱い',
          'ko': '덥다',
          'es': 'Caliente',
          'fr': 'Chaud',
          'de': 'Heiß',
        }, phonetic: 'deopda' },
        { word: '춥다', meanings: {
          'zh-TW': '冷',
          'zh-CN': '冷',
          'en': 'Cold',
          'ja': '寒い',
          'ko': '춥다',
          'es': 'Frío',
          'fr': 'Froid',
          'de': 'Kalt',
        }, phonetic: 'chupda' },
        { word: '비가 오다', meanings: {
          'zh-TW': '下雨',
          'zh-CN': '下雨',
          'en': 'Raining',
          'ja': '雨が降る',
          'ko': '비가 오다',
          'es': 'Lloviendo',
          'fr': 'Il pleut',
          'de': 'Es regnet',
        }, phonetic: 'biga oda' },
        { word: '봄', meanings: {
          'zh-TW': '春天',
          'zh-CN': '春天',
          'en': 'Spring',
          'ja': '春',
          'ko': '봄',
          'es': 'Primavera',
          'fr': 'Printemps',
          'de': 'Frühling',
        }, phonetic: 'bom' },
        { word: '겨울', meanings: {
          'zh-TW': '冬天',
          'zh-CN': '冬天',
          'en': 'Winter',
          'ja': '冬',
          'ko': '겨울',
          'es': 'Invierno',
          'fr': 'Hiver',
          'de': 'Winter',
        }, phonetic: 'gyeoul' }
      ],
      patterns: [
        { pattern: '오늘 날씨 어때요?',
          explanation: '今天天氣怎麼樣？',
          explanations: {'zh-TW': '今天天氣怎麼樣？', 'zh-CN': '今天天气怎么样？', 'en': 'How is the weather today?'} },
        { pattern: '저는 [추위/더위]를 많이 타요.',
          explanation: '我很怕...。',
          explanations: {'zh-TW': '我很怕...。', 'zh-CN': '我很怕...。', 'en': 'I am very sensitive to ...'} }
      ]
    },
    {
      id: 'ko_unit_11',
      title: {
        'zh-TW': '打電話',
        'zh-CN': '打电话',
        'en': 'Making Phone Calls',
        'ja': '電話をかける',
        'ko': '전화하기',
        'es': 'Hacer llamadas',
        'fr': 'Passer des appels',
        'de': 'Telefonieren',
      },
      description: {
        'zh-TW': '學會用韓文打電話。',
        'zh-CN': '学会用韩文打电话。',
        'en': 'Learn to make phone calls in Korean.',
        'ja': '韓国語で電話をかけることを学びます。',
        'ko': '한국어로 전화 거는 것을 배웁니다.',
        'es': 'Aprende a hacer llamadas en coreano.',
        'fr': 'Apprenez à passer des appels en coréen.',
        'de': 'Lernen Sie, Telefonate auf Koreanisch zu führen.',
      },
      vocab: [
        { word: '여보세요', meanings: {
          'zh-TW': '喂',
          'zh-CN': '喂',
          'en': 'Hello (phone)',
          'ja': 'もしもし',
          'ko': '여보세요',
          'es': '¿Diga?',
          'fr': 'Allô',
          'de': 'Hallo',
        }, phonetic: 'yeoboseyo' },
        { word: '실례합니다', meanings: {
          'zh-TW': '請問/不好意思',
          'zh-CN': '请问/不好意思',
          'en': 'Excuse me',
          'ja': 'すみません',
          'ko': '실례합니다',
          'es': 'Disculpe',
          'fr': 'Excusez-moi',
          'de': 'Entschuldigung',
        }, phonetic: 'sillyehamnida' },
        { word: '계세요', meanings: {
          'zh-TW': '在嗎',
          'zh-CN': '在吗',
          'en': 'Are you there',
          'ja': 'いますか',
          'ko': '계세요',
          'es': '¿Está ahí?',
          'fr': 'Êtes-vous là?',
          'de': 'Sind Sie da?',
        }, phonetic: 'gyeseyo' },
        { word: '전화', meanings: {
          'zh-TW': '電話',
          'zh-CN': '电话',
          'en': 'Phone',
          'ja': '電話',
          'ko': '전화',
          'es': 'Teléfono',
          'fr': 'Téléphone',
          'de': 'Telefon',
        }, phonetic: 'jeonhwa' },
        { word: '메시지', meanings: {
          'zh-TW': '留言',
          'zh-CN': '留言',
          'en': 'Message',
          'ja': '伝言',
          'ko': '메시지',
          'es': 'Mensaje',
          'fr': 'Message',
          'de': 'Nachricht',
        }, phonetic: 'mesiji' }
      ],
      patterns: [
        { pattern: '여보세요, [이름] 씨 계세요?',
          explanation: '喂，請問...在嗎？',
          explanations: {'zh-TW': '喂，請問...在嗎？', 'zh-CN': '喂，请问...在吗？', 'en': 'Hello, may I ask if ... is there?'} },
        { pattern: '메시지 남겨 드릴까요?',
          explanation: '要我留言嗎？',
          explanations: {'zh-TW': '要我留言嗎？', 'zh-CN': '要我留言吗？', 'en': 'Would you like me to leave a message?'} }
      ]
    },
    {
      id: 'ko_unit_12',
      title: {
        'zh-TW': '健康與就醫',
        'zh-CN': '健康与就医',
        'en': 'Health and Seeing a Doctor',
        'ja': '健康と診察',
        'ko': '건강과 진료',
        'es': 'Salud y visita al médico',
        'fr': 'Santé et consultation',
        'de': 'Gesundheit und Arztbesuch',
      },
      description: {
        'zh-TW': '學會描述身體不適。',
        'zh-CN': '学会描述身体不适。',
        'en': 'Learn to describe physical discomfort.',
        'ja': '体調不良を述べることを学びます。',
        'ko': '신체 불편함을 묘사하는 것을 배웁니다.',
        'es': 'Aprende a describir malestar físico.',
        'fr': 'Apprenez à décrire un malaise physique.',
        'de': 'Lernen Sie, körperliches Unwohlsein zu beschreiben.',
      },
      vocab: [
        { word: '머리가 아프다', meanings: {
          'zh-TW': '頭疼',
          'zh-CN': '头疼',
          'en': 'Headache',
          'ja': '頭痛',
          'ko': '머리가 아프다',
          'es': 'Dolor de cabeza',
          'fr': 'Mal de tête',
          'de': 'Kopfschmerzen',
        }, phonetic: 'meoriga apeuda' },
        { word: '약', meanings: {
          'zh-TW': '藥',
          'zh-CN': '药',
          'en': 'Medicine',
          'ja': '薬',
          'ko': '약',
          'es': 'Medicina',
          'fr': 'Médicament',
          'de': 'Medizin',
        }, phonetic: 'yak' },
        { word: '의사', meanings: {
          'zh-TW': '醫生',
          'zh-CN': '医生',
          'en': 'Doctor',
          'ja': '医者',
          'ko': '의사',
          'es': 'Médico',
          'fr': 'Médecin',
          'de': 'Arzt',
        }, phonetic: 'uisa' },
        { word: '병원', meanings: {
          'zh-TW': '醫院',
          'zh-CN': '医院',
          'en': 'Hospital',
          'ja': '病院',
          'ko': '병원',
          'es': 'Hospital',
          'fr': 'Hôpital',
          'de': 'Krankenhaus',
        }, phonetic: 'byeongwon' },
        { word: '열이 나다', meanings: {
          'zh-TW': '發燒',
          'zh-CN': '发烧',
          'en': 'Fever',
          'ja': '熱がある',
          'ko': '열이 나다',
          'es': 'Fiebre',
          'fr': 'Fièvre',
          'de': 'Fieber',
        }, phonetic: 'yeori nada' }
      ],
      patterns: [
        { pattern: '저 [신체]가 아파요.',
          explanation: '我...很疼。',
          explanations: {'zh-TW': '我...很疼。', 'zh-CN': '我...很疼。', 'en': 'My ... hurts.'} },
        { pattern: '병원에 가야 해요.',
          explanation: '我需要去看醫生。',
          explanations: {'zh-TW': '我需要去看醫生。', 'zh-CN': '我需要去看医生。', 'en': 'I need to go to the hospital.'} }
      ]
    },
    {
      id: 'ko_unit_13',
      title: {
        'zh-TW': '業餘愛好',
        'zh-CN': '业余爱好',
        'en': 'Hobbies',
        'ja': '趣味',
        'ko': '취미와 여가',
        'es': 'Pasatiempos',
        'fr': 'Loisirs',
        'de': 'Hobbys',
      },
      description: {
        'zh-TW': '學會說自己的興趣。',
        'zh-CN': '学会说自己的兴趣。',
        'en': 'Learn to talk about your interests.',
        'ja': '趣味について話すことを学びます。',
        'ko': '취미에 대해 말하는 것을 배웁니다.',
        'es': 'Aprende a hablar de tus intereses.',
        'fr': 'Apprenez à parler de vos intérêts.',
        'de': 'Lernen Sie, über Ihre Interessen zu sprechen.',
      },
      vocab: [
        { word: '운동', meanings: {
          'zh-TW': '運動',
          'zh-CN': '运动',
          'en': 'Sports',
          'ja': '運動',
          'ko': '운동',
          'es': 'Deporte',
          'fr': 'Sport',
          'de': 'Sport',
        }, phonetic: 'undong' },
        { word: '영화', meanings: {
          'zh-TW': '電影',
          'zh-CN': '电影',
          'en': 'Movie',
          'ja': '映画',
          'ko': '영화',
          'es': 'Película',
          'fr': 'Film',
          'de': 'Film',
        }, phonetic: 'yeonghwa' },
        { word: '음악', meanings: {
          'zh-TW': '音樂',
          'zh-CN': '音乐',
          'en': 'Music',
          'ja': '音楽',
          'ko': '음악',
          'es': 'Música',
          'fr': 'Musique',
          'de': 'Musik',
        }, phonetic: 'eumak' },
        { word: '여행', meanings: {
          'zh-TW': '旅遊',
          'zh-CN': '旅游',
          'en': 'Travel',
          'ja': '旅行',
          'ko': '여행',
          'es': 'Viaje',
          'fr': 'Voyage',
          'de': 'Reise',
        }, phonetic: 'yeohaeng' },
        { word: '좋아하다', meanings: {
          'zh-TW': '喜歡',
          'zh-CN': '喜欢',
          'en': 'Like',
          'ja': '好き',
          'ko': '좋아하다',
          'es': 'Gustar',
          'fr': 'Aimer',
          'de': 'Mögen',
        }, phonetic: 'joahada' }
      ],
      patterns: [
        { pattern: '저는 [취미]를 좋아해요.',
          explanation: '我喜歡...。',
          explanations: {'zh-TW': '我喜歡...。', 'zh-CN': '我喜欢...。', 'en': 'I like ...'} },
        { pattern: '뭐 하기 좋아해요?',
          explanation: '你喜歡做什麼？',
          explanations: {'zh-TW': '你喜歡做什麼？', 'zh-CN': '你喜欢做什么？', 'en': 'What do you like to do?'} }
      ]
    },
    {
      id: 'ko_unit_14',
      title: {
        'zh-TW': '工作職場',
        'zh-CN': '工作职场',
        'en': 'Work and Workplace',
        'ja': '仕事と職場',
        'ko': '직장생활',
        'es': 'Trabajo',
        'fr': 'Travail',
        'de': 'Arbeit',
      },
      description: {
        'zh-TW': '學會描述工作。',
        'zh-CN': '学会描述工作。',
        'en': 'Learn to describe work.',
        'ja': '仕事を述べることを学びます。',
        'ko': '일에 대해 묘사하는 것을 배웁니다.',
        'es': 'Aprende a describir el trabajo.',
        'fr': 'Apprenez à décrire le travail.',
        'de': 'Lernen Sie, die Arbeit zu beschreiben.',
      },
      vocab: [
        { word: '출근', meanings: {
          'zh-TW': '上班',
          'zh-CN': '上班',
          'en': 'Go to work',
          'ja': '出勤',
          'ko': '출근',
          'es': 'Ir a trabajar',
          'fr': 'Aller au travail',
          'de': 'Zur Arbeit gehen',
        }, phonetic: 'chugeun' },
        { word: '회의', meanings: {
          'zh-TW': '開會',
          'zh-CN': '开会',
          'en': 'Meeting',
          'ja': '会議',
          'ko': '회의',
          'es': 'Reunión',
          'fr': 'Réunion',
          'de': 'Besprechung',
        }, phonetic: 'hoeui' },
        { word: '야근', meanings: {
          'zh-TW': '加班',
          'zh-CN': '加班',
          'en': 'Overtime',
          'ja': '残業',
          'ko': '야근',
          'es': 'Horas extras',
          'fr': 'Heures supplémentaires',
          'de': 'Überstunden',
        }, phonetic: 'yageun' },
        { word: '동료', meanings: {
          'zh-TW': '同事',
          'zh-CN': '同事',
          'en': 'Colleague',
          'ja': '同僚',
          'ko': '동료',
          'es': 'Colega',
          'fr': 'Collègue',
          'de': 'Kollege',
        }, phonetic: 'dongryo' },
        { word: '바쁘다', meanings: {
          'zh-TW': '忙',
          'zh-CN': '忙',
          'en': 'Busy',
          'ja': '忙しい',
          'ko': '바쁘다',
          'es': 'Ocupado',
          'fr': 'Occupé',
          'de': 'Beschäftigt',
        }, phonetic: 'bappeuda' }
      ],
      patterns: [
        { pattern: '오늘 [회의/출근]이 있어요.',
          explanation: '我今天要...。',
          explanations: {'zh-TW': '我今天要...。', 'zh-CN': '我今天要...。', 'en': 'I have ... today.'} },
        { pattern: '오늘 바빠요?',
          explanation: '你今天忙嗎？',
          explanations: {'zh-TW': '你今天忙嗎？', 'zh-CN': '你今天忙吗？', 'en': 'Are you busy today?'} }
      ]
    },
    {
      id: 'ko_unit_15',
      title: {
        'zh-TW': '旅行與住宿',
        'zh-CN': '旅行与住宿',
        'en': 'Travel and Accommodation',
        'ja': '旅行と宿泊',
        'ko': '여행과 숙박',
        'es': 'Viajes y alojamiento',
        'fr': 'Voyage et hébergement',
        'de': 'Reisen und Unterkunft',
      },
      description: {
        'zh-TW': '學會旅行相關用語。',
        'zh-CN': '学会旅行相关用语。',
        'en': 'Learn travel-related terms.',
        'ja': '旅行関連用語を学びます。',
        'ko': '여행 관련 용어를 배웁니다.',
        'es': 'Aprende términos relacionados con viajes.',
        'fr': 'Apprenez les termes liés aux voyages.',
        'de': 'Lernen Sie reisebezogene Begriffe.',
      },
      vocab: [
        { word: '항공권', meanings: {
          'zh-TW': '機票',
          'zh-CN': '机票',
          'en': 'Flight ticket',
          'ja': '航空券',
          'ko': '항공권',
          'es': 'Billete de avión',
          'fr': 'Billet d\'avion',
          'de': 'Flugticket',
        }, phonetic: 'hanggonggwon' },
        { word: '호텔', meanings: {
          'zh-TW': '酒店',
          'zh-CN': '酒店',
          'en': 'Hotel',
          'ja': 'ホテル',
          'ko': '호텔',
          'es': 'Hotel',
          'fr': 'Hôtel',
          'de': 'Hotel',
        }, phonetic: 'hotel' },
        { word: '여권', meanings: {
          'zh-TW': '護照',
          'zh-CN': '护照',
          'en': 'Passport',
          'ja': 'パスポート',
          'ko': '여권',
          'es': 'Pasaporte',
          'fr': 'Passeport',
          'de': 'Reisepass',
        }, phonetic: 'yeogwon' },
        { word: '짐', meanings: {
          'zh-TW': '行李',
          'zh-CN': '行李',
          'en': 'Luggage',
          'ja': '荷物',
          'ko': '짐',
          'es': 'Equipaje',
          'fr': 'Bagages',
          'de': 'Gepäck',
        }, phonetic: 'jim' },
        { word: '비자', meanings: {
          'zh-TW': '簽證',
          'zh-CN': '签证',
          'en': 'Visa',
          'ja': 'ビザ',
          'ko': '비자',
          'es': 'Visa',
          'fr': 'Visa',
          'de': 'Visum',
        }, phonetic: 'bija' }
      ],
      patterns: [
        { pattern: '[날짜] 항공권 예매할게요.',
          explanation: '我要訂...的機票。',
          explanations: {'zh-TW': '我要訂...的機票。', 'zh-CN': '我要订...的机票。', 'en': 'I will book a flight ticket for ...'} },
        { pattern: '빈 방 있나요?',
          explanation: '請問有沒有空房？',
          explanations: {'zh-TW': '請問有沒有空房？', 'zh-CN': '请问有没有空房？', 'en': 'Excuse me, is there a vacant room?'} }
      ]
    }
  ]
};
