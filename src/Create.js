import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import firebase from "./firebase";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [countries, setCountries] = useState([]);
  const [flag, setFlag] = useState("");
  const [content, setContent] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const recipe = {
  //     title,
  //     author,
  //     image,
  //     rating,
  //     flag,
  //     content,
  //   };

  //   setIsPending(true);

  //   fetch("http://localhost:8006/recipes", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(recipe),
  //   }).then(() => {
  //     console.log("recipe created");
  //     setIsPending(false);
  //     navigate("/recipes");
  //   });
  // };
  const ref = firebase.firestore().collection("recipes");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    // = collection(firestore, 'posts')

    // if(!post.author || !post.title){
    //   setMessage('All fields are requiered')
    //   setTimeout(() => setMessage(''), 3000)
    //   return
    // }
    const recipe = {
      id: uuidv4(),
      title,
      author,
      image,
      rating,
      flag,
      content,
    };

    ref
      .doc(recipe.id)
      .set(recipe)
      .then(() => {
        console.log("recipe created");
        setIsPending(false);
        navigate("/recipes");
      })
      .catch((err) => {
        console.log("error adding ", err);
      });
    //  setAuthor('')
    //  setTitle('')
  };

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(function (response) {
        setCountries(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleFlag = (e) => {
    let selectedFlag = countries.filter(
      (country) => country.name.common === e.target.value
    )[0].flags.png;
    setFlag(selectedFlag);
    console.log(selectedFlag);
  };

  return (
    <div className="create">
      <h2>Add a new recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Name of recipe</label>
        <input
          type="text"
          name="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Author</label>
        <input
          type="text"
          name="author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Country</label>
        <select name="country" id="country" onChange={handleFlag}>
          <option value="">Select country</option>
          {countries
            .map((country) => (
              <option key={country.name.common} value={country.name.common}>
                {country.name.common}
              </option>
            ))
            .sort(function (a, b) {
              if (a > b) {
                return 1;
              }
              if (a < b) {
                return -1;
              }
              return 0;
            })}
        </select>
        <label>Image URL</label>
        <input
          type="text"
          name="image"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Rating</label>
        <input
          type="text"
          name="rating"
          required
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <label>Description</label>
        <textarea
          name="content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {!isPending && <button>Add Recipe</button>}
        {isPending && <button disabled>Adding recipe...</button>}
      </form>
    </div>
  );
};

export default Create;
