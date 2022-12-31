import React from "react";

const artistsToString = (artists, length) => {
  let return_string = "";
  let count = 0;
  artists.forEach((element) => {
    count + 1 === length
      ? (return_string += element.name)
      : (return_string += element.name + ", ");
    count++;
  });
  return return_string;
};

const Artist = (props) => {
  const artists = artistsToString(props.artists, props.artists.length);
  return <p className={props.onHover}>{artists}</p>;
};

export default Artist;
