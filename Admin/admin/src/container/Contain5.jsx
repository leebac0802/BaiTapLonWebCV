import React from "react";
import Create3 from "../components/Create3";

const Contain5 = () => {
  return (
    <div className="contain5">
      <div>
        <Create3 icon="fa-solid fa-location-dot" text="Address"></Create3>
        <Create3 icon="fa-solid fa-envelope" text="Email"></Create3>
        <Create3 icon="fa-solid fa-phone" text="Phone"></Create3>
        <Create3 icon="icon-social-facebook" text="Facebook"></Create3>
      </div>
      <div>
        <Create3 icon="icon-social-twitter" text="twitter"></Create3>
        <Create3 icon="icon-social-instagram" text="instagram"></Create3>
        <Create3 icon="icon-social-linkedin" text="Linked"></Create3>
        <Create3 icon="icon-social-google" text="Address"></Create3>
      </div>
    </div>
  );
};

export default Contain5;
