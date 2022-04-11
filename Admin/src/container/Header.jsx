import React from "react";
import Imgs from "../imgs/logo.png";

const Header = () => {
  return (
    <div>
      <div className="logo">
        <img src={Imgs} alt="" />
      </div>
      <div className="box-header">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Admin</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
