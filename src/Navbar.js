import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

const Navbar = () => {
  return (
    <nav className="navbar">
      <p className="logo">Foodi</p>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/create">Add a Recipe</Link>
      </div>
    </nav>
  );
};

export default Navbar;
