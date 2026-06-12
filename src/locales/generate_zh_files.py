import json
import zhconv

# Read en.json
with open(r'D:\Antigravity_data\src\locales\en.json', 'r', encoding='utf-8') as f:
    en_data = json.load(f)

# --- zh-TW.json ---
# Keys are already Traditional Chinese UI text, so values = keys
zh_tw = {key: key for key in en_data.keys()}

with open(r'D:\Antigravity_data\src\locales\zh-TW.json', 'w', encoding='utf-8') as f:
    json.dump(zh_tw, f, ensure_ascii=False, indent=2)

print(f"zh-TW.json: {len(zh_tw)} entries written")

# --- zh-CN.json ---
# Convert Traditional Chinese to Simplified Chinese, then apply cross-strait vocabulary mapping

# Cross-strait vocabulary mapping (Traditional → Simplified, with regional differences)
# Key is the Traditional Chinese character/word to replace AFTER zhconv conversion
# Because zhconv may produce "储存" but we want "存储"
post_vocab_map = {
    # After zhconv converts 儲存 → 储存, we need 存储
    "储存": "存储",
    # After zhconv converts 設定 → 设定, we need 设置  
    "设定": "设置",
    # 軟體 → 软件
    "软件": "软件",  # zhconv already does this
    # 網路 → 网络
    "网络": "网络",  # zhconv already does this
    # 檔案 → 文件
    "文件": "文件",  # zhconv already does this
    # 視窗 → 窗口
    "窗口": "窗口",  # zhconv already does this
    # 印表機 → 打印机
    "打印机": "打印机",  # zhconv already does this
    # 列印 → 打印
    "打印": "打印",  # zhconv already does this
    # 開始 → 开始 (zhconv handles this)
    # 學習 → 学习 (zhconv handles this)
    # 練習 → 练习 (zhconv handles this)
    # 對話 → 对话 (zhconv handles this)
}

