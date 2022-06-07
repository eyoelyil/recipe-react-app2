import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: recipe,
    error,
    isPending,
  } = useFetch("http://localhost:8006/recipes/" + id);

  const handleClick = () => {
    fetch("http://localhost:8006/recipes/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log("recipe deleted");
      navigate("/recipes");
    });
  };

  return (
    <div className="recipe-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {recipe && (
        <article>
          <h2>{recipe.title}</h2>
          <p>Written by {recipe.author}</p>
          <div>Content: {recipe.content}</div>
          <div>Rating: {recipe.rating}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default RecipeDetails;
