import { useReducer } from "react";
//It is used for handling complex state interactions (basically an advanced useState)
// it separates out the logic of the state from the component itself
function reducer(count, action) {
  switch (action.type) {
    case "ADD":
      return count + 1;
    case "SUB":
      return count - 1;
    case "RESET":
      return 0;
    case "SET":
      return action.payload.setTo;
    default:
      return count;
  }
}

const Hook6 = ({ title }) => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="grid-item grid-item-7">
      <h1>{title}</h1>
      <div style={{display:"flex", flexDirection:"column"}}>
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "RESET" });
          }}
        >
          Reset to 0
        </button>
        <div className="container6">
          <button
            className="btn btn-add"
            onClick={() => {
              dispatch({ type: "ADD" });
            }}
          >
            +
          </button>
          <div className="element">{count}</div>
          <button
            className="btn btn-sub"
            onClick={() => dispatch({ type: "SUB" })}
          >
            -
          </button>
        </div>
        <button className="btn" onClick={()=> dispatch({type: "SET", payload:{setTo:5}})}>
          {/* Payload is an object that contains any other data items that we need to pass to Reducer
              We can pass it directly as well but using payload object is a convention*/}
          Set to 5
        </button>
      </div>
    </div>
  );
};

export default Hook6;
