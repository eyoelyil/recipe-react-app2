import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import firebase from "./firebase.js";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  // const {
  //   data: recipe,
  //   error,
  //   isPending,
  // } = useFetch("http://localhost:8006/recipes/" + id);
  const ref = firebase.firestore().collection("recipes");

  const fetchRecipe = (id) => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      const recip = items.find((item) => item.id === id);
      setRecipe(recip);
      console.log(items[id], "items");
    });
  };

  useEffect(() => {
    fetchRecipe(id);
  }, []);

  const handleClick = () => {
    // fetch("http://localhost:8006/recipes/" + id, {
    //   method: "DELETE",
    // }).then(() => {
    //   console.log("recipe deleted");
    //   navigate("/recipes");
    // });

    ref
      .doc(id)
      .delete()
      .then(() => {
        console.log("recipe deleted");
        navigate("/recipes");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="recipe-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {recipe && (
        <div style={styles.recipeDiv}>
          <div style={styles.imageDiv}>
            <img src={recipe.flag} alt="" style={styles.flag} />
            <img src={recipe.image} alt="" style={styles.image} />
          </div>
          <div>
            <h2>{recipe.title}</h2>
            <h4>Author {recipe.author}</h4>
            <p>Content: {recipe.content}</p>
            <p>Rating: {recipe.rating}</p>
            <br />
            <button onClick={handleClick}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;

const styles = {
  recipeDiv: {
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    margin: "20px",
  },
  imageDiv: {
    marginRight: "20px",
    width: "50px",
  },
  image: {
    position: "relative",
    width: "20rem",
    height: "20rem",
    borderRadius: "20px",
  },
  flag: {
    position: "absolute",
    width: "4rem",
    height: "4rem",
    borderRadius: "50%",
    zIndex: "1",
  },
};
