import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Explore from "./components/pages/Explore/Explore";
import TopTracks from "./components/pages/TopTracks/TopTracks";
import TopArtists from "./components/pages/TopArtists/TopArtists";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "12dac98b658f492091542cd6c4babb6c",
});

const Home = ({ code }) => {
  const accessToken = useAuth(code);

  // Top Tracks and Artists
  const [topArtistsLongTerm, setTopArtistsLongTerm] = useState();
  const [topArtistsMediumTerm, setTopArtistsMediumTerm] = useState();
  const [topArtistsShortTerm, setTopArtistsShortTerm] = useState();

  const [topTracksLongTerm, setTopTracksLongTerm] = useState();
  const [topTracksMediumTerm, setTopTracksMediumTerm] = useState();
  const [topTracksShortTerm, setTopTracksShortTerm] = useState();

  // Search Bar for the Explore page
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Artist to Display through Search on Explore page
  const [displayedArtist, setDisplayedArtist] = useState(false);

  const getInputValue = (value) => {
    setSearchInput(value);
  };

  // State for information for the Searched Artist
  const [artistInfo, setArtistInfo] = useState([]);
  const [artistAlbums, setArtistAlbums] = useState([]);
  const [artistRelatedArtists, setArtistRelatedArtists] = useState([]);
  const [artistTopTracks, setArtistTopTracks] = useState([]);
  

  /* Get the time range for Top Artists and Top Tracks as User input */

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi
      .getMyTopArtists({ time_range: "long_term", limit: 50 })
      .then((res) => {
        setTopArtistsLongTerm(res.body);
      })
      .catch((err) => {
        console.log(err);
      });

    spotifyApi
      .getMyTopArtists({ time_range: "medium_term", limit: 50 })
      .then((res) => {
        setTopArtistsMediumTerm(res.body);
      })
      .catch((err) => {
        console.log(err);
      });

    spotifyApi
      .getMyTopArtists({ time_range: "short_term", limit: 50 })
      .then((res) => {
        setTopArtistsShortTerm(res.body);
      })
      .catch((err) => {
        console.log(err);
      });

    spotifyApi
      .getMyTopTracks({ time_range: "long_term", limit: 50 })
      .then((res) => {
        setTopTracksLongTerm(res.body);
      })
      .catch((err) => {
        console.log(err);
      });

    spotifyApi
      .getMyTopTracks({ time_range: "medium_term", limit: 50 })
      .then((res) => {
        setTopTracksMediumTerm(res.body);
      })
      .catch((err) => {
        console.log(err);
      });

    spotifyApi
      .getMyTopTracks({ time_range: "short_term", limit: 50 })
      .then((res) => {
        setTopTracksShortTerm(res.body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    if (!searchInput) return setSearchResults([]);

    let cancel = false;
    spotifyApi.searchArtists(searchInput).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.artists.items.map((artist) => {
          return {
            name: artist.name,
            images: artist.images,
            id: artist.id,
          };
        })
      );
    });

    return () => (cancel = true);
  }, [accessToken, searchInput]);

  // Information for the searched Artist in the Explore Page
  useEffect(() => {
    if (!accessToken) return;
    if (!displayedArtist) return;

    spotifyApi
      .getArtist(displayedArtist.id)
      .then((res) => {
        setArtistInfo({
          name: res.body.name,
          images: res.body.images,
          followers: res.body.followers.total,
          external_url: res.body.external_urls.spotify,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    spotifyApi
      .getArtistAlbums(displayedArtist.id)
      .then((res) => {
        setArtistAlbums(
          res.body.items.map((album) => {
            return {
              album_name: album.name,
              images: album.images,
              external_url: album.external_urls.spotify,
              album_id: album.id,
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });

    spotifyApi
      .getArtistRelatedArtists(displayedArtist.id)
      .then((res) => {
        setArtistRelatedArtists(
          res.body.artists.map((artist) => {
            return {
              artist_name: artist.name,
              images: artist.images,
              external_url: artist.external_urls.spotify,
              artist_id: artist.id,
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });

    spotifyApi
      .getArtistTopTracks(displayedArtist.id, "CA")
      .then((res) => {
        setArtistTopTracks(
          res.body.tracks.map((track) => {
            return {
              track_name: track.name, 
              images: track.album.images, 
              external_url: track.external_urls.spotify,
              track_id: track.id,
            }
          })
        )
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accessToken, displayedArtist]);

  // Render the different pages conditionally
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Fragment />} />
        <Route
          path="/top-artists"
          element={
            <TopArtists
              topArtistsLongTerm={topArtistsLongTerm}
              topArtistsMediumTerm={topArtistsMediumTerm}
              topArtistsShortTerm={topArtistsShortTerm}
            />
          }
        />
        <Route
          path="/top-tracks"
          element={
            <TopTracks
              topTracksLongTerm={topTracksLongTerm}
              topTracksMediumTerm={topTracksMediumTerm}
              topTracksShortTerm={topTracksShortTerm}
            />
          }
        />
        <Route
          path="/explore"
          element={
            <Explore
              getInput={getInputValue}
              searchResults={searchResults}
              displayingArtist={displayedArtist}
              setDisplayedArtist={setDisplayedArtist}
              artistInfo={artistInfo}
              artistAlbums={artistAlbums}
              artistRelatedArtists={artistRelatedArtists}
              artistTopTracks={artistTopTracks}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Home;
