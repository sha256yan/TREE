import React, { Component } from "react";
import "./ProfileInfo.css";
function ProfileInfo(props) {
  return (
    <>
      <ul className="profile-info-wrapper">
        <li className="profile-pic-container">
          <img
            src={props.image}
            width="300px"
            height="300px"
            className="profile-image"
          ></img>
        </li>
        <li className="profile-desc-container">
          <h1 className="profile-name">{props.name}</h1>
          <p className="profile-desc">{props.description}</p>
        </li>
      </ul>
    </>
  );
}

export default ProfileInfo;
