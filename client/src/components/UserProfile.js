import React from "react";
import Button from "./shared/Button";

const userProfile = { display: "flex" };

const userName = {
  textAlign: "center",
  marginBottom: "0px",
  marginTop: "0px",
  marginRight: "10px"
};

const UserProfile = ({ user, onLogOut }) => (
  <div style={userProfile}>
    <h1 style={userName}>{user.name}</h1>
    <Button label="Log Out" onClick={onLogOut} />
  </div>
);

export default UserProfile;
