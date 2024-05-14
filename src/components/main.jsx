import React, { useState, useEffect } from "react";
import { useContext } from "react";
import UsersContext from "../context/users";
import SearchBar from "./search/search";
import User from "./user/user";
import Users from "./user/users";
import NewUser from "./user/newUser/newUser";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()),
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
    if (!users) return [];

    return users.filter(
      (user) =>
        user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }

  return (
    <>
      <UsersContext.Provider
        value={{
          users: users,
          searchUsersByName: filterUsers(),
          onSearch: handleSearch,
        }}
      >
        <SearchBar />

        <h1 style={{ margin: "1rem" }}>{filterUsers().length} User</h1>

        <Users />

        <NewUser />
      </UsersContext.Provider>
    </>
  );
};

export default Main;
