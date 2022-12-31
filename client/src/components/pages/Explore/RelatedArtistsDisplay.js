import React from "react";

const RelatedArtistsDisplay = (props) => {
  return (
    <div className="rounded-lg m-2 mx-4 bg-pink-300">
      <h1
        style={{ fontSize: "50px" }}
        className="place-items-center pt-2 m-3 grid grid-cols-1 place-items-center font-serif text-gray-500 underline"
      >
        Related Artists
      </h1>
      <div className="grid grid-cols-4 place-items-center px-5">
        {props.related_artists.map((artist) => (
          <a
            key={artist.artist_id}
            href={artist.external_url}
            target="_blank"
            rel="noreferrer"
            className="hover:scale-105 trasition ease-in-out duration-300"
          >
            <ul className="flex place-items-center m-2 border-2 border-pink-400 rounded-lg bg-pink-400">
              <img
                className="rounded-lg m-2"
                height={75}
                width={75}
                src={artist.images.length === 0 ? "" : artist.images[0].url}
                alt=""
              ></img>
              <span className="m-2">{artist.artist_name}</span>
            </ul>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RelatedArtistsDisplay;
