import React from "react";
import Avatar from "react-avatar";

const User = ({ username, isCurrent }) => {
  return (
    <div className="m-3 d-flex flex-column align-items-center">
      <Avatar name={isCurrent ? "ME" : username} size={60} round="50px" />
      <span>{isCurrent ? `Me (${username})` : username}</span>
    </div>
  );
};

export default User;
