import React from "react";
import { loginUrl } from "./spotify.js";
import "./login.css";

function Login() {
  return (
    <div className="login">
      {/* logo */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      {/* login button */}
      <a href={loginUrl}>Login to spotify</a>
    </div>
  );
}

export default Login;
