import React from "react";
import ProfileInfo from "./ProfileInfo";
import LivefeedList from "./LivefeedList";
import { Link } from "react-router-dom";
//to be imported into the Profile page
// The properties for ProfileInfo are {image, name, description}

function PersonType() {
  return (
    <>
      <ProfileInfo></ProfileInfo>
      <LivefeedList></LivefeedList>
      <Link to="/sponsor">
        <LivefeedList></LivefeedList>
      </Link>
    </>
  );
}

export default PersonType;
