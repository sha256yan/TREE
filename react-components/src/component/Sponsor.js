import React from "react";
import ProfileInfo from "./ProfileInfo";
import LivefeedList from "./LivefeedList";
//to be imported into the Profile page
// The properties for ProfileInfo are {image, name, description}
export default function Sponsor() {
  return (
    <div>
      <ProfileInfo />
      <LivefeedList></LivefeedList>
      <LivefeedList></LivefeedList>
    </div>
  );
}
