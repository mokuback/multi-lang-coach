export const getScenarioPatterns = async (langId, version) => {
  try {
    const module = await import(`./${langId}/${version}.json`);
    return module.default || module;
  } catch (error) {
    console.error(`Failed to load scenario patterns for ${langId}-${version}:`, error);
    return null;
  }
};
