import React, { useState } from "react";
import Selector from "../../UI/Selector";
import TopTracksList from "./TopTracksList";

const TopTracks = (props) => {
  const [timeFrame, setTimeFrame] = useState("LongTerm");

  const topTracksAllTime = () => {
    setTimeFrame("LongTerm");
  };

  const topTracksSixMonths = () => {
    setTimeFrame("MediumTerm");
  };

  const topTracksLastMonth = () => {
    setTimeFrame("ShortTerm");
  };

  return (
    <div>
      <Selector
        allTime={topTracksAllTime}
        sixMonths={topTracksSixMonths}
        lastMonth={topTracksLastMonth}
        timeFrame={timeFrame}
        title={
          timeFrame === "LongTerm"
            ? "Your Top Songs of All Time"
            : timeFrame === "MediumTerm"
            ? "Your Top Songs Past 6 Months"
            : timeFrame === "ShortTerm"
            ? "Your Top Songs Last Month"
            : ""
        }
      />
      {timeFrame === "LongTerm" ? (
        <TopTracksList topTracks={props.topTracksLongTerm} />
      ) : timeFrame === "MediumTerm" ? (
        <TopTracksList topTracks={props.topTracksMediumTerm} />
      ) : (
        <TopTracksList topTracks={props.topTracksShortTerm} />
      )}
    </div>
  );
};

export default TopTracks;
