<<<<<<< HEAD
//import React from "react";
import "./Main.css"


function Main(props) {
    return (
        <div className="main--comp">
            <h1 className="main--title" >{props.title}</h1>
            <p className="main--content">{props.content}</p>
        </div>
    )
}

export default Main;
=======
import React from "react";
import AllButtons from "./AllButtons";

// main--comp is container
// create new section called main--init
export default function Main(props) {
  const mainTitle = {
    padding: "2.5rem 0.625rem 0rem 2.5rem",

    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "6rem",
    color: "white",
    marginTop: "9.375rem",
  };
  const mainContent = {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "1.25rem",
    color: "white",
    marginBottom: "-25rem",
  };
  const mainComp = {
    width: "100%",
    height: "75%",
    backgroundImage: `url(${props.theimage})`,
    objectFit: "none",
    border: "none",
    marginTop: "-9.438rem",
    paddingBottom: "1.875rem",
  };

  return (
    <section classname="main--comp" style={mainComp}>
      <h1 classname="main--title" style={mainTitle}>
        {props.title}
      </h1>
      <p classname="main--content" style={mainContent}>
        {props.content}
      </p>
      <AllButtons></AllButtons>
    </section>
  );
}
>>>>>>> 81ea3977dfc6b7d215ae7e74cf89d1a7c963a953
