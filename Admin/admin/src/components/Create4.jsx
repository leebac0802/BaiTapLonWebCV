import React from "react";

const Create4 = ({ text, type }) => {
  return (
    <div className="create4">
      <span>{text}</span>
      <h6>:</h6>
      <input type={type} />
    </div>
  );
};

export default Create4;
