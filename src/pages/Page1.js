import Hook1 from "../components/Hook1";
import Hook2 from "../components/Hook2";
import Hook2a from "../components/Hook2a";
import Hook3 from "../components/Hook3";

const Page1 = () => {
  return (
    <div className="grid-container">
      <Hook1 title="useState Counter" />
      <Hook2 title="useEffect Tab Switch" />
      <Hook2a title="useEffect Window Size" />
      <Hook3 title="useMemo" />
    </div>
  );
};

export default Page1;
