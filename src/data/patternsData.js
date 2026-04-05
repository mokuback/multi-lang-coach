export const patternsData = {
  it: {
    en: {
      beginner: [
        { id: 'en-it-b1', pattern: "I use [Software/Tool].", translation: "我使用 [某個軟體/工具]。", explanation: "用來簡單介紹自己熟悉的工具。" },
        { id: 'en-it-b2', pattern: "The [Device/System] is not working.", translation: "[某個設備/系統] 壞了/無法運作。", explanation: "最基本回報問題的句型。" }
      ],
      'pre-intermediate': [
        { id: 'en-it-pi1', pattern: "I am working on [Task/Project].", translation: "我正在處理 [某個任務/專案]。", explanation: "報告目前的進度與焦點。" },
        { id: 'en-it-pi2', pattern: "Could you help me with [Task]?", translation: "你能幫我處理 [某個任務] 嗎？", explanation: "委婉尋求協助。" },
        { id: 'en-it-pi3', pattern: "I have finished [Task] today.", translation: "我今天完成了 [某個任務]。", explanation: "每日站會 (Daily Standup) 常用的回報完成句型。" },
        { id: 'en-it-pi4', pattern: "We need more time to fix [Component].", translation: "我們需要多一點時間來修復 [某組件]。", explanation: "說明延遲並爭取時間的用法。" },
        { id: 'en-it-pi5', pattern: "There is an error in [File/Module].", translation: "[某檔案/模組] 裡有一個錯誤。", explanation: "指出版版錯誤發生地點的情境。" },
        { id: 'en-it-pi6', pattern: "Can you review my code for [Feature]?", translation: "你能幫我 code review [某功能] 嗎？", explanation: "請求同事進行代碼審查的標準說法。" },
        { id: 'en-it-pi7', pattern: "I am trying to connect to [Database/Server].", translation: "我正嘗試連線至 [資料庫/伺服器]。", explanation: "描述正在進行的單一連線任務。" },
        { id: 'en-it-pi8', pattern: "The server is down because of [Reason].", translation: "伺服器因為 [某個原因] 停機了。", explanation: "說明服務中斷原因。" },
        { id: 'en-it-pi9', pattern: "Please reinstall the [Software].", translation: "請重新安裝 [某個軟體]。", explanation: "給予用戶或同事基礎排解建議。" },
        { id: 'en-it-pi10', pattern: "I will deploy it to [Environment].", translation: "我會把它部署到 [某環境 (如 staging/production)]。", explanation: "描述程式碼部署流向。" }
      ],
      intermediate: [
        { id: 'en-it-i1', pattern: "We need to fix the bug in [Module].", translation: "我們需要修復 [某模組] 裡的錯誤。", explanation: "討論要解決的技術問題。" },
        { id: 'en-it-i2', pattern: "What is the status of [Project]?", translation: "[某專案] 狀態如何了？", explanation: "向同事或下屬詢問進度。" },
        { id: 'en-it-i3', pattern: "The root cause of the issue is [Technical Cause].", translation: "這個問題的根本原因在於 [技術性原因]。", explanation: "深入分析問題發生點的道地句型 (Root cause)。" },
        { id: 'en-it-i4', pattern: "Let's roll back the deployment to [Previous Version].", translation: "我們把部署退版到 [上一個版本] 吧。", explanation: "危機處理時常用的退版建議。" },
        { id: 'en-it-i5', pattern: "This feature depends on [API/Service].", translation: "這個功能依賴於 [某個 API / 服務]。", explanation: "說明系統間耦合與依賴關係。" },
        { id: 'en-it-i6', pattern: "I am going to submit a pull request for [Feature].", translation: "我準備為 [某功能] 提交 PR (Pull Request)。", explanation: "日常開發中送交合併請求的標準句。" },
        { id: 'en-it-i7', pattern: "Could you grant me access to [System/Repository]?", translation: "您可以開通 [某系統/庫] 的權限給我嗎？", explanation: "向維運人員索要權限。" },
        { id: 'en-it-i8', pattern: "We are experiencing latency issues with [Service].", translation: "我們目前遇到 [某服務] 的延遲問題。", explanation: "向客戶或高層報告突發的系統不穩狀況。" },
        { id: 'en-it-i9', pattern: "It seems like a memory leak in [Component].", translation: "看起來像是 [某個組件] 發生了記憶體流失。", explanation: "推測系統效能問題的常見說法。" },
        { id: 'en-it-i10', pattern: "Let's scale up the instances for [Microservice].", translation: "我們來為主機上的 [某微服務] 增加實例數量（擴容）吧。", explanation: "討論系統流量與伺服器乘載。" }
      ]
    },
    ja: {
      beginner: [
        { id: 'ja-it-b1', pattern: "私は [Software/Tool] を使います。", translation: "我使用 [某個軟體/工具]。", explanation: "最簡單的工具介紹句。" },
        { id: 'ja-it-b2', pattern: "[Device/System] が動いていません。", translation: "[某個設備/系統] 壞了/沒有運作。", explanation: "基礎問題回報。" }
      ],
      'pre-intermediate': [
        { id: 'ja-it-pi1', pattern: "現在、[Task/Project] を担当しています。", translation: "我現在正在負責 [某個任務/專案]。", explanation: "日系職場常見的負責任務回報法。" },
        { id: 'ja-it-pi2', pattern: "[Task] を手伝っていただけますか？", translation: "你能幫我處理 [某個任務] 嗎？", explanation: "有禮貌的請託方式。" },
        { id: 'ja-it-pi3', pattern: "本日、[Task] が完了しました。", translation: "今天完成了 [某個任務]。", explanation: "每日朝會或下班前進度回報。" },
        { id: 'ja-it-pi4', pattern: "[Component] の修正にもう少し時間が必要です。", translation: "修復 [某個組件] 還需要多一點時間。", explanation: "報告延遲且禮貌地爭取時間。" },
        { id: 'ja-it-pi5', pattern: "[File/Module] にエラーが発生しています。", translation: "[某個檔案/模組] 發生了錯誤。", explanation: "點出錯誤發生的具體位置。" },
        { id: 'ja-it-pi6', pattern: "[Feature] のコードレビューをお願いできますか？", translation: "能麻煩您幫忙對 [某功能] 進行 Code Review 嗎？", explanation: "委託前輩或同事審查代碼。" },
        { id: 'ja-it-pi7', pattern: "[Database/Server] に接続しようとしています。", translation: "我正嘗試連線至 [資料庫/伺服器]。", explanation: "針對連線動作的說明。" },
        { id: 'ja-it-pi8', pattern: "[Reason] が原因でサーバーがダウンしています。", translation: "伺服器因為 [某個原因] 停機了。", explanation: "說明伺服器癱瘓的原因。" },
        { id: 'ja-it-pi9', pattern: "[Software] を再インストールしてください。", translation: "請重新安裝 [某個軟體]。", explanation: "標準的用戶障礙排除指示。" },
        { id: 'ja-it-pi10', pattern: "これを [Environment] にデプロイします。", translation: "我會把它部署到 [某環境]。", explanation: "宣告將要進行的部署動作。" }
      ],
      intermediate: [
        { id: 'ja-it-i1', pattern: "[Module] のバグを修正する必要があります。", translation: "我們必須修復 [某模組] 的 Bug。", explanation: "釐清接下來待辦的優先事項。" },
        { id: 'ja-it-i2', pattern: "[Project] の進捗はどうですか？", translation: "[某專案] 的進度如何？", explanation: "主管或 PM 常用的詢問方式。" },
        { id: 'ja-it-i3', pattern: "この問題の根本原因は [Technical Cause] です。", translation: "這個問題的根本原因在於 [技術性原因]。", explanation: "深入探討障害原因（根本原因/ルートコーズ）的用語。" },
        { id: 'ja-it-i4', pattern: "デプロイを [Previous Version] に切り戻しましょう。", translation: "我們把部署退版（切回）到 [上一個版本] 吧。", explanation: "日文中「退版」常說「切り戻す (きりもどす)」。" },
        { id: 'ja-it-i5', pattern: "この機能は [API/Service] に依存しています。", translation: "這個功能依賴於 [某個 API / 服務]。", explanation: "系統架構與相依性的解說。" },
        { id: 'ja-it-i6', pattern: "[Feature] のプルリク（PR）を提出します。", translation: "我要發送 [某功能] 的 PR。", explanation: "日常開發交流，日文口語常將 Pull Request 簡稱「プルリク」。" },
        { id: 'ja-it-i7', pattern: "[System/Repository] へのアクセス権限を付与していただけますか？", translation: "您可以賦予我 [某系統/庫] 的存取權限嗎？", explanation: "非常有禮貌的申請權限句型。" },
        { id: 'ja-it-i8', pattern: "現在、[Service] に遅延（レイテンシ）が発生しております。", translation: "目前 [某服務] 產生了延遲問題。", explanation: "對客戶或主管發送的錯誤速報（一次報）標準寫法。" },
        { id: 'ja-it-i9', pattern: "[Component] でメモリリークが起きているようです。", translation: "似乎在 [某個組件] 發生了 Memory Leak。", explanation: "開發者之間討論效能瓶頸的推測。" },
        { id: 'ja-it-i10', pattern: "[Microservice] のインスタンスをスケールアウトしましょう。", translation: "我們來增加 [某微服務] 的實例來擴容（Scale Out）吧。", explanation: "伺服器承載量管理的提案。" }
      ]
    }
  },
  management: {
    en: {
      'pre-intermediate': [
        { id: 'en-mgt-pi1', pattern: "We need to discuss [Topic].", translation: "我們需要討論 [某主題]。", explanation: "召開會議或開啟話題的基礎句型。" },
        { id: 'en-mgt-pi2', pattern: "What is your opinion on [Topic]?", translation: "你對 [某主題] 的看法是什麼？", explanation: "詢問下屬或同事意見。" },
        { id: 'en-mgt-pi3', pattern: "Let's schedule a meeting on [Day/Time].", translation: "我們安排在 [某日/時間] 開個會吧。", explanation: "敲定會議時間用。" },
        { id: 'en-mgt-pi4', pattern: "Please send me the report by [Time].", translation: "請在 [某時間] 前回傳報告給我。", explanation: "交代死線 (deadline) 給部屬的說法。" },
        { id: 'en-mgt-pi5', pattern: "I agree with [Person/Idea].", translation: "我同意 [某人/某想法]。", explanation: "表達贊同的基本說法。" },
        { id: 'en-mgt-pi6', pattern: "We have an issue with [Department/Process].", translation: "我們在 [某部門/流程] 上遇到了一個問題。", explanation: "向管理層提報營運障礙。" },
        { id: 'en-mgt-pi7', pattern: "Our goal is to increase [Metric].", translation: "我們的目標是提升 [某個指標]。", explanation: "確立團隊的短期目標（如 KPI）。" },
        { id: 'en-mgt-pi8', pattern: "Thank you for your hard work on [Project].", translation: "感謝你在 [某專案] 上的辛勤工作。", explanation: "對團隊表達常見的感謝鼓勵。" },
        { id: 'en-mgt-pi9', pattern: "We are currently over budget on [Category].", translation: "我們目前在 [某類別] 上已經超出預算了。", explanation: "提醒團隊開銷狀況。" },
        { id: 'en-mgt-pi10', pattern: "Can you prioritize [Task] today?", translation: "你今天可以將 [某任務] 列為第一優先嗎？", explanation: "調整團隊成員的任務排序。" }
      ]
    },
    ja: {
      'pre-intermediate': [
        { id: 'ja-mgt-pi1', pattern: "[Topic] について話し合う必要があります。", translation: "我們需要針對 [某主題] 進行討論。", explanation: "發起議案的安全說法。" },
        { id: 'ja-mgt-pi2', pattern: "[Topic] についてどう思いますか？", translation: "你對 [某主題] 覺得如何？", explanation: "徵詢意見的簡單問法。" },
        { id: 'ja-mgt-pi3', pattern: "[Day/Time] にミーティングを設定しましょう。", translation: "我們安排在 [某日/時間] 開會吧。", explanation: "日系職場常見排定會議的句型。" },
        { id: 'ja-mgt-pi4', pattern: "[Time] までにレポートを送ってください。", translation: "請在 [某時間] 前將報告發給我。", explanation: "交代截止時間的指令。" },
        { id: 'ja-mgt-pi5', pattern: "[Person/Idea] に賛成です。", translation: "我贊成 [某人/某想法]。", explanation: "開會時表態支持。" },
        { id: 'ja-mgt-pi6', pattern: "[Department/Process] に問題が発生しています。", translation: "在 [某部門/流程] 發生了問題。", explanation: "管理層回報問題（ホウレンソウ的一環）。" },
        { id: 'ja-mgt-pi7', pattern: "私たちの目標は [Metric] を増やすことです。", translation: "我們的目標是增加 [某指標]。", explanation: "佈達 KPI 或 OMT 常用句。" },
        { id: 'ja-mgt-pi8', pattern: "[Project] での頑張りに感謝します。", translation: "感謝各位在 [某專案] 上的努力。", explanation: "犒賞或感謝團隊的用詞。" },
        { id: 'ja-mgt-pi9', pattern: "現在、[Category] の予算をオーバーしています。", translation: "目前我們在 [某類別] 上已經超支了。", explanation: "財務控管的警告句。" },
        { id: 'ja-mgt-pi10', pattern: "今日は [Task] を最優先にしていただけますか？", translation: "可以請您今天把 [某任務] 擺在最優先嗎？", explanation: "請託部屬調整順序的禮貌說法。" }
      ]
    }
  },
  travel: {
    en: {
      beginner: [
        { id: 'en-tr-b1', pattern: "I would like [Item].", translation: "我想要 [某物]。", explanation: "最基礎的點餐或要求服務句型。" },
        { id: 'en-tr-b2', pattern: "Where is [Place]?", translation: "[某個地點] 在哪裡？", explanation: "基礎問路。" }
      ],
      'pre-intermediate': [
        { id: 'en-tr-pi1', pattern: "Could you recommend [Food/Place]?", translation: "您可以推薦 [某食物/地點] 嗎？", explanation: "請當地人或服務生給建議。" },
        { id: 'en-tr-pi2', pattern: "I have a reservation under the name [Name].", translation: "我有預約，名字是 [某名字]。", explanation: "不管是去飯店入住或去餐廳報到時必用的起手式。" },
        { id: 'en-tr-pi3', pattern: "Could we have [Item], please?", translation: "麻煩請給我們 [某物品] 好嗎？", explanation: "點餐或者跟客房服務要東西（例如毛巾、菜單）的禮貌說法。" },
        { id: 'en-tr-pi4', pattern: "How much does [Item/Ticket] cost?", translation: "[某物品/車票] 多少錢？", explanation: "詢問價格與費用的萬用句。" },
        { id: 'en-tr-pi5', pattern: "Is there a [Facility] near here?", translation: "這附近有 [某個設施 (如超商/廁所)] 嗎？", explanation: "問路的進階說法，找周遭生活機能。" },
        { id: 'en-tr-pi6', pattern: "I would like to check in at [Time].", translation: "我想在 [某個時間] 辦理入住。", explanation: "聯絡飯店喬定時間。" },
        { id: 'en-tr-pi7', pattern: "Can I pay by [Payment Method]?", translation: "我可以用 [某種付款方式 (如刷卡/現金)] 付款嗎？", explanation: "結帳前確認付款形式。" },
        { id: 'en-tr-pi8', pattern: "Does this dish contain [Ingredient]?", translation: "這道料理有包含 [某種食材 (如花生/海鮮)] 嗎？", explanation: "防範過敏必備的餐廳詢問句。" },
        { id: 'en-tr-pi9', pattern: "We went to [Place] this morning.", translation: "我們今天早上去過了 [某個地點]。", explanation: "跟司機、導遊或是旅伴分享今日行程狀態。" },
        { id: 'en-tr-pi10', pattern: "Could you take a photo of [Us/Me]?", translation: "可以請您幫 [我們/我] 拍張照嗎？", explanation: "觀光景點搭訕路人尋求拍照協助。" }
      ]
    },
    ja: {
      beginner: [
        { id: 'ja-tr-b1', pattern: "[Item] をお願いします。", translation: "麻煩給我 [某物]。", explanation: "日本最管用、點餐與買東西通殺的用法。" },
        { id: 'ja-tr-b2', pattern: "[Place] はどこですか？", translation: "[某個地點] 在哪裡？", explanation: "基礎問路。" }
      ],
      'pre-intermediate': [
        { id: 'ja-tr-pi1', pattern: "おすすめの [Food/Place] はありますか？", translation: "有推薦的 [某食物/地點] 嗎？", explanation: "請別人推薦的必學實用句。" },
        { id: 'ja-tr-pi2', pattern: "[Name] で予約している者です。", translation: "我們是用 [某姓名] 預約的客人。", explanation: "走進高級旅店或是居酒屋時，非常道地的報到方式。" },
        { id: 'ja-tr-pi3', pattern: "[Item] をもう一ついただけますか？", translation: "可以再給我一個 [某物] 嗎？", explanation: "需要追加餐具或備品時的禮貌說法。" },
        { id: 'ja-tr-pi4', pattern: "[Item/Ticket] はいくらですか？", translation: "[某物品/車票] 多少錢？", explanation: "詢問價格。" },
        { id: 'ja-tr-pi5', pattern: "この近くに [Facility] はありますか？", translation: "這附近有 [某設施 (如便利商店)] 嗎？", explanation: "詢問地緣周遭設施用。" },
        { id: 'ja-tr-pi6', pattern: "[Time] にチェックインしたいのですが。", translation: "我想要在 [某個時間] 辦理入住（可是...）。", explanation: "日式特有的委婉請求語氣（加上 が）。" },
        { id: 'ja-tr-pi7', pattern: "[Payment Method] で支払えますか？", translation: "可以用 [某種付款方式 (如信用卡/交通卡)] 付款嗎？", explanation: "購物付款前的確認。" },
        { id: 'ja-tr-pi8', pattern: "これに [Ingredient] は入っていますか？", translation: "這個裡面有加了 [某食材 (如豬肉/蝦)] 嗎？", explanation: "忌口或防過敏時，針對菜單或商品的詢問。" },
        { id: 'ja-tr-pi9', pattern: "今朝、[Place] に行ってきました。", translation: "今天早上我去了 [某地點] 回來了。", explanation: "表示完成了該行程，用「てきました」強調動作歸來。" },
        { id: 'ja-tr-pi10', pattern: "写真を撮っていただけませんか？（[Us/Me] の）", translation: "可以請您幫忙拍張照嗎？（拍我們/我）", explanation: "在日本觀光聖地請路人幫忙拍照的得體說法。" }
      ]
    }
  },
  dating: {
    en: {
      'pre-intermediate': [
        { id: 'en-dt-pi1', pattern: "Are you free on [Day]?", translation: "你 [某天] 有空嗎？", explanation: "邀約起始句。" },
        { id: 'en-dt-pi2', pattern: "I was wondering if you'd like to get [Food/Drink] with me.", translation: "我想知道你是否有意願和我一起去吃/喝 [某食物/飲料]。", explanation: "不帶壓力的委婉約會邀請。" },
        { id: 'en-dt-pi3', pattern: "I really like your [Feature/Clothing].", translation: "我真的很喜歡你的 [某個五官特徵或穿搭]。", explanation: "給出真誠的讚美 (Compliment)。" },
        { id: 'en-dt-pi4', pattern: "What kind of [Movie/Music] are you into?", translation: "你比較喜歡哪種類型的 [電影/音樂]？", explanation: "開啟興趣話題，挖掘共同點。" },
        { id: 'en-dt-pi5', pattern: "I had a great time at [Place] with you.", translation: "和你一起在 [某地] 共度的時光非常愉快。", explanation: "約會結束後傳訊息道別的好用法。" },
        { id: 'en-dt-pi6', pattern: "Have you ever been to [Place]?", translation: "你曾經去過 [某個地方] 嗎？", explanation: "為下一次邀約鋪路的探詢。" },
        { id: 'en-dt-pi7', pattern: "I feel very comfortable when we are [Doing Something].", translation: "當我們一起 [做某事] 時，我感到非常自在舒適。", explanation: "進一步表達好感與安心感。" },
        { id: 'en-dt-pi8', pattern: "Can I get your [Contact Info]?", translation: "我可以跟你要你的 [某種聯絡方式 (如 IG/Phone number)] 嗎？", explanation: "初次見面交換聯絡方式用的標準說法。" },
        { id: 'en-dt-pi9', pattern: "You seem really passionate about [Hobby].", translation: "你看起來對 [某個興趣] 真的充滿熱情呢。", explanation: "展現傾聽與共情的讚美方式。" },
        { id: 'en-dt-pi10', pattern: "Would you be interested in going to [Event] next week?", translation: "你下週會有興趣一起去 [某個活動] 嗎？", explanation: "具體的進階邀約。" }
      ]
    },
    ja: {
      'pre-intermediate': [
        { id: 'ja-dt-pi1', pattern: "[Day] って、何か予定ありますか？", translation: "[某天] 說起來，你有特別計畫什麼事嗎？", explanation: "探測對方是否有空的自然起手式。" },
        { id: 'ja-dt-pi2', pattern: "よかったら、一緒に [Food/Drink] でも行きませんか？", translation: "如果可以的話，要不要一起去吃/喝個 [某食物/飲料]？", explanation: "保留空間（よかったら）的日系溫婉邀約。" },
        { id: 'ja-dt-pi3', pattern: "その [Clothing/Accessory]、すごく似合ってますね。", translation: "這件 [某衣物/配件]，跟你超級搭的耶。", explanation: "最安全的約會見面讚美套路。" },
        { id: 'ja-dt-pi4', pattern: "どんな [Movie/Music] が好きですか？", translation: "你喜歡哪種 [電影/音樂] 呢？", explanation: "破冰用的興趣探索話題。" },
        { id: 'ja-dt-pi5', pattern: "今日は [Place] でご一緒できて、とても楽しかったです。", translation: "今天能一起在 [某地] 共度，真的非常開心。", explanation: "約會結束後必備的感謝定型句。" },
        { id: 'ja-dt-pi6', pattern: "今まで [Place] に行ったことありますか？", translation: "你至今為止去過 [某地] 嗎？", explanation: "用來探測地點喜好，準備開啟下一次邀約。" },
        { id: 'ja-dt-pi7', pattern: "一緒に [Doing Something] いると、すごく落ち着きます。", translation: "跟你一起 [做某事] 時，我覺得心情特別平靜安穩。", explanation: "在日本文化中非常高級的好感表達（落ち着く = 安心感）。" },
        { id: 'ja-dt-pi8', pattern: "[Contact Info] を交換しませんか？", translation: "我們要不要交換一下 [某種聯絡方式 (如 LINE)] 呢？", explanation: "交友場合索取聯絡方式的邀請。" },
        { id: 'ja-dt-pi9', pattern: "[Hobby] のこと、本当に好きなんですね！", translation: "你真的好喜歡 [某個興趣] 的事情呀！", explanation: "在對方聊得起勁時給予的回饋與肯定。" },
        { id: 'ja-dt-pi10', pattern: "来週、[Event] があるんですけど、一緒に行きませんか？", translation: "下週有個 [某活動]，不知你是否願意一起去呢？", explanation: "提出具體目的地邀約的自然說法。" }
      ]
    }
  },
  default: {
    en: {
      beginner: [
        { id: 'en-def-b1', pattern: "This is a [Noun].", translation: "這是一個 [名詞]。", explanation: "基礎單字學習。" },
        { id: 'en-def-b2', pattern: "I want to [Verb].", translation: "我想要 [做某事]。", explanation: "表達需求。" }
      ],
      'pre-intermediate': [
        { id: 'en-def-pi1', pattern: "I like to [Verb] in my free time.", translation: "我喜歡在空閒時間 [做某事]。", explanation: "介紹自己的興趣。" },
        { id: 'en-def-pi2', pattern: "Could you please [Action]?", translation: "可以請你 [做某事] 嗎？", explanation: "禮貌性的基本請求。" },
        { id: 'en-def-pi3', pattern: "I am originally from [Place].", translation: "我原本來自於 [某地]。", explanation: "自我介紹家鄉或出處。" },
        { id: 'en-def-pi4', pattern: "Do you know how to [Action]?", translation: "你知道要如何 [做某事] 嗎？", explanation: "詢問他人的技能或知識。" },
        { id: 'en-def-pi5', pattern: "I'm sorry, but I [Excuse].", translation: "我很抱歉，但我 [某個藉口/原因]。", explanation: "婉拒的萬用語氣。" }
      ],
      intermediate: [
        { id: 'en-def-i1', pattern: "Could you tell me more about [Topic]?", translation: "您可以多告訴我一些關於 [某主題] 的事嗎？", explanation: "延續話題的實用句型。" },
        { id: 'en-def-i2', pattern: "I have been [V-ing] for [Duration].", translation: "我已經 [做某動作] 長達 [某段時間] 了。", explanation: "表達持續狀態（現在完成進行式）。" }
      ],
      'upper-intermediate': [
        { id: 'en-def-ui1', pattern: "I'm under the impression that [Statement].", translation: "我的印象是 [描述某件事]。", explanation: "委婉表達個人觀點與看法。" }
      ],
      advanced: [
        { id: 'en-def-a1', pattern: "Taking all factors into consideration, [Conclusion].", translation: "綜合評估所有因素後可以得出，[結論]。", explanation: "高階且正式的總結用語。" }
      ]
    },
    ja: {
      beginner: [
        { id: 'ja-def-b1', pattern: "これは [Noun] です。", translation: "這是 [某名詞]。", explanation: "最基礎的指稱。" },
        { id: 'ja-def-b2', pattern: "[Verb] たいです。", translation: "我想要 [做某事]。", explanation: "表達自我意願。" }
      ],
      'pre-intermediate': [
        { id: 'ja-def-pi1', pattern: "暇な時はよく [Verb] します。", translation: "空閒時我經常 [做某事]。", explanation: "描述自己的休閒生活。" },
        { id: 'ja-def-pi2', pattern: "[Action] てもらえませんか？", translation: "能不能請你幫我 [做某動作] 呢？", explanation: "同儕間好用的請託方式。" },
        { id: 'ja-def-pi3', pattern: "出身は [Place] です。", translation: "我的家鄉（出身）是 [某地]。", explanation: "自我介紹必備句。" },
        { id: 'ja-def-pi4', pattern: "[Action] 方法を知っていますか？", translation: "你知道 [做某動作] 的方法嗎？", explanation: "詢問他人技術或方法。" },
        { id: 'ja-def-pi5', pattern: "すみませんが、[Excuse] ので...。", translation: "不好意思，因為 [某個藉口/原因]，所以...", explanation: "日本人婉轉拒絕的藝術，後面常留白不說死。" }
      ],
      intermediate: [
        { id: 'ja-def-i1', pattern: "[Topic] について、もっと詳しく教えていただけますか？", translation: "關於 [某主題]，能請您更詳細地告訴我嗎？", explanation: "引導話題深入的客氣用法。" },
        { id: 'ja-def-i2', pattern: "もう [Duration] ずっと [V-ing] います。", translation: "我已經連續 [做某動作] 長達 [某段時間] 了。", explanation: "表達某個長期持續的狀態。" }
      ],
      'upper-intermediate': [
        { id: 'ja-def-ui1', pattern: "私の印象では、[Statement] という感じです。", translation: "就我的印象而言，感覺是 [某描述]。", explanation: "避開絕對斷言，委婉提出看法的日式溝通精髓。" }
      ],
      advanced: [
        { id: 'ja-def-a1', pattern: "諸般の事情を総合的に勘案しますと、[Conclusion] に至ります。", translation: "綜合考量各種情況後，得出了 [結論]。", explanation: "極致官方、商業信函的高階用字遣詞。" }
      ]
    }
  }
};

export const getPatterns = (langId, roleId, levelId) => {
  const rolePatterns = patternsData[roleId] || patternsData.default;
  const langPatterns = rolePatterns[langId] || rolePatterns['en']; // default to en if missing
  // 嘗試拿指定等級，拿不到則預設拿 pre-intermediate，若連 pre-intermediate 都在該類別缺漏，就拿到空陣列防止報錯。
  return langPatterns[levelId] || langPatterns['pre-intermediate'] || langPatterns['intermediate'] || [];
};
