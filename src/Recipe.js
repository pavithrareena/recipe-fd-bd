import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Recipe.css";

const Recipe = ({ recipes }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();


  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );
<style>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Oswald:wght@200..700&family=Playwrite+PL:wght@100..400&display=swap');
</style>
  return (
    <div>
      {}
      <nav className="navbar">
        <div className="logo">🍽️ Recipe Finder</div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for a recipe..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="add-recipe-btn" onClick={() => navigate("/add-recipe")}>
          ➕ Add Recipe
        </button>
      </nav>

      <div className="recipe-container">
        {filteredRecipes.length > 0 ? (
          <div className="recipe-grid">
            {filteredRecipes.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
               
                <h3 className="hiii">{recipe.name}</h3>
                <p className="jiii">{recipe.specialty}</p>
                <h7 className = "ki">{recipe.headline}</h7>
                <h8>{recipe.importance}</h8>

                <Link to={`/recipe/${recipe.id}`}>
                  <button>View Recipe</button>
                  
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-results">No recipes found!</p>
        )}
      </div>
    </div>
  );
};

export default Recipe;
