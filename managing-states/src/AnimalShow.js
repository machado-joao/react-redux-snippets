import { useState } from "react";
import cow from "./images/cow.png";
import crow from "./images/crow.png";
import heart from "./images/heart.png";
import lion from "./images/lion.png";
import "./AnimalShow.css";

const pngMap = {
  cow,
  crow,
  lion,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div onClick={handleClick} className="animal-show">
      <img className="animal" src={pngMap[type]} alt={`${type}.`} />
      <img
        className="heart"
        src={heart}
        alt="Heart."
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
}

export default AnimalShow;
