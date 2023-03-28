import React, { useState } from "react";
import { ReactComponent as Searchbutton } from "../images/Search.svg";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input
        onChange={inputHandler}
        type="text"
        placeholder="Search in English"
      />
      <button onClick={search}>
        <Searchbutton className="searchIcon" />
      </button>
    </div>
  );
};

export default Search;
