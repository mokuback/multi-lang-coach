export const getScenarioPatterns = async (langId, version) => {
  try {
    const response = await fetch(`/data/scenarioPatterns/${langId}/${version}.json`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to load scenario patterns for ${langId}-${version}:`, error);
    return null;
  }
};
