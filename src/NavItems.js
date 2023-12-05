import SearchBarWithUser from "./components/SearchBarWithUser";
import UserImage from "../src/assets/images/UserImage.png";
import Icon from "./Icon";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const NavItems = () => {
  return (
    <>
      <div className="divider">
        <SearchBarWithUser />
      </div>
      <div
        className="divider"
        style={{
          display: "flex",
        }}
      >
        <div className="patient-list">Patient List</div>
        <div className="patient-list-nav-items-right">
          <span style={{ marginReft: "1rem" }}>
            <img
              alt="userImage"
              src={UserImage}
              style={{
                width: "20px",
                paddingTop: "17px",
              }}
            ></img>
          </span>
          <span
            style={{
              marginLeft: "0.4rem",
            }}
          >
            <h4>5:13:34</h4>
          </span>
          <div className="stop-icon">
            <div className="square-box"></div>
          </div>
          <span className="fa-ellipses-icon">
            <Icon icon={faEllipsis} size="1x" color="black" />
          </span>
        </div>
      </div>
    </>
  );
};

export default NavItems;
