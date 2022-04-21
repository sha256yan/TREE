import React from "react";
import AllButtons from "./AllButtons";

// main--comp is container
// create new section called main--init
export default function Main(props) {
  const mainTitle = {
    padding: "40px 10px 0px 40px",

    fontFamily: "Abel",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "96px",
    color: "white",
    marginTop: "150px",
  };
  const mainContent = {
    paddingLeft: "50px",
    fontFamily: "Abel",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    color: "white",
    marginBottom: "-400px",
  };
  const mainComp = {
    width: "100%",
    height: "75%",
    backgroundImage: `url(${props.theimage})`,
    objectFit: "none",
    border: "none",
    marginTop: "-151px",
    paddingBottom: "30px",
  };
  const myButton = {
    marginTop: "-400px",
  };

  return (
    <section classname="main--comp" style={mainComp}>
      <h1 classname="main--title" style={mainTitle}>
        {props.title}
      </h1>
      <p classname="main--content" style={mainContent}>
        {props.content}
      </p>
      <AllButtons style={myButton}></AllButtons>
    </section>
  );
}
