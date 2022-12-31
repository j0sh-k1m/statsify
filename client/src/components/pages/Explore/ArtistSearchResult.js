import React from "react";

const ArtistSearchResult = (props) => {

    const artistClickHandler = () => {
        const artist_info = {
            name: props.artistName,
            id: props.artistId, 
            link: props.link,
        };
        props.selectedArtist(artist_info);
    };

  return (
    <div className="flex items-center rounded-lg m-2 pl-40">
      <div onClick={artistClickHandler} className="flex hover:scale-110 transition ease-in-out duration-100 place-items-center" >
        <img
          className="rounded-lg"
          height={60}
          width={60}
          src={props.link}
          alt=""
        ></img>
        <div className="pl-2">{props.artistName}</div>
      </div>
    </div>
  );
};

export default ArtistSearchResult;
