import { useState } from "react";
import RecipeItem from "./recipe-item/RecipeItem";

function App() {
  return (
    <div>
      <RecipeItem recipe={{ 
        id: 1, 
        name: "Плов" }} />
      <RecipeItem recipe={{ 
        id: 2, 
        name: "Жульен" }} />
      <RecipeItem recipe={{ 
        id: 3, 
        name: "Фуагра" }} />
    </div>
  );
}

export default App;
