import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddRecipe.css";

const AddRecipe = ({ addNewRecipe }) => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: "",
    specialty: "",
    ingredients: "",
    origin: "",
    description: "",
    image:"", 
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewRecipe(recipe); 
    navigate("/recipes");
  };

  return (
    <div className="add-recipe-container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Recipe Name" onChange={handleChange} required />
        <input type="text" name="specialty" placeholder="Specialty" onChange={handleChange} required />
        <input type="text" name="ingredients" placeholder="Ingredients (comma separated)" onChange={handleChange} required />
        <input type="text" name="origin" placeholder="Origin" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required></textarea>
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
