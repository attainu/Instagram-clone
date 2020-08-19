import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  useHistory,
} from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, movieList, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieList);
  }, [movieList]);

  let history = useHistory();
  const handleMovie = (id) => {
    history.push("/" + id);
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {/* several row_posters */}

        {movies.map((movie) => (
          <img
            onClick={() => handleMovie(movie.id)}
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>

      {/* title-trending,comedy,horror,etc */}
      {/* container that will contain the images/lets call them posters */}
    </div>
  );
}

export default Row;
