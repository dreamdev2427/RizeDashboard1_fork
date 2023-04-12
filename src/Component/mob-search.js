import React, { useState } from "react";
import searchIcon from "../assets/images/icons/search.svg";

function Search() {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleSearchIconClick = () => {
    setShowSearchInput(true);
  };

  return (
    <div className="rize-header-search">
      <img
        className="rize-header-search-icon"
        src={searchIcon}
        style={{ paddingLeft: 20 }}
        onClick={handleSearchIconClick}
      />
      {showSearchInput && (
        <input
          className="rize-header-search-input"
          type="text"
          placeholder="Search..."
        />
      )}
    </div>
  );
}

export default Search;
