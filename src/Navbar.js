import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <FontAwesomeIcon icon="fa-solid fa-plate-utensils" />
      </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/create">Add a Recipe</Link>
      </div>
    </nav>
  );
};

export default Navbar;
