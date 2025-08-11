import axios from "axios";

const API_KEY = "6ab1f7ec36c4435dbd89beb313f21ed3"; 
const BASE_URL = "https://api.spoonacular.com/recipes";

export const searchRecipes = async (query) => {
  try {
    const res = await axios.get(`${BASE_URL}/complexSearch`, {
      params: {
        apiKey: API_KEY,
        query,
        number: 9, 
      },
    });
    return res.data.results;
  } catch (error) {
    console.error("Error buscando recetas:", error);
    return [];
  }
};
export const getRecipeDetails = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/${id}/information`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error obteniendo detalles de la receta:", error);
    return null;
  }
};
