import React from "react";

const clientId = "12dac98b658f492091542cd6c4babb6c";
const redirectUri = "http://localhost:3000";
const scope =
  "user-read-recently-played user-read-email user-top-read playlist-modify-public user-library-modify user-library-read playlist-modify-private";

let AUTH_URL = "https://accounts.spotify.com/authorize";
AUTH_URL += "?response_type=code";
AUTH_URL += "&client_id=" + clientId;
AUTH_URL += "&scope=" + scope;
AUTH_URL += "&redirect_uri=" + redirectUri;

const Login = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-cyan-100 to-cyan-400">
        <h1 style={ { fontSize: "100px" } } className="font-serif grid grid-cols-1 place-items-center underline text-red-300">Statsify</h1>
      <a
        href={AUTH_URL}
        className="flex pt-10 grid grid-cols-1 place-items-center hover:scale-110 transition ease-in-out duration-300"
      >
        <span className="px-3 py-2 bg-pink-400 rounded-lg text-white">
          Login With Spotify
        </span>
      </a>
    </div>
  );
};

export default Login;
