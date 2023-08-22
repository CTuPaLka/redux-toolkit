import { useState } from "react";
import RecipeItem from "./recipe-item/RecipeItem";
import { BsFillBagHeartFill } from "react-icons/bs";
import Header from "./header/header";
import User from "./user/User";
import { useGetRecipesQuery } from "../store/api/api";

function App() {
  const { isLoading, data } = useGetRecipesQuery();

  return (
    <section>
      <Header />
      {/* <User /> */}

      {isLoading ? (
        <div>Loading ...</div>
      ) : data ? (
        data.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (
        <div>Not found</div>
      )}

      <div>
        <RecipeItem
          recipe={{
            id: 1,
            name: "Плов",
          }}
        />
        <RecipeItem
          recipe={{
            id: 2,
            name: "Жульен",
          }}
        />
        <RecipeItem
          recipe={{
            id: 3,
            name: "Фуагра",
          }}
        />
      </div>
    </section>
  );
}

export default App;
