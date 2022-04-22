import React from "react";

function Newscard(props) {
  return (
    <list>
      <section className="newscard-wrapper">
        <p className="newscard-title">{props.event}</p>
        <p className="newscard-duration">{props.duration}</p>
      </section>
    </list>
  );
}

export default Newscard;
