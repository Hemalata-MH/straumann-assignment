import React, { useState } from "react";
import UserImage from "../assets/images/DrMorgan.jpeg";
import Icon from "../Icon";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBarWithUser = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar-with-user">
      <span className="search-icon">
        {" "}
        <Icon icon={faMagnifyingGlass} size="1x" color="gray" />
      </span>
      <input
        type="text"
        placeholder="Search anything..."
        className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="user-section">
        <div className="user-icon">
          <img
            alt="userimage"
            src={UserImage}
            style={{
              width: "40px",
              paddingTop: "2px",
            }}
          ></img>
        </div>
        <span className="user-name">Dr. Morgan</span>
        <span className="arrow-icon"></span>
      </div>
    </div>
  );
};

export default SearchBarWithUser;
