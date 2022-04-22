import React from "react";
import CardsItem from "./CardsItem";
import "./Organisations.css";
function Organisations() {
  return (
    <section>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardsItem
              src="images/wildlifealliance.jpg"
              text="7 tokens allocated"
              statement="Wildlife Alliance rangers patrol 1,400,000 hectares of the Cardamom Rainforest Landscape in partnership with the Royal Government of Cambodia, making the Cardamom Mountains Rainforest the best protected rainforest in Southeast Asia."
            ></CardsItem>
            <CardsItem
              src="images/coolearth.png"
              text="8 tokens allocated"
              statement=" Cool Earth is currently working alongside 13 partners to protect nearly 100,000 hectares of rainforest across 3 continents.[10] The organisation is currently active in 6 countries: Cambodia, Cameroon, the Democratic Republic of Congo, Mozambique, Papua New Guinea, and Peru; and has previously finished work in Brazil and Ecuador."
              className="card-two"
            ></CardsItem>
          </ul>
          <ul className="cards__items">
            <CardsItem
              src="images/ancientforest.jpg"
              text="1 token allocated"
              statement=" The approximately 1000-year old Red Creek Fir is 73.8 m tall and 4.2m wide, is located near Port Renfrew on Vancouver Island and is one of the largest Douglas-fir in the world. Ancient Forest Alliance had discovered new logging tape within a few hundred meters of the Red Creek Fir and the Red Creesk Fir was immediately protected from logging."
            ></CardsItem>
            <CardsItem
              src="images/haitinationaltrust.png"
              text="2 tokens allocated"
              statement=" Haiti National Trust works with the government of Haiti to assist in the protection of their existing national parks, and to help establish new parks."
            ></CardsItem>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Organisations;
