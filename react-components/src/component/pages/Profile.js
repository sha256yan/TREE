import React from "react";
import ProfileInfo from "../ProfileInfo";
import "./Profile.css";
//sample ProfileInfo to test. Should be removed during implementation
function Profile() {
  return (
    <div className="profile-wrapper">
      <ProfileInfo
        image="images/sample-profile-picture.png"
        name="Emma Watson"
        description="Emma Watson, in full Emma Charlotte Duerre Watson, (born April 15, 1990, Paris, France), British actress and activist who was perhaps best known for playing the young wizard Hermione Granger in the Harry Potter films. She also garnered attention as a spokesperson for women's equality."
      ></ProfileInfo>
    </div>
  );
}

export default Profile;
