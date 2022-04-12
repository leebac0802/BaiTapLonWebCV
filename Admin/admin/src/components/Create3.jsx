import React from "react";

const Create3 = ({ icon, text }) => {
  return (
    <div className="create3">
      <i className={icon}></i>
      <span>{text}</span>
      <input type="text" />
    </div>
  );
};

export default Create3;
