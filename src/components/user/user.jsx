import React from "react";
import "../user/user.css";

const User = (props) => {
  const { userName, userBio } = props;
  return (
    <a href="#" className="user">
      <div className="user-avatar">
        <i className="fa-solid fa-user"></i>
      </div>
      <div className="user-info">
        <h2 className="user-info__name">{userName}</h2>
        <p className="user-info__bio">{userBio}</p>
      </div>
    </a>
  );
};

export default User;
