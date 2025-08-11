import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { searchRecipes } from "../api/recipes";
import { Link } from "react-router-dom";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    const data = await searchRecipes(query);
    setRecipes(data);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <div className="content-wrapper">
        <h1>Search Recipes</h1>
        <p>Introduce the main ingredient of your idea!</p>
        <p>Example: Chicken</p>
        <SearchBar onSearch={handleSearch} />

        {recipes.length > 0 && (
          <div className="recipes-grid">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                <img src={recipe.image} alt={recipe.title} />
                <h3>{recipe.title}</h3>
                <Link to={`/recipe/${recipe.id}`} className="detail-button">
                  Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
