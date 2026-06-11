export const getPatterns = async (langId, roleId, levelId) => {
  try {
    // 動態載入對應語言與情境的 JSON
    // 依賴打包工具 (Webpack/Vite) 會將 patterns 底下符合條件的 json 包起來
    const module = await import(`./${langId}/${roleId}.json`);
    const langPatterns = module.default || module; // 兼容不同打包工具的 JSON import
    
    return langPatterns[levelId] || langPatterns['pre-intermediate'] || langPatterns['intermediate'] || [];
  } catch (error) {
    console.warn(`Patterns for ${langId}-${roleId} not found, falling back to default.`);
    try {
      const fallbackModule = await import(`./${langId}/default.json`);
      const fallbackPatterns = fallbackModule.default || fallbackModule;
      
      return fallbackPatterns[levelId] || fallbackPatterns['pre-intermediate'] || fallbackPatterns['intermediate'] || [];
    } catch (fallbackError) {
      console.error(`Fallback failed for ${langId}-default:`, fallbackError);
      return [];
    }
  }
};
