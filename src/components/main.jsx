// Main.js
import React, { useState, useEffect } from "react";
import SearchBar from "./search/search";
import User from "./user/user";
import NewUser from "./user/newUser";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    document.title = `${filteredUsers.length} User(s)`;
  }, [searchTerm, users]);

  function getUsers() {
    fetch("https://react-test-ce1aa-default-rtdb.firebaseio.com/users.json")
      .then((res) => res.json())
      .then((user) => {
        const usersArray = Object.values(user);
        setUsers(usersArray);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  function filterUsers() {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      <h1 style={{ margin: "1rem" }}>{filterUsers().length} User</h1>

      {filterUsers().map((user, index) => (
        <User key={index} userName={user.name} userBio={user.bio} />
      ))}

      <NewUser />

      <button className="add-user">
        Add new user <i className="fa-solid fa-circle-plus"></i>
      </button>
    </>
  );
};

export default Main;
