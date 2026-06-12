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
        { word: 'おはようございます', zh: '早安', phonetic: '[0]' },
        { word: 'こんにちは', zh: '你好', phonetic: '[0]' },
        { word: 'こんばんは', zh: '晚安', phonetic: '[0]' },
        { word: 'ありがとう', zh: '謝謝', phonetic: '[2]' },
        { word: 'さようなら', zh: '再見', phonetic: '[4]' }
      ],
      patterns: [
        { pattern: '基本問候 (無特定句型)', explanation: '依據時間不同使用對應的打招呼用語。' }
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
        { word: 'わたし', zh: '我', phonetic: '私 [0]' },
        { word: 'あなた', zh: '你', phonetic: '貴方 [2]' },
        { word: 'がくせい', zh: '學生', phonetic: '学生 [0]' },
        { word: 'かいしゃいん', zh: '上班族', phonetic: '会社員 [3]' },
        { word: 'せんせい', zh: '老師', phonetic: '先生 [3]' }
      ],
      patterns: [
        { pattern: 'わたしは [名詞] です。', explanation: '我是...' },
        { pattern: 'あなたは [名詞] ですか。', explanation: '你是...嗎？' }
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
        { word: 'これ', zh: '這個', phonetic: '[0]' },
        { word: 'それ', zh: '那個', phonetic: '[0]' },
        { word: 'あれ', zh: '那個(遠處)', phonetic: '[0]' },
        { word: 'ほん', zh: '書本', phonetic: '本 [1]' },
        { word: 'ペン', zh: '筆', phonetic: '[1]' },
        { word: 'パソコン', zh: '電腦', phonetic: '[0]' }
      ],
      patterns: [
        { pattern: 'これは [名詞] です。', explanation: '這是...' },
        { pattern: 'それは [名詞] ですか。', explanation: '那是...嗎？' }
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
        { word: 'ここ', zh: '這裡', phonetic: '[0]' },
        { word: 'そこ', zh: '那裡', phonetic: '[0]' },
        { word: 'あそこ', zh: '那裡(遠處)', phonetic: '[0]' },
        { word: 'トイレ', zh: '廁所', phonetic: '[1]' },
        { word: 'かいしゃ', zh: '公司', phonetic: '会社 [0]' },
        { word: 'どこ', zh: '哪裡', phonetic: '[1]' }
      ],
      patterns: [
        { pattern: '[名詞] は どこ ですか。', explanation: '...在哪裡？' },
        { pattern: '[名詞] は [場所] です。', explanation: '...在某處' }
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
        { word: 'いち', zh: '一', phonetic: '一 [2]' },
        { word: 'に', zh: '二', phonetic: '二 [1]' },
        { word: 'さん', zh: '三', phonetic: '三 [0]' },
        { word: 'いま', zh: '現在', phonetic: '今 [1]' },
        { word: '～じ', zh: '～點', phonetic: '～時' },
        { word: '～ふん', zh: '～分', phonetic: '～分' }
      ],
      patterns: [
        { pattern: '今、何時ですか。', explanation: '現在幾點？' },
        { pattern: '今、[數字]時 です。', explanation: '現在...點' }
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
        { word: 'いくら', zh: '多少錢', phonetic: '[1]' },
        { word: 'メニュー', zh: '菜單', phonetic: '[1]' },
        { word: 'みず', zh: '水', phonetic: '水 [0]' },
        { word: 'コーヒー', zh: '咖啡', phonetic: '[3]' },
        { word: 'えん', zh: '日圓', phonetic: '円 [1]' }
      ],
      patterns: [
        { pattern: 'これは いくら ですか。', explanation: '這個多少錢？' },
        { pattern: '[名詞] を お願いします。', explanation: '麻煩給我...' }
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
        { word: 'たべます', zh: '吃', phonetic: '食べます [3]' },
        { word: 'のみます', zh: '喝', phonetic: '飲みます [3]' },
        { word: 'みます', zh: '看', phonetic: '見ます [2]' },
        { word: 'あさごはん', zh: '早餐', phonetic: '朝ごはん [3]' },
        { word: 'おちゃ', zh: '茶', phonetic: 'お茶 [0]' }
      ],
      patterns: [
        { pattern: 'わたしは [名詞] を [動詞ます]。', explanation: '我要/我習慣做...' },
        { pattern: '何を [動詞ます] か。', explanation: '你要做什麼？' }
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
        { word: 'いっしょに', zh: '一起', phonetic: '一緒に [0]' },
        { word: 'えいが', zh: '電影', phonetic: '映画 [0]' },
        { word: 'あした', zh: '明天', phonetic: '明日 [3]' },
        { word: 'いきます', zh: '去', phonetic: '行きます [3]' }
      ],
      patterns: [
        { pattern: '一緒に [動詞] ませんか。', explanation: '要不要一起...？' },
        { pattern: '[動詞] ましょう。', explanation: '我們...吧' }
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
        { word: 'きのう', zh: '昨天', phonetic: '昨日 [2]' },
        { word: 'せんしゅう', zh: '上週', phonetic: '先週 [0]' },
        { word: 'いそがしい', zh: '忙碌的', phonetic: '忙しい [4]' },
        { word: 'ひま', zh: '閒暇的', phonetic: '暇 [0]' }
      ],
      patterns: [
        { pattern: '[名詞/形容詞] でした。', explanation: '當時是...' },
        { pattern: '[動詞] ました。', explanation: '已經做了...' }
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
        { word: 'ほしい', zh: '想要的', phonetic: '欲しい [2]' },
        { word: 'くるま', zh: '車子', phonetic: '車 [0]' },
        { word: 'あたらしい', zh: '新的', phonetic: '新しい [4]' },
        { word: 'かいます', zh: '買', phonetic: '買います [3]' }
      ],
      patterns: [
        { pattern: 'わたしは [名詞] が 欲しいです。', explanation: '我想要某物' },
        { pattern: 'わたしは [動詞ます去ます] たいです。', explanation: '我想要做某事' }
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
        { word: 'もしもし', zh: '喂', phonetic: '[1]' },
        { word: 'でんわ', zh: '電話', phonetic: '電話 [0]' },
        { word: 'おねがいします', zh: '麻煩您了', phonetic: 'お願いします [4]' },
        { word: 'いま', zh: '現在', phonetic: '今 [1]' },
        { word: 'かいぎ', zh: '會議', phonetic: '会議 [1]' }
      ],
      patterns: [
        { pattern: '[名詞] を お願いします。', explanation: '請找某人聽電話' },
        { pattern: '今は [名詞] 中です。', explanation: '現在正在...中' }
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
        { word: 'てつだいます', zh: '幫忙', phonetic: '手伝います [4]' },
        { word: 'つかいます', zh: '使用', phonetic: '使います [4]' },
        { word: 'どうぞ', zh: '請', phonetic: '[1]' },
        { word: 'いいですか', zh: '可以嗎', phonetic: '[1]' }
      ],
      patterns: [
        { pattern: '[動詞て形] も いいですか。', explanation: '我可以...嗎？' },
        { pattern: '[動詞て形] ください。', explanation: '請你幫我...' }
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
        { word: 'てんき', zh: '天氣', phonetic: '天気 [1]' },
        { word: 'あつい', zh: '熱的', phonetic: '暑い [2]' },
        { word: 'さむい', zh: '冷的', phonetic: '寒い [2]' },
        { word: 'なります', zh: '變成', phonetic: '[3]' }
      ],
      patterns: [
        { pattern: '[形容詞/名詞] に なります。', explanation: '變得...' },
        { pattern: 'とても [形容詞] です。', explanation: '非常...' }
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
        { word: 'おおきい', zh: '大的', phonetic: '大きい [3]' },
        { word: 'ちいさい', zh: '小的', phonetic: '小さい [3]' },
        { word: 'どちら', zh: '哪一邊', phonetic: '[1]' },
        { word: 'より', zh: '比...', phonetic: '[1]' }
      ],
      patterns: [
        { pattern: 'Aは Bより [形容詞] です。', explanation: 'A比B更...' },
        { pattern: 'Aと Bと どちらが [形容詞] ですか。', explanation: 'A跟B哪個比較...？' }
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
        { word: '日本', zh: '日本', phonetic: '[2]' },
        { word: 'べんきょう', zh: '學習', phonetic: '勉強 [0]' },
        { word: 'ほうがいい', zh: '比較好', phonetic: '[1]' },
        { word: 'あります', zh: '有', phonetic: '[3]' }
      ],
      patterns: [
        { pattern: '[動詞た形] ことが あります。', explanation: '曾經有...的經驗' },
        { pattern: '[動詞た形] ほうが いいです。', explanation: '最好做...' }
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
        { word: 'Hello', zh: '你好', phonetic: '/həˈloʊ/' },
        { word: 'Good morning', zh: '早安', phonetic: '/ɡʊd ˈmɔːrnɪŋ/' },
        { word: 'Name', zh: '名字', phonetic: '/neɪm/' },
        { word: 'Nice', zh: '好的/高興的', phonetic: '/naɪs/' },
        { word: 'Meet', zh: '遇見', phonetic: '/miːt/' }
      ],
      patterns: [
        { pattern: 'My name is [Name].', explanation: '我的名字是...' },
        { pattern: 'Nice to meet you.', explanation: '很高興認識你。' }
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
        { word: 'Teacher', zh: '老師', phonetic: '/ˈtiːtʃər/' },
        { word: 'Student', zh: '學生', phonetic: '/ˈstjuːdənt/' },
        { word: 'Engineer', zh: '工程師', phonetic: '/ˌendʒɪˈnɪr/' },
        { word: 'Taiwan', zh: '台灣', phonetic: '/taɪˈwɑːn/' },
        { word: 'America', zh: '美國', phonetic: '/əˈmerɪkə/' }
      ],
      patterns: [
        { pattern: 'I am a [Noun].', explanation: '我是一個...' },
        { pattern: 'Are you a [Noun]?', explanation: '你是一個...嗎？' }
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
        { word: 'This', zh: '這個', phonetic: '/ðɪs/' },
        { word: 'That', zh: '那個', phonetic: '/ðæt/' },
        { word: 'Pen', zh: '筆', phonetic: '/pen/' },
        { word: 'Computer', zh: '電腦', phonetic: '/kəmˈpjuːtər/' },
        { word: 'Phone', zh: '電話', phonetic: '/foʊn/' }
      ],
      patterns: [
        { pattern: 'What is this?', explanation: '這是什麼？' },
        { pattern: 'This is a [Noun].', explanation: '這是一個...' }
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
        { word: 'Here', zh: '這裡', phonetic: '/hɪr/' },
        { word: 'There', zh: '那裡', phonetic: '/ðer/' },
        { word: 'Restroom', zh: '廁所', phonetic: '/ˈrestruːm/' },
        { word: 'Office', zh: '辦公室', phonetic: '/ˈɔːfɪs/' },
        { word: 'Where', zh: '哪裡', phonetic: '/wer/' }
      ],
      patterns: [
        { pattern: 'Where is the [Noun]?', explanation: '...在哪裡？' },
        { pattern: 'It is [Location].', explanation: '它在...' }
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
        { word: 'How much', zh: '多少錢', phonetic: '/haʊ mʌtʃ/' },
        { word: 'Dollar', zh: '元', phonetic: '/ˈdɑːlər/' },
        { word: 'Coffee', zh: '咖啡', phonetic: '/ˈkɔːfi/' },
        { word: 'Menu', zh: '菜單', phonetic: '/ˈmenjuː/' },
        { word: 'Receipt', zh: '收據', phonetic: '/rɪˈsiːt/' }
      ],
      patterns: [
        { pattern: 'How much is [Noun]?', explanation: '...多少錢？' },
        { pattern: 'I would like [Noun], please.', explanation: '麻煩給我...' }
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
        { word: 'Time', zh: '時間', phonetic: '/taɪm/' },
        { word: 'Clock', zh: '時鐘', phonetic: '/klɑːk/' },
        { word: 'Breakfast', zh: '早餐', phonetic: '/ˈbrekfəst/' },
        { word: 'Work', zh: '工作', phonetic: '/wɜːrk/' },
        { word: 'Sleep', zh: '睡覺', phonetic: '/sliːp/' }
      ],
      patterns: [
        { pattern: 'What time is it?', explanation: '現在幾點？' },
        { pattern: 'I [Verb] at [Time].', explanation: '我在...點做...' }
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
        { word: 'Like', zh: '喜歡', phonetic: '/laɪk/' },
        { word: 'Love', zh: '愛/很喜歡', phonetic: '/lʌv/' },
        { word: 'Hate', zh: '討厭', phonetic: '/heɪt/' },
        { word: 'Food', zh: '食物', phonetic: '/fuːd/' },
        { word: 'Music', zh: '音樂', phonetic: '/ˈmjuːzɪk/' }
      ],
      patterns: [
        { pattern: 'Do you like [Noun]?', explanation: '你喜歡...嗎？' },
        { pattern: 'I like [Noun].', explanation: '我喜歡...' }
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
        { word: 'Can', zh: '會/能夠', phonetic: '/kæn/' },
        { word: 'Speak', zh: '說', phonetic: '/spiːk/' },
        { word: 'Swim', zh: '游泳', phonetic: '/swɪm/' },
        { word: 'Play', zh: '玩/演奏', phonetic: '/pleɪ/' },
        { word: 'English', zh: '英文', phonetic: '/ˈɪŋɡlɪʃ/' }
      ],
      patterns: [
        { pattern: 'Can you [Verb]?', explanation: '你會...嗎？' },
        { pattern: 'I can [Verb].', explanation: '我會...' }
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
        { word: 'Yesterday', zh: '昨天', phonetic: '/ˈjestərdeɪ/' },
        { word: 'Last week', zh: '上週', phonetic: '/læst wiːk/' },
        { word: 'Went', zh: '去(過去式)', phonetic: '/went/' },
        { word: 'Saw', zh: '看(過去式)', phonetic: '/sɔː/' },
        { word: 'Ate', zh: '吃(過去式)', phonetic: '/eɪt/' }
      ],
      patterns: [
        { pattern: 'Did you [Verb]?', explanation: '你有...嗎？' },
        { pattern: 'I [Past Verb] [Noun].', explanation: '我做了...' }
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
        { word: 'Tomorrow', zh: '明天', phonetic: '/təˈmɔːroʊ/' },
        { word: 'Next year', zh: '明年', phonetic: '/nekst jɪr/' },
        { word: 'Going to', zh: '將要', phonetic: '/ˈɡoʊɪŋ tu/' },
        { word: 'Will', zh: '將會', phonetic: '/wɪl/' },
        { word: 'Travel', zh: '旅行', phonetic: '/ˈtrævl/' }
      ],
      patterns: [
        { pattern: 'What are you going to do?', explanation: '你打算做什麼？' },
        { pattern: 'I am going to [Verb].', explanation: '我打算要...' }
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
        { word: 'Call', zh: '打電話', phonetic: '/kɔːl/' },
        { word: 'Message', zh: '訊息/留言', phonetic: '/ˈmesɪdʒ/' },
        { word: 'Speak', zh: '說話', phonetic: '/spiːk/' },
        { word: 'Busy', zh: '忙碌的', phonetic: '/ˈbɪzi/' },
        { word: 'Meeting', zh: '會議', phonetic: '/ˈmiːtɪŋ/' }
      ],
      patterns: [
        { pattern: 'May I speak to [Name]?', explanation: '我可以和...通話嗎？' },
        { pattern: 'Can I leave a message?', explanation: '我可以留個言嗎？' }
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
        { word: 'Borrow', zh: '借(入)', phonetic: '/ˈbɔːroʊ/' },
        { word: 'Use', zh: '使用', phonetic: '/juːz/' },
        { word: 'Help', zh: '幫助', phonetic: '/help/' },
        { word: 'Sure', zh: '當然', phonetic: '/ʃʊr/' },
        { word: 'Problem', zh: '問題', phonetic: '/ˈprɑːbləm/' }
      ],
      patterns: [
        { pattern: 'Could you help me [Verb]?', explanation: '你能幫我...嗎？' },
        { pattern: 'May I [Verb]?', explanation: '我可以...嗎？' }
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
        { word: 'Better', zh: '更好的', phonetic: '/ˈbetər/' },
        { word: 'Faster', zh: '更快的', phonetic: '/ˈfæstər/' },
        { word: 'Cheap', zh: '便宜的', phonetic: '/tʃiːp/' },
        { word: 'Expensive', zh: '昂貴的', phonetic: '/ɪkˈspensɪv/' },
        { word: 'Than', zh: '比', phonetic: '/ðæn/' }
      ],
      patterns: [
        { pattern: '[A] is better than [B].', explanation: 'A比B更好。' },
        { pattern: 'Which one is [Adjective+er]?', explanation: '哪一個比較...？' }
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
        { word: 'Should', zh: '應該', phonetic: '/ʃʊd/' },
        { word: 'Idea', zh: '主意', phonetic: '/aɪˈdiːə/' },
        { word: 'Maybe', zh: '也許', phonetic: '/ˈmeɪbi/' },
        { word: 'Try', zh: '嘗試', phonetic: '/traɪ/' },
        { word: 'Rest', zh: '休息', phonetic: '/rest/' }
      ],
      patterns: [
        { pattern: 'You should [Verb].', explanation: '你應該...' },
        { pattern: 'That is a good idea.', explanation: '那是個好主意。' }
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
        { word: 'Experience', zh: '經驗', phonetic: '/ɪkˈspɪriəns/' },
        { word: 'Feel', zh: '感覺', phonetic: '/fiːl/' },
        { word: 'Tired', zh: '疲倦的', phonetic: '/ˈtaɪərd/' },
        { word: 'Excited', zh: '興奮的', phonetic: '/ɪkˈsaɪtɪd/' },
        { word: 'Ever', zh: '曾經', phonetic: '/ˈevər/' }
      ],
      patterns: [
        { pattern: 'Have you ever [Past Participle]?', explanation: '你曾經...過嗎？' },
        { pattern: 'I feel [Adjective].', explanation: '我感到...' }
      ]
    }
  ]
};
