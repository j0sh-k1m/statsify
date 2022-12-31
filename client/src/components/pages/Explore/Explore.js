import React from "react";
import ArtistPage from "./ArtistPage";
import ArtistSearchResult from "./ArtistSearchResult";

const Explore = (props) => {
  const getSelctedArtist = (artist) => {
    props.setDisplayedArtist(artist);
  };

  const searchAgainHandler = () => {
    props.setDisplayedArtist(false);
  };

  const checkForImage = (images, artist) => {
    return images.length === 0 ? "" : artist.images[0].url;
  };

  return (
    <div>
      {props.displayingArtist === false ? (
        <div>
          <div className="grid grid-cols-1 place-items-center">
            <input
              className="rounded-lg border-2 border-cyan-400"
              style={{ width: "75%", height: "50px", fontSize: "30px" }}
              placeholder="Search an Artist to Explore!"
              onChange={(e) => {
                props.getInput(e.target.value);
              }}
            ></input>
          </div>
          <div>
            {props.searchResults.map((artist) => (
              <ul key={artist.id}>
                <ArtistSearchResult
                  artistName={artist.name}
                  link={checkForImage(artist.images, artist)}
                  artistId={artist.id}
                  selectedArtist={getSelctedArtist}
                />
              </ul>
            ))}
          </div>
        </div>
      ) : (
        <ArtistPage
          searchButtonClick={searchAgainHandler}
          artistInfo={props.artistInfo}
          artistRelatedArtists={props.artistRelatedArtists}
          artistAlbums={props.artistAlbums}
          artistTopTracks={props.artistTopTracks}
        />
      )}
    </div>
  );
};

export default Explore;
