import Video from "./assets/video.mp4";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <video src={Video} type="video/mp4" autoPlay loop muted />
      </div>
      <div className="hometext">
        <h3>Welcome to the Recipe App</h3>
      </div>

      <div className="homebutton">
        <Link to="/recipes">
          <p>Recipes </p>
        </Link>
      </div>
    </>
  );
};

export default Home;
