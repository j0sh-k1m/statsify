import React, { useState } from "react";

const Artist = (props) => {
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
    <div className="pl-40 pr-40 pt-4">
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="flex pt-1 pl-3 pb-1 items-center border-2 border-indigo-600 rounded-lg hover:shadow-2xl transition duration-700 ease-in-out"
      >
        <h1 className={styles}>{props.rank}</h1>
        <div className="flex items-center pl-3">
          <a href={props.link} target="_blank" rel="noreferrer" className="">
            <img
              className="rounded-lg"
              src={props.images[1].url}
              height="200"
              width="100"
              alt=""
            ></img>
          </a>
          <div className="pl-3">
            <a
              className={styles}
              href={props.link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="font-bold text-xl hover:underline">
                {props.name}
              </span>
            </a>
            <br></br>
            <span className={isHovering === true ? on_hover : on_idle}>
              Followers: {props.followers.toLocaleString("en-US")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
