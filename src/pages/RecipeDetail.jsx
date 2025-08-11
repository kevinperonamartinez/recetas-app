import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/detail.css";

import { getRecipeDetails } from "../api/recipes"; 

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipe() {
      setLoading(true);
      const data = await getRecipeDetails(id);
      setRecipe(data);
      setLoading(false);
    }
    fetchRecipe();
  }, [id]);

  if (loading) return <p>Cargando receta...</p>;
  if (!recipe) return <p>No se encontró la receta.</p>;

  return (
  <div className="detail-container">
    <Link to="/" className="detail-back-link">
      &larr; Volver
    </Link>
    <h2 className="detail-title">{recipe.title}</h2>
    <img src={recipe.image} alt={recipe.title} className="detail-image" />
    <section className="detail-section">
      <h3>Summary</h3>
      <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
    </section>
    <section className="detail-section">
      <h3>Instructions</h3>
      <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
    </section>
  </div>
);
}

export default RecipeDetail;
