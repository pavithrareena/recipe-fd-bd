import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Recipe.css";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/recipes");
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/recipes/${id}`);
      setRecipes(recipes.filter((recipe) => recipe._id !== id));
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">🍽 Recipe Finder</div>
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
      <p className="info-text">
        Your recipe will be added to the database and displayed here! 📌
      </p>
      <div className="recipe-container">
        {filteredRecipes.length > 0 ? (
          <div className="recipe-grid">
            {filteredRecipes.map((recipe) => (
              <div key={recipe._id} className="recipe-card">
                <h3 className="hiii">{recipe.name}</h3>
                <p className="jiii">{recipe.specialty}</p>
                <h4 className="ki">{recipe.headline}</h4>
                <h5>{recipe.importance}</h5>
                <Link to={`/recipe/${recipe._id}`}></Link>
                <button onClick={() => handleDelete(recipe._id)}>Delete</button>
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
