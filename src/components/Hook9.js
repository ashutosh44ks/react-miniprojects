import useLocalStorage from "./useLocalStorage";

const Hook9 = ({ title }) => {
  const [name, setName] = useLocalStorage("name", "");
  return (
    <div className="grid-item grid-item-10">
      <h1>{title}</h1>
      <div className="container9">
        <input
          type="text"
          value={name}
          placeholder="Enter your name here"
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          I'll store your name - {name} - in local storage
          <br />
          Check by refreshing the page
        </div>
      </div>
    </div>
  );
};

export default Hook9;
