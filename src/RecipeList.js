import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import styled from "styled-components";

const RecipeList = () => {
  const { data, isPending, error } = useFetch("http://localhost:8006/recipes");

  return (
    <div className="recipe-list">
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        List of recipes
      </h2>
      {error && <div className="error">{error}</div>}
      {isPending && <div>Loading...</div>}
      {/* {data && <RecipeList recipes={data} title="All recipes" />} */}
      <div className="container">
        {data &&
          data.map((recipe) => (
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
                <p>{recipe.title}</p>
                <p>{recipe.rating}</p>
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
