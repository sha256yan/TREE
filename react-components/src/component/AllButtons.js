import React from "react";
import "./AllButtons.css";
function AllButtons() {
  return (
    <div className="all-buttons">
      <btn className="button-design">
        <i class="fa fa-calendar" aria-hidden="true"></i>
        <span className="button-desc">Important Dates</span>
      </btn>
      <btn className="button-design">
        <i class="fas fa-image"></i>
        <span className="button-desc">More Photos</span>
      </btn>
    </div>
  );
}

export default AllButtons;
