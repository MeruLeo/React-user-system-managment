import React from "react";
import User from "./user";
import UsersContext from "../../context/users";
import { useContext } from "react";

const Users = (props) => {
  const usersContext = useContext(UsersContext);
  return (
    <>
      {usersContext.searchUsersByName.map((user, index) => (
        <User key={index} userName={user.name} userBio={user.bio} />
      ))}
    </>
  );
};

export default Users;
