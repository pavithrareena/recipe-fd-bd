import React from "react";
import { useParams } from "react-router-dom";
import "./RecipeDetail.css";

const recipeDetails = {
  1: {
    name: "Pasta Carbonara",
    specialty: "A classic Italian pasta dish with a creamy sauce and pancetta.",
    ingredients: ["Pasta", "Eggs", "Cheese", "Pancetta", "Pepper"],
    origin: "Italy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula efficitur diam, a congue nunc pharetra ac...",
  },
  2: {
    name: "Chicken Biryani",
    specialty: "A fragrant and spicy rice dish cooked with marinated chicken.",
    ingredients: ["Chicken", "Rice", "Spices", "Yogurt", "Onions"],
    origin: "India",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula efficitur diam, a congue nunc pharetra ac...",
  },
  3: {
    name: "Sushi",
    specialty: "A Japanese dish with vinegared rice and seafood.",
    ingredients: ["Rice", "Fish", "Seaweed", "Soy Sauce", "Wasabi"],
    origin: "Japan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula efficitur diam, a congue nunc pharetra ac...",
  },
  4: {
    name: "Tacos",
    specialty: "Mexican dish consisting of a folded or rolled tortilla filled with various ingredients.",
    ingredients: ["Tortilla", "Meat", "Cheese", "Salsa", "Lettuce"],
    origin: "Mexico",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula efficitur diam, a congue nunc pharetra ac...",
  },
  // Adding remaining 20 recipes
  5: {
    name: "Ramen",
    specialty: "A Japanese noodle soup with flavorful broth and toppings.",
    ingredients: ["Noodles", "Broth", "Egg", "Meat", "Vegetables"],
    origin: "Japan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula efficitur diam, a congue nunc pharetra ac...",
  },

    6: {
      name: "Butter Chicken",
      specialty: "A rich and creamy Indian curry with tender chicken pieces.",
      ingredients: ["Chicken", "Tomatoes", "Butter", "Cream", "Spices"],
      origin: "India",
      description: "Butter Chicken, or Murgh Makhani, is a popular Indian dish made with chicken simmered in a creamy tomato-based sauce, flavored with aromatic spices.",
    },
    7: {
      name: "Pho",
      specialty: "A Vietnamese noodle soup with rich broth and fresh herbs.",
      ingredients: ["Beef", "Rice Noodles", "Broth", "Herbs", "Spices"],
      origin: "Vietnam",
      description: "Pho is a flavorful Vietnamese soup consisting of broth, rice noodles, herbs, and meat, often beef or chicken, served hot and fresh.",
    },
    8: {
      name: "Ramen",
      specialty: "A Japanese noodle soup with umami-rich broth and toppings.",
      ingredients: ["Noodles", "Broth", "Egg", "Pork", "Seaweed"],
      origin: "Japan",
      description: "Ramen is a popular Japanese dish with wheat noodles served in a flavorful broth, typically topped with sliced pork, egg, and green onions.",
    },
    9: {
      name: "Lasagna",
      specialty: "An Italian pasta dish layered with meat, cheese, and sauce.",
      ingredients: ["Pasta", "Tomato Sauce", "Cheese", "Ground Meat", "Herbs"],
      origin: "Italy",
      description: "Lasagna is a layered pasta dish featuring sheets of pasta, rich meat sauce, creamy béchamel, and melted cheese, baked to perfection.",
    },
    10: {
      name: "Paella",
      specialty: "A Spanish rice dish with seafood, saffron, and spices.",
      ingredients: ["Rice", "Seafood", "Saffron", "Peppers", "Spices"],
      origin: "Spain",
      description: "Paella is a traditional Spanish dish made with saffron-infused rice, a mix of seafood or meat, and a variety of vegetables.",
    },
    11: {
      name: "Burger",
      specialty: "A juicy beef patty sandwiched in a bun with toppings.",
      ingredients: ["Beef", "Bun", "Cheese", "Lettuce", "Tomatoes"],
      origin: "USA",
      description: "The burger is a classic American fast food, consisting of a grilled beef patty inside a bun, often served with cheese, lettuce, and condiments.",
    },
    12: {
      name: "Dim Sum",
      specialty: "A variety of bite-sized dumplings and snacks served in baskets.",
      ingredients: ["Dough", "Meat", "Seafood", "Vegetables", "Sauces"],
      origin: "China",
      description: "Dim Sum refers to small, flavorful Chinese dishes, including dumplings and buns, often served with tea.",
    },
    13: {
      name: "Peking Duck",
      specialty: "A famous Chinese dish with crispy roasted duck and pancakes.",
      ingredients: ["Duck", "Hoisin Sauce", "Pancakes", "Cucumber", "Onions"],
      origin: "China",
      description: "Peking Duck is a delicacy known for its crispy skin and tender meat, often wrapped in thin pancakes with hoisin sauce.",
    },
    14: {
      name: "Pad Thai",
      specialty: "A popular Thai stir-fried noodle dish with sweet and tangy flavors.",
      ingredients: ["Rice Noodles", "Egg", "Tofu", "Peanuts", "Tamarind"],
      origin: "Thailand",
      description: "Pad Thai is a Thai street food favorite, featuring stir-fried noodles with a sweet, sour, and spicy sauce, topped with peanuts and lime.",
    },
    15: {
      name: "Fish and Chips",
      specialty: "A British dish of crispy battered fish served with fries.",
      ingredients: ["Fish", "Potatoes", "Batter", "Vinegar", "Tartar Sauce"],
      origin: "United Kingdom",
      description: "Fish and Chips is a classic British dish featuring battered, deep-fried fish served with crispy potato fries.",
    },
    16: {
      name: "Cheesecake",
      specialty: "A creamy, rich dessert with a biscuit base.",
      ingredients: ["Cream Cheese", "Sugar", "Eggs", "Graham Cracker", "Vanilla"],
      origin: "Greece",
      description: "Cheesecake is a smooth, creamy dessert with a crunchy biscuit base, often topped with fruit or chocolate.",
    },
    17: {
      name: "Churros",
      specialty: "A Spanish fried dough pastry, often served with chocolate.",
      ingredients: ["Flour", "Sugar", "Cinnamon", "Oil", "Chocolate Sauce"],
      origin: "Spain",
      description: "Churros are crispy, deep-fried pastries dusted with cinnamon sugar, typically served with a side of melted chocolate.",
    },
    18: {
      name: "Goulash",
      specialty: "A Hungarian meat stew seasoned with paprika and spices.",
      ingredients: ["Beef", "Paprika", "Onions", "Tomatoes", "Potatoes"],
      origin: "Hungary",
      description: "Goulash is a traditional Hungarian stew made with tender meat, vegetables, and a rich paprika-based broth.",
    },
    19: {
      name: "Ceviche",
      specialty: "A refreshing seafood dish marinated in citrus juices.",
      ingredients: ["Fish", "Lime", "Onions", "Cilantro", "Chili Peppers"],
      origin: "Peru",
      description: "Ceviche is a Peruvian delicacy where fresh seafood is cured in citrus juice and mixed with herbs and chili for a zesty flavor.",
    },
    20: {
      name: "Bulgogi",
      specialty: "A Korean dish featuring marinated grilled beef.",
      ingredients: ["Beef", "Soy Sauce", "Garlic", "Sugar", "Sesame Seeds"],
      origin: "Korea",
      description: "Bulgogi is a Korean barbecue dish made with thinly sliced beef marinated in a sweet and savory sauce before being grilled.",
    },
    21: {
      name: "Bibimbap",
      specialty: "A Korean rice bowl with a mix of vegetables, meat, and egg.",
      ingredients: ["Rice", "Vegetables", "Egg", "Beef", "Gochujang"],
      origin: "Korea",
      description: "Bibimbap is a vibrant Korean dish that consists of warm rice topped with sautéed vegetables, marinated meat, a fried egg, and spicy gochujang sauce.",
    }

  
  // Add remaining 18 recipes in the same format
};

const About = () => {
  const { id } = useParams();
  const recipe = recipeDetails[id];

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
