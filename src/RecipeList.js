import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import firebase from "./firebase.js";

const RecipeList = () => {
  // const { data, isPending, error } = useFetch("http://localhost:8006/recipes");

  const [recipes, setRecipes] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const ref = firebase.firestore().collection("recipes");

  const getRecipes = () => {
    setIsPending(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setRecipes(items);
      console.log(items, "items");
      setIsPending(false);
    });
  };

  useEffect(() => {
    getRecipes();
    console.log(recipes, "recipes");
  }, []);

  return (
    <div className="recipe-list">
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        List of recipes
      </h2>
      {error && <div className="error">{error}</div>}
      {isPending && <div>Loading...</div>}
      {/* {data && <RecipeList recipes={data} title="All recipes" />} */}
      <div className="container">
        {recipes &&
          recipes.map((recipe) => (
            <Wrapper key={recipe.id}>
              {/* <div className="recipe-preview" key={recipe.id}> */}
              <Link to={`/recipes/${recipe.id}`} className="cardLink">
                <img
                  src={recipe.image}
                  alt="image"
                  style={{
                    resizeMode: "stretch",
                    width: "100%",
                    height: "15rem",
                    margin: "0 auto",
                  }}
                />
                <h4>{recipe.title}</h4>
                <p>Rating {recipe.rating}</p>
              </Link>
              {/* </div> */}
            </Wrapper>
          ))}
      </div>
    </div>
  );
};

const Wrapper = styled.div`
  min-height: 20rem;
  max-width: 20rem;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: #f5f5f5;
  text-decoration: none;
`;

export default RecipeList;
