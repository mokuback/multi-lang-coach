/**
 * Fetch curriculum units for the target language.
 * Data is dynamically loaded from public/data/curriculum/[lang].json
 */
export const fetchCurriculumData = async (targetLanguage: string) => {
  try {
    const response = await fetch(`/data/curriculum/${targetLanguage}.json`);
    if (!response.ok) {
      throw new Error(`Failed to load curriculum for ${targetLanguage}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching curriculum data:", error);
    return []; // Return empty array on failure
  }
};
