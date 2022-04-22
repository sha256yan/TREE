import React from "react";
import Button from "./Button" 
import "./AllButtons.css";


function AllButtons() {
  return (
    <div className="all-buttons">
      <Button text="Important Dates"></Button>
      <Button text="More Photos"></Button>
    </div>
  );
}

export default AllButtons;
