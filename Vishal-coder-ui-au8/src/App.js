import React from "react";
import "./App.css";
import Row from "../src/components/Rows/Row";
import request from "./request";
import Banner from "../src/components/Banner/Banner";
import Nav from "../src/components/Nav/Nav";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      
      <Nav />
      <Banner />
      {/* Banner */}

    
      <Row title="Popular TV Shows" fetchUrl={request.fetchPopular} />
      <Row title="TopRated TV Shows" fetchUrl={request.fetchTopRated} />
      <Row title="Adventure Tv shows" fetchUrl={request.fetchAdventure} />
      <Row title="Mystery Tv shows" fetchUrl={request.fetchMysterious} />
    </div>
  );
}

export default App;
