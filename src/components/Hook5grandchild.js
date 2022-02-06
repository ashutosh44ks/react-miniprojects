import { useContext } from "react";
import PassContext from "./Hook5pre";

const Hook5grandchild = () => {
  const pass = useContext(PassContext);
  return <div style={{height: "50x",
  width: "220px",
  backgroundColor: "cornsilk",
  padding: "15px",}}>Your passed password in grandChild is {pass} </div>;
};

export default Hook5grandchild;
