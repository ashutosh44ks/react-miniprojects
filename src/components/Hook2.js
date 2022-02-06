import { useState, useEffect } from "react";
const Hook2 = ({ title }) => {
  const [content, setContent] = useState("Posts");
  const btnPosts = () => {
    setContent("Posts");
  };
  const btnUsers = () => {
    setContent("Users");
  };
  const btnComments = () => {
    setContent("Comments");
  };

  const [items, setItems] = useState([]);

  //executed whenever this component renders
  useEffect(() => {
    console.log("Component Rendered");
    fetch(`https://jsonplaceholder.typicode.com/${content}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    return () => {console.log("re-rendering")}
  }, [content]);
  //second argumnet is an OPTIONAL array which contains values which whenever changes calls this UseEffect
  //if an empty array [] is passed then it'll only render once i.e. onMount
  //return is also OPTIONAL, it runs before the component re-renders

  return (
    <div className="grid-item grid-item-">
      <h1>{title}</h1>
      <div className="container2">
        <div className="tabs" style={{ padding: "10px" }}>
          <button className="btn" onClick={btnPosts} style={btnStyle}>
            posts
          </button>
          <button className="btn" onClick={btnUsers} style={btnStyle}>
            users
          </button>
          <button className="btn" onClick={btnComments} style={btnStyle}>
            comments
          </button>
        </div>
        <div className="tab-content" style={{ marginLeft: "10px" }}>
          {content}
        </div>
        {/*items.map(item => <pre>{JSON.stringify(item)}</pre>) TOO MANY RESULTS*/}
      </div>
    </div>
  );
};

const btnStyle = {
  margin: 0,
  borderRadius: 0,
};
export default Hook2;
