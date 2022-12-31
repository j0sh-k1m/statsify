import React, { Fragment } from "react";

const Selector = (props) => {
  const on_idle_styling =
    props.timeFrame === "LongTerm"
      ? "bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 text-white font-bold py-2 px-4 rounded-lg transition ease-in-out delay 150"
      : props.timeFrame === "MediumTerm"
      ? "bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 text-white font-bold py-2 px-4 rounded-lg transition ease-in-out delay 150"
      : props.timeFrame === "ShortTerm"
      ? "bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 text-white font-bold py-2 px-4 rounded-lg transition ease-in-out delay 150"
      : "";

  const longTerm_styling =
    props.timeFrame === "LongTerm"
      ? "bg-gray-400 rounded-lg text-white font-bold ease-in-out"
      : on_idle_styling;

  const mediumTerm_styling =
    props.timeFrame === "MediumTerm"
      ? "bg-gray-400 rounded-lg text-white font-bold ease-in-out"
      : on_idle_styling;

  const shortTerm_styling =
    props.timeFrame === "ShortTerm"
      ? "bg-gray-400 rounded-lg text-white font-bold ease-in-out"
      : on_idle_styling;

  return (
    <Fragment>
      <div className="h-20 pl-8 pr-8 grid grid-cols-3 gap-4 content-center">
        <button onClick={props.allTime} className={longTerm_styling}>
          All Time
        </button>
        <button onClick={props.sixMonths} className={mediumTerm_styling}>
          Past 6 Months
        </button>
        <button onClick={props.lastMonth} className={shortTerm_styling}>
          Last Month
        </button>
      </div>
      <div className="h-18 pl-8 pr-8 pt-6 pb-2 grid grid-cols-1 gap-4 place-items-center">
        <span className="text-4xl sans-serif underline text-pink-400">
          {props.title}
        </span>
      </div>
    </Fragment>
  );
};

export default Selector;
