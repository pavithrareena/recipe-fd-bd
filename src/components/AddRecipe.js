import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Typography, TextField, Button, Box, Paper } from "@mui/material";

const AddRecipe = ({ addNewRecipe }) => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: "",
    specialty: "",
    ingredients: "",
    origin: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/recipes", recipe);
      addNewRecipe(recipe);
      navigate("/recipes");
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: "550px",
          padding: "30px",
          borderRadius: "12px",
          textAlign: "center",
          backgroundColor: "#1E1E1E",
          color: "#fff",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "#FFA500" }}>
          Add a New Recipe
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: 390 }}>
          {[
            { label: "Recipe Name", name: "name" },
            { label: "Specialty", name: "specialty" },
            { label: "Ingredients (comma separated)", name: "ingredients" },
            { label: "Origin", name: "origin" },
            { label: "Description", name: "description", multiline: true, rows: 4 },
          ].map(({ label, name, multiline, rows }) => (
            <TextField
              key={name}
              fullWidth
              label={label}
              name={name}
              value={recipe[name]}
              onChange={handleChange}
              required
              multiline={multiline}
              rows={rows}
              sx={{ mb: 2, input: { color: "#fff" }, label: { color: "#FFA500"  }}}
            />
          ))}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              background: "#FFA500",
              color: "#fff",
              fontSize: "1.1rem",
              padding: "10px",
              borderRadius: "18px",
              '&:hover': { background: "#FF8C00" },
            }}
          >
            Submit Recipe
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AddRecipe;
