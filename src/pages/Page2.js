import Hook4 from "../components/Hook4";
import Hook5 from "../components/Hook5";
import Hook6 from "../components/Hook6";
import Hook7 from "../components/Hook7";

const Page2 = () => {
  return (
    <div className="grid-container">
      <Hook4 title="useRef Render Counter"/>
      <Hook5 title="useContext Theme Changer"/>
      <Hook6 title="useReducer Counter"/>
      <Hook7 title="useCallback"/>
    </div>
  );
};

export default Page2;
