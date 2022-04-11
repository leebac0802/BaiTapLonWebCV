import React from "react";

const IconContact = ({ icon, text, ...rest }) => {
  return (
    <div className="icon" {...rest}>
      <i className={icon}></i>
      <div className="label-icon">{text}</div>
    </div>
  );
};

export default IconContact;
