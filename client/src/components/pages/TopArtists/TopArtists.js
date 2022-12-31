import React, { Fragment, useState } from "react";
import Selector from "../../UI/Selector";
import ArtistList from "./ArtistList";

const TopArtists = (props) => {
  const [timeFrame, setTimeFrame] = useState("LongTerm");

  const topArtistsAllTimeHandler = () => {
    setTimeFrame("LongTerm");
  };

  const topArtistsSixMonthsHandler = () => {
    setTimeFrame("MediumTerm");
  };

  const topArtistsLastMonthHandler = () => {
    setTimeFrame("ShortTerm");
  };

  return (
    <Fragment>
      <Selector
        allTime={topArtistsAllTimeHandler}
        sixMonths={topArtistsSixMonthsHandler}
        lastMonth={topArtistsLastMonthHandler}
        timeFrame={timeFrame}
        title={
          timeFrame === "LongTerm"
            ? "Your Top Artists of All Time"
            : timeFrame === "MediumTerm"
            ? "Your Top Artists Past 6 Months"
            : timeFrame === "ShortTerm"
            ? "Your Top Artists Last Month"
            : ""
        }
      />
      {timeFrame === "LongTerm" ? (
        <ArtistList artists={props.topArtistsLongTerm.items} />
      ) : timeFrame === "MediumTerm" ? (
        <ArtistList artists={props.topArtistsMediumTerm.items} />
      ) : (
        <ArtistList artists={props.topArtistsShortTerm.items} />
      )}
    </Fragment>
  );
};

export default TopArtists;
