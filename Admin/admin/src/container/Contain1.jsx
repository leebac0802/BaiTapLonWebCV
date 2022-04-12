import React from "react";
import Create4 from "../components/Create4";

const Contain1 = () => {
  return (
    <div className="contain1">
      <div className="box-contain1">
        <Create4 text="Avata" type="file"></Create4>
        <Create4 text="Introduce" type="text"></Create4>
        <Create4 text="Name" type="text"></Create4>
        <Create4 text="Age" type="text"></Create4>
        <Create4 text="Experience" type="text"></Create4>
      </div>
      <div className="box-contain1">
        <Create4 text="Country" type="text"></Create4>
        <Create4 text="Location" type="text"></Create4>
        <Create4 text="E-mail" type="text"></Create4>
        <Create4 text="Phone" type="text"></Create4>
        <Create4 text="Freelance" type="text"></Create4>
      </div>
    </div>
  );
};

export default Contain1;
