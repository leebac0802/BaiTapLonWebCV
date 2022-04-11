import React from "react";
import IconContact from "../components/IconContact";
const Navication = ({ setSectionCurrent }) => {
  return (
    <div className="nav-container">
      <div className="icon-contact">
        <IconContact
          icon="fa-solid fa-user"
          text="ABOUT"
          onClick={() => setSectionCurrent(0)}
        />
      </div>
      <div className="icon-contact">
        <IconContact
          icon="fa-solid fa-book-open-reader"
          text="SERVICES"
          onClick={() => setSectionCurrent(1)}
        />
      </div>
      <div className="icon-contact">
        <IconContact
          icon="fa-solid fa-graduation-cap"
          text="RESUME"
          onClick={() => setSectionCurrent(2)}
        />
      </div>
      <div className="icon-contact">
        <IconContact
          icon="fa-solid fa-briefcase"
          text="WORK"
          onClick={() => setSectionCurrent(3)}
        />
      </div>
      <div className="icon-contact">
        <IconContact
          icon="fa-solid fa-address-card"
          text="CONTACT"
          onClick={() => setSectionCurrent(4)}
        />
      </div>
    </div>
  );
};

export default Navication;
