import {useLayoutEffect} from "react";
/*  In useEffect the code in the hook is run asynchronously after React renders the component.
    This means the code for this hook can run after the DOM is painted to the screen.
    
    The useLayoutEffect hook runs synchronously directly after React calculates the DOM changes 
    but before it paints those changes to the screen.  */

/* The biggest reason for using useLayoutEffect is when the code being run directly modifies the DOM 
    in a way that is observable to the user.
For example, if I needed to change the background color of a DOM element as a side effect it would be 
best to use useLayoutEffect since we are directly modifying the DOM and the changes are observable to 
the user. If we were to use useEffect we could run into an issue where the DOM is painted before the 
useEffect code is run. This would cause the DOM element to be the wrong color at first and then change 
to the right color due to the useEffect code. */

const Hook8 = ({ title }) => {
  return (
    <div className="grid-item grid-item-9">
      <h1>{title}</h1>
      <div className="container8">My use is pretty niche, read comments</div>
    </div>
  );
};

export default Hook8;
