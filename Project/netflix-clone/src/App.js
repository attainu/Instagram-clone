import React from 'react';
import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
       {/* Banner */}
       <Nav />
       <Banner />
      

      
      {/* Navbar */}
     
      <Row 
       title = "Netflix Originals" 
       fetchUrl={request.fetchDocumentries} 
       isLargeRow = {true}
       />


      <Row title = "Trending Now" fetchUrl={request.fetchTrending} />
      <Row title = "Toprated Movies" fetchUrl={request.fetchDocumentries} />
      <Row title = "Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title = "Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title = "Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title = "Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title = "Documentary Movies" fetchUrl={request.fetchDocumentries} />
    
      
    </div>
  );
}

export default App;
