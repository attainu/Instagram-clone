import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  //Declaring a new state variable
  const [tv, setTv] = useState([]);
  // A snippet of code which runs on a specific conditions/variables-hook concept
  useEffect(() => {
    // if [] is empty,run once when the row loads and don't run again
    // method 1
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      // console.log(request.data.results);
      setTv(request.data.results);
      return request; 
    }
    fetchData();
  }, [fetchUrl]);

  console.log(tv);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {/* several row_posters */}
        
        
        {tv.map((tv) => (//the map will take a fn as a callback to return in the function we will have a grammar which will have individual items
          <img
          key={tv.id}
          className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          src={`${base_url}${isLargeRow? tv.poster_path : tv.backdrop_path}`}
          alt={tv.title}
        />
        ))}  
      </div>

      {/* title-popular,toprated,tv episodes,etc */}
      {/* container that will contain the images/lets call them posters */}
    </div>
  );
}

export default Row;
