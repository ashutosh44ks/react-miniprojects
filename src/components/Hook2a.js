import { useState, useEffect } from "react";

const Hook2a = ({ title }) => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(()=>{
        window.addEventListener('resize', resizeSetter)
        return () => {
            window.removeEventListener('resize', resizeSetter); 
        } //saving memory by removing event listener just before re-render
        //otherwise, event listeners will keep on adding upon every render which will consume memory
    }, [width]);
    const resizeSetter = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

  return (
    <div className="grid-item grid-item-3">
      <h1>{title}</h1>
      <div className="container2a" style={{padding:"10px"}}>
        current window width = {width} <br/>
        current window height = {height}
      </div>
    </div>
  );
};

export default Hook2a;
