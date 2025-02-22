import React from "react";
import { useParams } from "react-router-dom";
import "./RecipeDetail.css";

const About = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id.toString() === id);

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div className="about-container">
      <h1>{recipe.name}</h1>
      <h2>Specialty</h2>
      <p>{recipe.specialty}</p>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Origin</h2>
      <p>{recipe.origin}</p>
      <h2>Details</h2>
      <p>{recipe.description}</p>
    </div>
  );
};

export default About;
