import Hook5child from "./Hook5child";
import PassContext from "./Hook5pre";
/*
React uses state to store data and props to pass data between components. This system breaks down 
when you start to have global state or props that need to be passed to deeply nested components 
far down the hierarchy. This is called prop-drilling.

Context API - allows certain pieces of data that will be available to all components nested inside 
the context with no need to pass this data through each component.
This was used in class components.

Nowadays, in functional components we've a hook for this called useContext
*/


const Hook5 = ({ title }) => {
  const pass = "password123";
  return (
    <div className="grid-item grid-item-6">
      <h1>{title}</h1>
      <div className="container-5">
        <PassContext.Provider value={pass}>
          <Hook5child />
        </PassContext.Provider>
      </div>
    </div>
  );
};

export default Hook5;
