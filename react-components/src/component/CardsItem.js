import React, { useState } from "react";



function CardsItem(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <li>
      <div className="card-wrapper" onClick={handleClick}>
        <img
          src={props.src}
          alt="card pictures"
          width="300"
          height="300"
          className="card-image"
        ></img>
        <p className="carditem-statement">{props.text}</p>
        <p className="carditem-desc">{click ? props.statement : ""}</p>
      </div>
    </li>
  );
}

export default CardsItem;
