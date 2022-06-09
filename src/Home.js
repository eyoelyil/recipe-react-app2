import Video from "./assets/video.mp4";

const Home = () => {
  return (
    <div className="home">
      <video src={Video} type="video/mp4" autoPlay loop muted />
      <div className="homebutton">
        <h1>Welcome to the Recipe App</h1>
      </div>
    </div>
  );
};

export default Home;
