import React from "react";
import Icon from "../Icon";
import {
  faListUl,
  faClock,
  faCircleQuestion,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul
        style={{
          listStyle: "none",
        }}
      >
        <li>
          <Icon icon={faListUl} size="1x" color="white" />
        </li>
        <li>
          {" "}
          <Icon icon={faClock} size="1x" color="white" />
        </li>
      </ul>

      <ul
        style={{
          listStyle: "none",
          marginTop: "29rem",
        }}
      >
        <li>
          {" "}
          <Icon icon={faSliders} size="1x" color="white" />
        </li>
        <li>
          {" "}
          <Icon icon={faCircleQuestion} size="x" color="white" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
