import React, { useState } from "react";
import Artists from "./Artists";

const TrackItem = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const rank_one_idle = "text-yellow-400 ease-in-out duration-700";
  const rank_two_idle = "text-slate-400 ease-in-out duration-700";
  const rank_three_idle = "text-amber-900 ease-in-out duration-700";
  const on_hover = "text-cyan-400 transition duration-700";
  const on_idle = "text-black ease-in-out duration-700";

  const styles =
    isHovering === true
      ? on_hover
      : props.rank === 1
      ? rank_one_idle
      : props.rank === 2
      ? rank_two_idle
      : props.rank === 3
      ? rank_three_idle
      : on_idle + " text-bold ";

  return (
    <div className="pt-4 pl-40 pr-40">
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="flex pt-1 pb-1 pl-3 items-center border-2 border-sky-500 rounded-lg hover:shadow-xl transition duration-700"
      >
        <h1 className={styles}>{props.rank}</h1>
        <div className="pl-3 flex items-center">
          <a href={props.link} target="_blank" rel="noreferrer">
            <img className="rounded-lg" src={props.picture[2].url} alt="" />
          </a>
          <div className="pl-2">
            <a
              href={props.link}
              target="_blank"
              rel="noreferrer"
              className={styles}
            >
              <span className="font-bold hover:underline">{props.title}</span>
            </a>
            <Artists
              artists={props.artists}
              onHover={`${
                isHovering === true
                  ? "text-cyan-400 transition duration-700"
                  : "text-black ease-in-out duration-700"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackItem;
