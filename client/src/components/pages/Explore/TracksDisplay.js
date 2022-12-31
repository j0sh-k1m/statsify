import React from "react";

const TracksDisplay = (props) => {
  return (
    <div className="rounded-lg m-2 mx-4 bg-emerald-300">
      <h1
        style={{ fontSize: "50px" }}
        className="place-items-center pt-2 m-3 grid grid-cols-1 place-items-center font-serif text-gray-500 underline"
      >
        Top Songs
      </h1>
      <div className="grid grid-cols-3 place-items-center px-5">
        {props.tracks_array.map((track) => (
          <a
            key={track.track_id}
            href={track.external_url}
            target="_blank"
            rel="noreferrer"
            className="hover:scale-105 trasition ease-in-out duration-300"
          >
            <ul
              key={track.album_id}
              className="flex place-items-center m-2 border-2 border-emerald-400 rounded-lg bg-emerald-400"
            >
              <img
                className="rounded-lg m-2"
                height={75}
                width={75}
                src={track.images.length === 0 ? "" : track.images[0].url}
                alt=""
              ></img>
              <span className="m-2">{track.track_name}</span>
            </ul>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TracksDisplay;
