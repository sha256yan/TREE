import React from "react";
import "./AllButtons.css";

function Buttons(props) {
  return (
    <button className="button-design" onClick={props.onClick}>
      <span className="button-desc">{props.text}</span>
    </button>
  );
}

export default Buttons;
