import React from "react";
import Video from "./assets/video.mp4";

const Home = () => {
  return (
    <div className="home">
      <video src={Video} type="video/mp4" autoPlay loop muted />
      <h1></h1>
    </div>
  );
};

export default Home;
