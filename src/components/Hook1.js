import { useState } from "react";
//NOTE - When you update the state, your component re-renders
/* passing ()=>func as argument will make it run only the very first time the component renders
While passing a variable or just func, makes it run everytime the component renders
*/
/*setter can take a function with previous value as argument*/

const Hook1 = ({ title }) => {
  let [element, setElement] = useState(Math.floor(Math.random() * 100));

  const onAdd = () => {
    setElement(p => p+= 1);
  };
  const onSub = (e) => {
    setElement(element -= 1);
  };
  return (
    <div className="grid-item grid-item-1">
      <h1>{title}</h1>
      <div className="container1">
        <button className="btn btn-add" onClick={onAdd}>
          +
        </button>
        <div className="element">{element}</div>
        <button className="btn btn-sub" onClick={() => onSub()}>
          -
        </button>
      </div>
    </div>
  );
};

export default Hook1;
