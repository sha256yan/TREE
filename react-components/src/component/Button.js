import React from "react";
import "./AllButtons.css";


function Buttons(props) {
  return (
    <button className="button-design"
        onClick={props.onClick}>
        <i className="fa fa-calendar" aria-hidden="true"></i>
        <span className="button-desc">{props.text}</span>
    </button>
  );
}

export default Buttons;
