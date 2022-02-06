import { useState } from "react";

/*useCallback works nearly identically to useMemo since it will cache a result based on an array of 
dependencies, but useCallback is used specifically for caching functions instead of caching values.*/

const Hook7 = ({ title }) => {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);
  const theme = {
    backgroundColor: dark?"black":"white",
    color: dark?"white":"black"
  }
  return (
    <div className="grid-item grid-item-8">
      <h1>{title}</h1>
      <div className="container7">
          <input type="number" value={num} onChange={(e)=>{
            setNum(e.target.value)
          }} placeholder="Enter a number"/>
          <div className="theme-container" style={theme}>
            <button className="btn" onClick={()=>setDark(!dark)}>Toggle Theme</button>
            <div>{num}</div>
            <div>{Number(num)+1}</div>
            <div>{Number(num)+2}</div>
          </div>
      </div>
    </div>
  );
};

export default Hook7;
