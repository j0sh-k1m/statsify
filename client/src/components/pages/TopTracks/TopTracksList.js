import React from "react";
import TrackItem from "./TrackItem";

const TopTracksList = (props) => {
  return (
    <div>
      {/* Render a list of objects and pass title and artists to TrackItem component */}
      {props.topTracks.items.map((track, index) => (
        <ul key={Math.random()}>
          <TrackItem
            title={track.name}
            artists={track.artists}
            picture={track.album.images}
            link={track.external_urls.spotify}
            rank={index + 1}
          />
        </ul>
      ))}
    </div>
  );
};

export default TopTracksList;
