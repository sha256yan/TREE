import React from "react";
import Newscard from "../Newscard";
import AllButtons from "../AllButtons";
import CryptoLogIn from "../Auth";
import { EmailLogIn } from "../Auth";
import "./Home.css";




function Home() {
  return (
    <span className="home-wrapper">
      <section className="home-container">
        <div className="home-contents">
          <h1 className="home-title">TREE</h1>
          <p className="home-desc">
            A platform created to reduce carbon emission via decentralized
            autonomous forest preservation. Buy your token today and help save
            the Earth!
          </p>
          <ul className="newscard-container">
            <Newscard
              event="DeepOwl Woods tokens now available!"
              duration="24th April 2022-31st May 2022"
              className="newscard-items"
            ></Newscard>
            <Newscard
              event="Governance voting starting soon!"
              duration="26th April 2022-28th April 2022"
              className="newscard-items"
            ></Newscard>
          </ul>
          <div className="test-buttons">
            <CryptoLogIn></CryptoLogIn>
            <EmailLogIn></EmailLogIn>
            <AllButtons></AllButtons>
          </div>
        </div>
      </section>
    </span>
  );
}

export default Home;
