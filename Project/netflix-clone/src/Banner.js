import React,{useState,useEffect} from 'react';
import axios from './axios';
import request from './request';
import './Banner.css';

function Banner() {
const [movie,setMovie] = useState([]);
  useEffect(()=>{
async function fetchData(){
const req = await axios.get(request.fetchNetflixOriginals);

setMovie(
  req.data.results[Math.floor(Math.random()*req.data.results.length-1)]
);
return req;
}
fetchData(); 
  }, []);

  console.log(movie)

  //  function truncate(str,n) {
  //     return str?.length > n ? str.substr(0, n-1) + "..." : str;
  //  }

  return(
  <header className = "banner" 
  style = {{
    backgroundColor:"#000000",
    backgroundSize : "cover",
    backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition : "centre "
  }}>

  <div className="banner_contents">
     <h1 className = "banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
     
     <div className = "banner_buttons">
      <button className= "banner_button">Play</button>
      <button className= "banner_button">My List</button>
     </div>

    <h1 className = "banner_description">{movie?.overview}</h1>
    {/* {truncate(movie?.overview, 150)} */}

</div>

  <div className = "banner--fadeBottom" />

  </header>
)

}
export default Banner






































// useEffect(()=> {
//  async function fetchData() {
//  const requestLocal = await axios.get(request.fetchNetflixOriginals);


//   setMovie(
//     requestLocal.data.results
//     [Math.floor(Math.random() *request.data.results.length-1)
//     ] 
//   );
//   return requestLocal;


  
  
// //   request.data.results
// //     [Math.floor(Math.random() *request.data.results.length-1)] 
// //   console.log(request.data.results); //[m1,m2.......m20]..but now we don't want this much of movies we want only one to be dispalyed here


// //  Math.floor(Math.random()) *request.data.results.length-1)


//  }
//  fetchData();
// },[]);
//  console.log(movie);


//     return (
//         <header> {/* header will contain a background image here  */}
//             {/* title-the witcher */}
//             {/* div->2 buttons */}
//             {/* description-a small paragraph sort of thing */}
//         </header>
//     )
// }


