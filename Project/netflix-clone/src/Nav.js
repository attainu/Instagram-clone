import React from "react";
import "./Nav.css";
import { useHistory } from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

function Nav(props) {
  let history = useHistory();
  const handleRoute = (route) => {
    history.push("/" + route);
  };
  function flatten(arr) {
    return arr?.reduce(function (flat, toFlatten) {
      return flat.concat(
        Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
      );
    }, []);
  }
  const options = props.movieList?.map((list) => list.data);
  const searchOptions = [];
  const flattenArray = flatten(options);
  const x = flattenArray?.forEach((optn) =>
    searchOptions.push({ title: optn.title, id: optn.id })
  );
  const uniqueSearchOptions = flattenArray?.filter(
    (v, i, a) => a.findIndex((t) => t.id === v.id) === i
  );

  return (
    <div className="nav">
      <Autocomplete
        id="combo-box-demo"
        options={uniqueSearchOptions}
        getOptionLabel={(option) => option.title || ""}
        style={{ width: 300 }}
        onChange={props.onChange}
        renderInput={(params) => (
          <TextField {...params} label={props.label} variant="outlined" />
        )}
      />
      <div onClick={() => handleRoute("movies")}>Movies</div>
      <div onClick={() => handleRoute("tv")}>TV</div>
      {/* <img 
         className = "nav_logo"
         src = "https://mcetv.fr/wp-content/uploads/2019/02/ap_18193545308863-980d5f0ba425601f3fab69e2b9c2dca31562b75e-s800-c85.jpg"
           alt = "Netflix_Logo" 
        />

         <img 
         className = "nav_avatar"
         src = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
           alt = "Netflix_Logo" 
        /> */}
    </div>
  );
}

export default Nav;
