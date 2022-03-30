import { Textfit } from "react-textfit";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
      <div>
          <input className="screen" type="text" mode="single" value={value} max={70} placeholder="calculate" disabled />
      </div>
    // <Textfit className="screen" mode="single" max={70}>
    //   {value}
    // </Textfit>
  );
};

export default Screen;