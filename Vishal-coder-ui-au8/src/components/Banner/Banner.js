import React, { useState, useEffect } from "react";
import axios from "../../axios";
import request from "../../request";
import "./Banner.css";

function Banner() {
  //Declaring a new state variable
  const [tv, setTv] = useState([]);
  useEffect(() => {
    // if [] is empty,run once when the row loads and don't run again
    async function fetchData() {
      const req = await axios.get(request.fetchPopular);

      setTv(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length )
          //this one will all simplifies to one string or object in that array it will just get one out of those randomly
        ]
      );
      return req;
    }
    fetchData();
  }, []);

  console.log(tv);

  return (
    <header
      className="banner"
      style={{
        backgroundColor: "#000000",
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${tv?.backdrop_path}")`,
        backgroundPosition: "centre "
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {tv?.title || tv?.name || tv?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">{tv?.overview}</h1>
      </div>
    </header>
  );
}
export default Banner;

