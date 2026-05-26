export const curriculumData = {
  ja: [
    {
      id: 'ja_unit_1',
      title: '基本打招呼與禮貌用語',
      description: '掌握最常用的見面與道別用語。',
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
      title: '自我介紹與身分',
      description: '能用日文說出自己的身分，並詢問對方。',
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
      title: '這是什麼？(指示代名詞)',
      description: '學會指稱物品並詢問名稱。',
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
      title: '場所與存在',
      description: '能在實體空間中詢問與指出地點。',
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
      title: '數字與時間',
      description: '學會日文基本數字與報時。',
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
      title: '點餐與購物',
      description: '能在餐廳點餐或商店詢問價格。',
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
      title: '日常動作',
      description: '描述習慣性的動作或即將要做的事。',
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
      title: '邀請與提議',
      description: '學會約別人一起做某件事。',
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
      title: '過去的經驗',
      description: '描述昨天或以前發生的事情。',
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
      title: '想要與願望',
      description: '表達自己想要的東西或想做的事。',
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
      title: '打電話與留言',
      description: '學會基本的電話接聽與留言說法。',
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
      title: '請求與許可',
      description: '客氣地請別人幫忙或詢問可不可以做某事。',
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
      title: '狀態與變化',
      description: '描述天氣或事物的狀態改變。',
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
      title: '比較與選擇',
      description: '學會比較兩樣事物並表達偏好。',
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
      title: '經驗與建議',
      description: '分享做過的事並給予他人建議。',
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
      title: '基本問候與見面',
      description: '用英文自信地打招呼。',
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
      title: '職業與國籍',
      description: '使用 Be 動詞描述狀態與身分。',
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
      title: '指示與物品',
      description: '指認周遭物品。',
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
      title: '地點與方向',
      description: '詢問廁所或辦公室在哪裡。',
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
      title: '數字與購物',
      description: '詢問價格與基本點餐。',
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
      title: '時間與日常作息',
      description: '看懂時間，並描述每天固定行程。',
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
      title: '喜好與厭惡',
      description: '表達自己喜歡或討厭的事物。',
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
      title: '能力與請求',
      description: '說明自己會做什麼，以及請別人幫忙。',
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
      title: '過去發生的事',
      description: '描述昨天去哪裡或做了什麼。',
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
      title: '未來計畫',
      description: '說明即將到來的週末或明天的計畫。',
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
      title: '電話禮儀與留言',
      description: '學會基本的英文電話對答與留言。',
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
      title: '請求與許可',
      description: '有禮貌地提出請求或詢問是否可以做某事。',
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
      title: '比較與描述',
      description: '比較兩種事物並表達其差異。',
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
      title: '提供建議與意見',
      description: '對別人的狀況給予簡單的建議。',
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
      title: '經驗與感受',
      description: '描述過去的經驗並表達自己的感覺。',
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
