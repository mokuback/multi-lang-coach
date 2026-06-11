import re
import os

path = r"d:\Antigravity_data\src\utils\llmClient.js"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace \` with ` except when it is \`\`\` (which we want to be \`\`\`)
content = content.replace(r"\`", "`")

# Re-escape the inner markdown blocks
content = content.replace("```json", "\\`\\`\\`json").replace("```", "\\`\\`\\`")

# Also fix the \${ variables
content = content.replace(r"\${", "${")

# Fix \n in template strings
content = content.replace(r"\n", "\n")

with open(path, "w", encoding="utf-8") as f:
    f.write(content)
