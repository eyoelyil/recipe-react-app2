import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [content, setContent] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = {
      title,
      author,
      rating,
      content,
    };

    setIsPending(true);

    fetch("http://localhost:8006/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe),
    }).then(() => {
      console.log("recipe created");
      setIsPending(false);
      navigate("/recipes");
    });
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
