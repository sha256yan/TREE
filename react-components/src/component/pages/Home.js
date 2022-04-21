import React from "react";
import AllButtons from "../AllButtons";
import "./Home.css";
function Home() {
  return (
    <section className="home-container">
      <div className="home-contents">
        <h1 className="home-title">TREE</h1>
        <p className="home-desc">
          A platform created to reduce carbon emission via decentralized
          autonomous forest preservation. Buy your token today and help save the
          Earth!
        </p>
        <AllButtons></AllButtons>
      </div>
    </section>
  );
}

export default Home;
