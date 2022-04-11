import React from "react";
import Creates from "../components/Creates";

const Contain3 = () => {
  return (
    <div className="contain1">
      <Creates
        icon="fa-solid fa-graduation-cap"
        text="EDUCATION"
        text1="Bsc In CSE - "
        text2="Higher Secondary School - "
        text3="Secondary School - "
      ></Creates>
      <Creates
        icon="fa-solid fa-briefcase"
        text="EXPERIENCE"
        text1="Experiance-1"
        text2="Experiance-2"
        text3="Experiance-3"
      ></Creates>
    </div>
  );
};

export default Contain3;
