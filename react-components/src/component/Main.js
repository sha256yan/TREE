import React from "react";
import AllButtons from "./AllButtons";

// main--comp is container
// create new section called main--init
export default function Main(props) {
  const mainTitle = {
    padding: "2.5rem 0.625rem 0rem 2.5rem",

    fontFamily: "Abel",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "6rem",
    color: "white",
    marginTop: "9.375rem",
  };
  const mainContent = {
    paddingLeft: "3.125rem",
    fontFamily: "Abel",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "1.25rem",
    color: "white",
    marginBottom: "-25rem",
  };
  const mainComp = {
    width: "100%",
    height: "28.125rem",
    backgroundImage: `url(${props.theimage})`,
    objectFit: "none",
    border: "none",
    marginTop: "-9.438rem",
    paddingBottom: "1.875rem",
  };

  return (
    <section className="main--comp" style={mainComp}>
      <h1 classname="main--title" style={mainTitle}>
        {props.title}
      </h1>
      <p className="main--content" style={mainContent}>
        {props.content}
      </p>
    </section>
  );
}
