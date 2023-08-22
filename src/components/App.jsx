import { useState } from "react";
import RecipeItem from "./recipe-item/RecipeItem";
import { BsFillBagHeartFill } from "react-icons/bs";
import Header from "./header/header";
import User from "./user/User";
import { useGetRecipesQuery } from "../store/api/api";
import CreateRecipe from "./create-recipe/CreateRecipe";

const userId = 1;

function App() {
  const { isLoading, data } = useGetRecipesQuery(
	// такие conditions в хуках позволяют не выводить какие то данные, если срабатывает условие в нем
	undefined, {
    // ! конкретно данное выражение skip принимает условие, при котором запрос useGetRecipesQuery выполнятся не будет. Там также много разных других выражений]
    skip: !userId,
  });

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
