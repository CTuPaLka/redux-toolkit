import { useState } from "react";
import RecipeItem from "./recipe-item/RecipeItem";
import { BsFillBagHeartFill } from "react-icons/bs";
import Header from "./header/header";
import User from "./user/User";
import { useGetRecipesQuery } from "../store/api/api";
import CreateRecipe from "./create-recipe/CreateRecipe";

function App() {
  const { isLoading, data } = useGetRecipesQuery();

  return (
    <section>
      <Header />
      <CreateRecipe />
      {/* <User /> */}

      {isLoading ? (
        <div>Loading ...</div>
      ) : data ? (
        data.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (
        <div>Not found</div>
      )}
    </section>
  );
}

export default App;
