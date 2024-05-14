import React from "react";
import "../user.css";
import { useState } from "react";

const NewUserModal = ({ visible, setVisible }) => {
  if (!visible) {
    document.querySelector(".modal").style.display = "block";
  }

  const postUser = (name, bio) => {
    const newUserInput = {
      name: name,
      bio: bio,
    };

    fetch("https://react-test-ce1aa-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserInput),
    }).then((response) => {
      console.log(response);
    });
  };

  const closeModal = () => {
    document.querySelector(".modal").style.display = "none";
    let newVisible = !visible;
    setVisible(newVisible);
  };

  const addUser = (e) => {
    e.preventDefault();

    const username = document.getElementById("userName").value;
    const userbio = document.getElementById("userBio").value;

    postUser(username, userbio);

    closeModal();
  };

  return (
    <>
      <div className="modal">
        <header className="new-user__header">
          <h3>Create new user</h3>
          <button id="close-modal" onClick={closeModal}>
            <i className="fa-solid fa-x"></i>
          </button>
        </header>
        <main className="new-user__body">
          <form id="new-user">
            <div className="input-group">
              <input
                required=""
                type="text"
                name="text"
                autocomplete="off"
                className="input"
                id="userName"
              />
              <label className="user-label">Name</label>
            </div>
            <div className="input-group">
              <textarea
                required=""
                type="text"
                name="text"
                autocomplete="off"
                className="input"
                id="userBio"
              />
              <label className="user-label">Bio</label>
            </div>
            <div className="btns">
              <button className="new-user__btn" onClick={addUser}>
                Add
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default NewUserModal;
