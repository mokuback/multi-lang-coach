export const getScenarioPatterns = async (version) => {
  try {
    const response = await fetch(`/data/scenarioPatterns/${version}.json`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to load scenario patterns for ${version}:`, error);
    return null;
  }
};
