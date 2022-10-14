import Navbar from "../../navbar/Navbar";
import "./privacy.css";
import Data from "./Data";
import NewFooter from "../../footer/NewFooter";

const Privacy = () => {
  return (
    <div className="privacy">
      <Navbar />
      <div className="policy">
        <Data />
      </div>
      <NewFooter />
    </div>
  );
};

export default Privacy;
