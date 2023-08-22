import { useState } from "react";
import { useCreateNewRecipeMutation } from "../../store/api/recipe.api";

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
  });

  const defaultValue = {
    name: "",
    image: "",
  };

  const [createNewRecipe] = useCreateNewRecipeMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewRecipe(recipe).then(() => {
      setRecipe(defaultValue);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Create new recipe</p>
        <label>
          <input
            value={recipe.name}
            onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
            type="text"
            placeholder="Name"
          />
          <input
            value={recipe.image}
            onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
            type="text"
            placeholder="Image"
          />
          <button type="submit">Create</button>
        </label>
      </form>
    </div>
  );
};

export default CreateRecipe;
