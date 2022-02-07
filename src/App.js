import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import "./index.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//first do npm i react-router-dom@6

/*Hooks cannot be put inside conditionals, loops, functions, etc*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/react-miniprojects" exact element={<Page1 />} />
        <Route path="/react-miniprojects/2" element={<Page2 />} />
        <Route path="/react-miniprojects/3" element={<Page3 />} />
        <Route path="*" element={<h1>Page Not Found!</h1>} />
      </Routes>
      <div className="button-container">
        <Link to={"/react-miniprojects"} key={1}>
          <button className="btn">Page 1</button>
        </Link>
        <Link to={"/react-miniprojects/2"} key={2}>
          <button className="btn">Page 2</button>
        </Link>
        <Link to={"/react-miniprojects/3"} key={3}>
          <button className="btn">Page 3</button>
        </Link>
      </div>
    </Router>
  );
}

export default App;
