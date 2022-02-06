import { useState, useMemo, useEffect } from "react";
/*2 common use cases of useMemo:
1. When you want to make a slow function wrap inside useMemo so that doesn't re-compute every single 
   time you render your component and it only computed when you acually need the value from that 
   function since the inputs actually change
2. Whenever you want to make sure the reference of an object or an array is exactly the same as it 
   was the last time you rendered if none of the internal workings changed, you're gonna want to 
   useMemo here to make sure that you only update the reference of that object whenever the actual 
   contents of the object change instead of updating every single time you render*/
   
const Hook3 = ({ title }) => {
  const [number, setNumber] = useState(4);
  const [dark, setDark] = useState(false);
  //const doubleNum = slowFunc(number); //this will run every single time the component renders
  const doubleNum = useMemo(() => {
    return slowFunc(number);
  }, [number]); //this will run only when array element values change
  //i.e. upon re-render due to some other reason other than number value change,
  //it'll not calculate doubleNum again as that's independent of theme
  
  /*const themeStyles = {
    backgroundColor: dark?"black":"white",
    color: dark?"white":"black",
    width:"106px"
  }*/ //it creates a new object (different address) on every render

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      width:"106px"
    }
  }, [dark]);
  
  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]);
  //call useEffect only when there's change in themeStyles, but would run without this dependency 
  //because new themeStyles is a different referential object
  //hence, we've to useMemo themeStyles
  
  
  return (
    <div className="grid-item grid-item-4">
      <h1>{title}</h1>
      <div className="container3" style={{padding:"10px"}}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          style={{width:"100px"}}
        />
        <button onClick={() => setDark(!dark)}>Change Theme</button> I'm fast
        because of useMemo
        <div style={themeStyles}>{doubleNum} I'm slow</div>
      </div>
    </div>
  );
};
function slowFunc(num) {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default Hook3;