# Additional mapping for cases zhconv may not handle well
pre_vocab_map_tw2cn = {
    "儲存": "存储",
    "設定": "设置",
    "軟體": "软件", 
    "網路": "网络",
    "檔案": "文件",
    "視窗": "窗口",
    "印表機": "打印机",
    "列印": "打印",
    "開始": "开始",
    "學習": "学习",
    "練習": "练习",
    "對話": "对话",
    "簡單": "简单",
    "困難": "困难",
    "辦公室": "办公室",
    "不適": "不适",
    "認識": "认识",
    "喜歡": "喜欢",
    "頻繁": "频繁",
    "顧問": "顾问",
    "聯絡": "联系",
    "優異": "优异",
    "數據": "数据",
    "標準": "标准",
    "等級": "等级",
    "版本": "版本",
    "語言": "语言",
    "幫助": "帮助",
    "關於": "关于",
    "關閉": "关闭",
    "開啟": "开启",
    "分鐘": "分钟",
    "說明": "说明",
    "練習模式": "练习模式",
    "訓練": "训练",
    "基礎": "基础",
    "錯誤": "错误",
    "類型": "类型",
    "風格": "风格",
    "類別": "类别",
    "記錄": "记录",
    "對話記錄": "对话记录",
    "隱私權": "隐私权",
    "政": "政",  # 政策 → 政策
    "服務條款": "服务条款",
    "雲端": "云端",
    "資訊": "信息",
    "備註": "备注",
    "理解": "理解",
    "處理": "处理",
    "衝突": "冲突",
    "複雜": "复杂",
    "銷售": "销售",
    "團隊": "团队",
    "設計": "设计",
    "審核": "审核",
    "協議": "协议",
    "條款": "条款",
    "範圍": "范围",
    "辯論": "辩论",
    "保護": "保护",
    "產權": "产权",
    "費用": "费用",
    "管理": "管理",
    "報告": "报告",
    "評估": "评估",
    "價格": "价格",
    "優化": "优化",
    "環境": "环境",
    "討論": "讨论",
    "建議": "建议",
    "回應": "响应",
    "準則": "准则",
    "知識": "知识",
    "組織": "组织",
    "開發": "开发",
    "項目": "项目",
    "規則": "规则",
    "設備": "设备",
    "體驗": "体验",
    "針對": "针对",
    "觀點": "观点",
    "幹部": "干部",
    "舉辦": "举办",
    "衝突": "冲突",
    "調解": "调解",
    "陳述": "陈述",
    "模擬": "模拟",
    "審查": "审查",
    "顧客": "顾客",
    "關係": "关系",
    "態度": "态度",
    "抗議": "抗议",
    "建築": "建筑",
    "產品": "产品",
    "認證": "认证",
    "執行": "执行",
    "監督": "监督",
    "標準": "标准",
    "網站": "网站",
    "查詢": "查询",
    "確認": "确认",
    "內容": "内容",
    "詳細": "详细",
    "進入": "进入",
    "範圍": "范围",
    "顧客": "客户",
    "華": "华",  # 中華 → 中华
    "現": "现",  # 現在 → 现在
    "點": "点",
    "時": "时",
    "學": "学",
    "習": "习",
    "師": "师",
    "寫": "写",
    "動": "动",
    "稱": "称",
    "詢": "询",
    "問": "问",
    "對": "对",
    "話": "话",
    "體": "体",
    "態": "态",
    "嚴": "严",
    "業": "业",
    "務": "务",
    "補": "补",
    "飲": "饮",
    "劇": "剧",
    "極": "极",
    "環": "环",
    "踐": "践",
    "積": "积",
    "庫": "库",
    "預": "预",
    "歷": "历",
    "紀": "纪",
    "導": "导",
    "遊": "游",
    "發": "发",
    "驗": "验",
    "際": "际",
    "報": "报",
    "條": "条",
    "達": "达",
    "過": "过",
    "級": "级",
    "業": "业",
    "讓": "让",
    "門": "门",
    "術": "术",
    "讀": "读",
    "傳": "传",
    "總": "总",
    "結": "结",
    "雙": "双",
    "議": "议",
    "題": "题",
    "評": "评",
    "與": "与",
    "參": "参",
    "來": "来",
    "專": "专",
    "號": "号",
    "機": "机",
    "構": "构",
    "認": "认",
    "為": "为",
    "價": "价",
    "銷": "销",
    "爭": "争",
    "應": "应",
    "對": "对",
    "觀": "观",
    "覺": "觉",
    "協": "协",
    "議": "议",
    "員": "员",
    "組": "组",
    "織": "织",
    "設": "设",
    "備": "备",
    "當": "当",
    "導": "导",
    "監": "监",
    "顧": "顾",
    "問": "问",
    "應": "应",
    "變": "变",
    "歡": "欢",
    "興": "兴",
    "奮": "奋",
    "經": "经",
    "驗": "验",
    "製": "制",
    "創": "创",
    "權": "权",
    "責": "责",
    "違": "违",
    "約": "约",
    "發": "发",
    "揮": "挥",
    "載": "载",
    "輸": "输",
    "關": "关",
    "鍵": "键",
    "郵": "邮",
    "件": "件",
    "帳": "账",
    "戶": "户",
    "幣": "币",
    "匯": "汇",
    "帳": "账",
    "複": "复",
    "雜": "杂",
    "幹": "干",
    "練": "练",
    "選": "选",
    "項": "项",
    "徵": "征",
    "備": "备",
    "編": "编",
    "輯": "辑",
    "廣": "广",
    "告": "告",
    "瀏": "浏",
    "覽": "览",
    "器": "器",
    "違": "违",
    "規": "规",
    "運": "运",
    "作": "作",
    "數": "数",
    "據": "据",
    "導": "导",
    "函": "函",
    "數": "数",
    "遞": "递",
    "歸": "归",
    "屬": "属",
    "權": "权",
    "條": "条",
    "款": "款",
    "爭": "争",
    "議": "议",
    "財": "财",
    "務": "务",
    "損": "损",
    "益": "益",
    "現": "现",
    "金": "金",
    "流": "流",
    "潛": "潜",
    "標": "标",
    "的": "的",
    "評": "评",
    "估": "估",
    "課": "课",
    "程": "程",
    "業": "业",
    "務": "务",
    "營": "营",
    "業": "业",
    "創": "创",
    "業": "业",
    "監": "监",
    "督": "督",
}

# Actually, let me use zhconv for the main conversion and then apply specific overrides
def convert_to_simplified(text):
    """Convert Traditional Chinese text to Simplified Chinese with cross-strait vocabulary adjustments."""
    # First, use zhconv for the bulk conversion
    result = zhconv.convert(text, 'zh-cn')
    
    # Apply vocabulary overrides that zhconv doesn't handle correctly
    # zhconv converts 設定→设定, but we need 设置
    # zhconv converts 儲存→储存, but we need 存储
    overrides_tw = {
        "設定": "设置",
        "儲存": "存储",
        "軟體": "软件",
    }
    
    for tw, cn in overrides_tw.items():
        result = result.replace(tw, cn)
    
    return result

zh_cn = {}
for key, value in en_data.items():
    zh_cn[key] = convert_to_simplified(key)

with open(r'D:\Antigravity_data\src\locales\zh-CN.json', 'w', encoding='utf-8') as f:
    json.dump(zh_cn, f, ensure_ascii=False, indent=2)

print(f"zh-CN.json: {len(zh_cn)} entries written")

# Verify a few entries
print("\n--- Sample verifications ---")
cn_keys = list(zh_cn.keys())
for i in range(min(5, len(cn_keys))):
    k = cn_keys[i]
    print(f"  TW: {k[:30]:30s} → CN: {zh_cn[k][:30]:30s}")

print("\nDone!")
