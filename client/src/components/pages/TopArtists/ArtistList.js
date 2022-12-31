import React from "react";
import Artist from "./Artist";

const ArtistList = (props) => {
  return (
    <div>
      {props.artists.map((artist, index) => (
        <ul key={artist.id}>
          <Artist
            name={artist.name}
            followers={artist.followers.total}
            genres={artist.genres}
            images={artist.images}
            link={artist.external_urls.spotify}
            rank={index+1}
          />
        </ul>
      ))}
    </div>
  );
};

export default ArtistList;
