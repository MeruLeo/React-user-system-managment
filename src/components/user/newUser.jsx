import React from "react";
import "../user/user.css";

const NewUser = () => {
  return (
    <>
      <div className="modal">
        <header className="new-user__header">
          <h3>Create new user</h3>
          <button id="close-modal">
            <i class="fa-solid fa-x"></i>
          </button>
        </header>
        <main className="new-user__body">
          <form id="new-user">
            <div class="input-group">
              <input
                required=""
                type="text"
                name="text"
                autocomplete="off"
                class="input"
              />
              <label class="user-label">Name</label>
            </div>
            <div class="input-group">
              <textarea
                required=""
                type="text"
                name="text"
                autocomplete="off"
                class="input"
              />
              <label class="user-label">Bio</label>
            </div>
            <div className="btns">
              <button className="new-user__btn">Add</button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default NewUser;
