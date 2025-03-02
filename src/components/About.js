import React from "react";
import { useParams } from "react-router-dom";

const About = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r._id === id);

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <p>{recipe.ingredients}</p>
      <p>{recipe.origin}</p>
    </div>
  );
};

export default About;