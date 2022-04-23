import React from "react";
import "./Column";
function Column(props) {
  return <div className="column-wrapper">{props.content}</div>;
}

export default Column;
