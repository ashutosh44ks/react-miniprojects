import React from "react";
import Hook5grandchild from "./Hook5grandchild";

const Hook5child = () => {
  return (
    <div
      style={{
        height: "50x",
        width: "250px",
        backgroundColor: "gainsboro",
        padding: "15px",
      }}
    >
      child
      <Hook5grandchild />
    </div>
  );
};

export default Hook5child;
