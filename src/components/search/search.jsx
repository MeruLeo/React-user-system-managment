// search.js
import React from "react";
import "../search/search.css";

const SearchBar = ({ onSearch }) => {
  return (
    <>
      <div className="input-wrapper">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search to find user"
          onChange={onSearch}
        />
      </div>
    </>
  );
};

export default SearchBar;
