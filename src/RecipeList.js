import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import styled from "styled-components";

const RecipeList = () => {
  const { data, isPending, error } = useFetch("http://localhost:8006/recipes");

  return (
    <div className="recipe-list">
      <h2>List of recipes</h2>
      {error && <div className="error">{error}</div>}
      {isPending && <div>Loading...</div>}
      {/* {data && <RecipeList recipes={data} title="All recipes" />} */}
      {data &&
        data.map((recipe) => (
          <div className="recipe-preview" key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h2>{recipe.title}</h2>
              <p>Choosen by {recipe.author}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default RecipeList;
