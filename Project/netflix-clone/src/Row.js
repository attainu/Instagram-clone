import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [movieDetail, setMovieDetail] = useState("nishant");
  console.log(movieDetail);
  // A snippet of code which runs on a specific conditions/variables-hook concept
  useEffect(() => {
    // if [] is empty,run once when the row loads and don't run again
    // method 1
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;

      // method 2
      // axios.get(fetchUrl)
      // .then(response => {
      //   console.log(response.data);
      // })
      // .catch(error => {
      //   console.log(error);
      // });
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title} </h2>
      <div className="row_posters">
        {/* several row_posters */}
        {movies.map((movie) => (
          <Link to={`/${movie.id}`} style={{ textDecoration: "none" }}>
            <img
              onClick={() => console.log({ movie })}
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
            />
          </Link>
        ))}
      </div>

      {/* title-trending,comedy,horror,etc */}
      {/* container that will contain the images/lets call them posters */}
    </div>
  );
}

export default Row;
