import React from "react";
import AlbumsDisplay from "./AlbumsDisplay";
import RelatedArtistsDisplay from "./RelatedArtistsDisplay";
import TracksDisplay from "./TracksDisplay";

const ArtistPage = (props) => {
  const albums = (array) => {
    const dict = {};
    array.forEach((element) => {
      if (!(element in dict)) {
        dict[element.album_name] = element;
      }
    });
    let album_array = [];
    for (const [, value] of Object.entries(dict)) {
      album_array.push(value);
    }
    return album_array;
  };

  const albums_array =
    albums(props.artistAlbums).length > 6
      ? albums(props.artistAlbums).slice(0, 6)
      : albums(props.artistAlbums);

  const tracks_array =
    props.artistTopTracks.length > 6
      ? props.artistTopTracks.slice(0, 6)
      : props.artistTopTracks;

  const related_artists =
    props.artistRelatedArtists.length > 4
      ? props.artistRelatedArtists.slice(0, 4)
      : props.artistRelatedArtists;

  return (
    <div>
      <div className="grid grid-cols-1 place-items-center m-5">
        <button
          className="bg-cyan-400 rounded-lg py-2 px-4 text-white font-bold hover:scale-105 hover:bg-cyan-500 transition ease-in-out duration-300"
          onClick={props.searchButtonClick}
        >
          Search A Different Artist
        </button>
      </div>
      <div className="grid grid-cols-1 place-items-center">
        <a
          href={props.artistInfo.external_url}
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex hover:shadow-xl hover:scale-105 transition ease-in-out duration-500 place-items-center m-2 border-2 border-cyan-400 bg-cyan-400 rounded-lg">
            <img
              className="rounded-lg m-4 mx-6"
              src={
                props.artistInfo.length === 0
                  ? ""
                  : props.artistInfo.images[0].url
              }
              alt=""
              height={100}
              width={100}
            />
            <span className="m-4 mx-6 text-5xl font-serif text-stone-700 underline">
              {props.artistInfo.name}
            </span>
          </div>
        </a>
      </div>
      <AlbumsDisplay albums_array={albums_array} />
      <TracksDisplay tracks_array={tracks_array} />
      <RelatedArtistsDisplay related_artists={related_artists} />
    </div>
  );
};

export default ArtistPage;
