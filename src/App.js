import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Login from "./Login";
import Recipe from "./Recipe";
import AddRecipe from "./AddRecipe";
import About from "./About"; 

function App() {
  const [recipes, setRecipes] = useState([

  { id: 1, name: "Pasta Carbonara", specialty: "Italian", image: "images.jpg",
    headline: "A Creamy Delight from Rome",
    importance: [
      "A classic Roman dish with rich flavors.",
      "Uses simple yet high-quality ingredients.",
      "Perfect balance of eggs, cheese, pancetta, and pepper.",
      "Loved by pasta enthusiasts worldwide.",
      "Symbolizes authentic Italian home cooking.",
      "Quick to prepare yet incredibly satisfying.",
      "A comfort food that stands the test of time.",
      "Represents Italian culinary tradition."
    ] 
  },
  { id: 2, name: "Chicken Biryani", specialty: "Indian", image: "",
    headline: "A Fragrant Indian Rice Dish",
    importance: [
      "A rich and flavorful dish from the Indian subcontinent.",
      "Combines fragrant basmati rice with marinated chicken.",
      "Slow-cooked for a perfect blend of spices and aroma.",
      "A festive dish enjoyed across South Asia and beyond.",
      "Represents the diversity of Indian cuisine."
    ] 
  },
  { id: 4, name: "Tacos", image: "https://source.unsplash.com/400x300/?tacos",
    headline: "A Mexican Street Food Icon",
    importance: [
      "A versatile dish with countless fillings and flavors.",
      "Deeply rooted in Mexican culture and tradition.",
      "Offers a perfect combination of texture and taste.",
      "Popular worldwide as a quick and delicious meal."
    ] 
  },
  { id: 5, name: "Margherita Pizza", image: "https://source.unsplash.com/400x300/?pizza",
    headline: "The Simplicity of Italian Excellence",
    importance: [
      "A traditional Neapolitan pizza with minimal ingredients.",
      "Symbolizes the colors of the Italian flag.",
      "A perfect harmony of fresh tomatoes, mozzarella, and basil.",
      "Loved globally for its simplicity and taste."
    ] 
  },
  { id: 6, name: "Butter Chicken", image: "https://source.unsplash.com/400x300/?butter-chicken",
    headline: "A Creamy Delight from India",
    importance: [
      "A North Indian curry known for its rich and creamy texture.",
      "Features succulent chicken in a tomato-based sauce.",
      "A staple in Indian restaurants worldwide.",
      "Pairs perfectly with naan or rice."
    ] 
  },
  { id: 7, name: "Pho", specialty: "Vietnamese", image: "https://source.unsplash.com/400x300/?pho",
    headline: "Vietnam’s Comforting Noodle Soup",
    importance: [
      "A fragrant broth-based noodle soup.",
      "A staple of Vietnamese cuisine with rich flavors.",
      "Often enjoyed with fresh herbs and condiments.",
      "A perfect balance of spice and umami."
    ] 
  },
  { id: 8, name: "Ramen", image: "https://source.unsplash.com/400x300/?ramen",
    headline: "A Japanese Noodle Phenomenon",
    importance: [
      "A flavorful dish with rich broths and chewy noodles.",
      "Comes in multiple regional varieties across Japan.",
      "A perfect comfort food with deep umami flavors."
    ] 
  },
  { id: 9, name: "Lasagna", image: "https://source.unsplash.com/400x300/?lasagna",
    headline: "Layers of Italian Comfort",
    importance: [
      "A rich baked pasta dish with layers of cheese and sauce.",
      "A staple in Italian home cooking.",
      "Loved for its deep flavors and satisfying texture."
    ] 
  },
  { id: 10, name: "Paella", image: "https://source.unsplash.com/400x300/?paella",
    headline: "Spain’s Signature Rice Dish",
    importance: [
      "A traditional Spanish dish cooked in a large pan.",
      "A perfect blend of seafood, chicken, and saffron rice.",
      "A communal dish often enjoyed in gatherings."
    ] 
  },
  { id: 11, name: "Burger", image: "https://source.unsplash.com/400x300/?burger",
    headline: "The Global Fast Food Icon",
    importance: [
      "A versatile dish with endless customization.",
      "Symbolizes American fast food culture.",
      "A quick yet satisfying meal loved worldwide."
    ] 
  },
  { id: 12, name: "Dim Sum", image: "https://source.unsplash.com/400x300/?dim-sum",
    headline: "A Delicate Cantonese Tradition",
    importance: [
      "A variety of small dishes served in bamboo baskets.",
      "A staple of Chinese tea culture.",
      "Offers a range of flavors from sweet to savory."
    ] 
  },
  { id: 13, name: "Peking Duck", image: "https://source.unsplash.com/400x300/?peking-duck",
    headline: "A Chinese Culinary Masterpiece",
    importance: [
      "A signature dish of Beijing known for its crispy skin.",
      "Often served with pancakes and hoisin sauce.",
      "A symbol of Chinese fine dining."
    ] 
  },
  { id: 14, name: "Pad Thai", image: "https://source.unsplash.com/400x300/?pad-thai",
    headline: "Thailand’s Signature Stir-Fried Noodles",
    importance: [
      "A sweet, sour, and savory noodle dish.",
      "A staple of Thai street food.",
      "Loved for its bold flavors and fresh ingredients."
    ] 
  },
  { id: 15, name: "Fish and Chips", image: "https://source.unsplash.com/400x300/?fish-chips",
    headline: "A British Pub Classic",
    importance: [
      "A deep-fried fish dish with crispy fries.",
      "A staple in British culture.",
      "Loved for its crunchy texture and satisfying taste."
    ] 
  },
  { id: 16, name: "Cheesecake", image: "https://source.unsplash.com/400x300/?cheesecake",
    headline: "A Sweet and Creamy Delight",
    importance: [
      "A creamy dessert with a rich, velvety texture.",
      "Comes in baked and no-bake varieties.",
      "A favorite treat worldwide."
    ] 
  },
  { id: 17, name: "Churros", image: "https://source.unsplash.com/400x300/?churros",
    headline: "A Crispy and Sugary Treat",
    importance: [
      "A deep-fried dough pastry with a crispy exterior.",
      "Often enjoyed with chocolate or caramel dip.",
      "A staple of Spanish and Latin American cuisine."
    ] 
  }

   
  ]);

  const addNewRecipe = (newRecipe) => {
    setRecipes([...recipes, { ...newRecipe, id: recipes.length + 1 }]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recipes" element={<Recipe recipes={recipes} />} />
        <Route path="/add-recipe" element={<AddRecipe addNewRecipe={addNewRecipe} />} />
        <Route path="/recipe/:id" element={<About recipes={recipes} />} />

      </Routes>
    </Router>
  );
}


export default App;
