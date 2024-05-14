import React from "react";
import "../search/search.css";
import UsersContext from "../../context/users";
import { useContext } from "react";

const SearchBar = ({ onSearch }) => {
  const usersContext = useContext(UsersContext);

  return (
    <>
      <div className="input-wrapper">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search to find user"
          onChange={usersContext.onSearch}
        />
      </div>
    </>
  );
};

export default SearchBar;
