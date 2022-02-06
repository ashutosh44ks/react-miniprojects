import { useEffect, useState , useRef} from "react";
//It stores values across the different renders e.g. counting renders, storing previous values
//Also used as DOM (reference elements inside HTML, each element in document has a ref attribute for this)

const Hook4 = ({ title }) => {
  const [name, setName] = useState("");
  /*
  let [renderCount, setRenderCount] = useState(0);
  useEffect(() => {
    console.log("rendered");
    setRenderCount((renderCount += 1));
  });
  //This will run infinitely
  //because when setter sets something inside useEffect, it causes a render
  //this repeats over and over again
  */
  
  const renderCount = useRef(0);    //returns an object {current:"argument"}
  useEffect(()=>{
      renderCount.current+=1;
  })


  const prevName = useRef("");
  useEffect(()=>{
      prevName.current = name;
  }, [name]);

  const inputRef = useRef();    //is equivalent to const inputRef = document.querySelector("input");
  const focus = () => {
      inputRef.current.focus(); //is equivalent to inputRef.focus();
  }
  //NOTE - Avoid using Ref to update states directly

  return (
    <div className="grid-item grid-item5">
      <h1>{title}</h1>
      <div className="container4">
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          ref={inputRef}
        />
        <div>My name is {name}</div>
        <div>My prevName is {prevName.current}</div>
        <div>I rendered {renderCount.current} times</div>
        <button className="btn" onClick={focus}>Focus on Input</button>
      </div>
    </div>
  );
};

export default Hook4;
