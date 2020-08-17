import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails(props) {
  let { id } = useParams();

  const [movieDetail, setMovieDetail] = useState("nishant");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    // method 2
    axios
      .get(
        `
      https://api.themoviedb.org/3/movie/${id}?api_key=c2d5579d618254f564c00320d87fad1e&language=en-US
      `
      )
      .then((response) => {
        setLoading(false);
        setMovieDetail(response.data);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>{movieDetail.original_title}</div>
  );
}

export default MovieDetails;
