import { useState } from "react";
import RecipeItem from "./recipe-item/RecipeItem";
import {BsFillBagHeartFill} from 'react-icons/bs'
import Header from "./header/header";

function App() {
  return (
    <section>
      <Header />
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
    </section>
  );
}

export default App;
