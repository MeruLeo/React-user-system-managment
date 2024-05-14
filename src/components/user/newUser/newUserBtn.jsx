import React from "react";

const NewUserBtn = ({ openModal }) => {
  return (
    <button className="add-user" onClick={openModal}>
      Add new user <i className="fa-solid fa-circle-plus"></i>
    </button>
  );
};

export default NewUserBtn;
