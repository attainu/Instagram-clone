import React, { useState, useEffect } from "react";
import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import Nav from "./Nav";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, Input } from "@material-ui/core";
import { auth } from "./firebase";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import {db} from './firebase';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user has logged in
        console.log(authUser);
        setUser(authUser);

        if (authUser.displayName) {
          //dont update username
        } else {
          //if we just created someone
          return authUser.updateProfile({
            displayName: username,
          });
        }
      } else {
        //user has logged out
        setUser(null);
      }
    });

    return () => {
      //perform some cleanup action
      unsubscribe();
    };
  }, [user, username]); //gonna run once

  const [movieList, setMovieList] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const netflixOriginals = await axios.get(request.fetchNetflixOriginals);
        const trending = await axios.get(request.fetchTrending);
        const topRated = await axios.get(request.fetchTopRated);
        const actionMovies = await axios.get(request.fetchActionMovies);
        const horrorMovies = await axios.get(request.fetchHorrorMovies);
        const comedyMovies = await axios.get(request.fetchComedyMovies);
        const romanceMovies = await axios.get(request.fetchRomanceMovies);
        const documentries = await axios.get(request.fetchDocumentries);

        const movies = [
          {
            label: "Netflix Originals",
            data: [...netflixOriginals.data.results],
          },
          { label: "Trending", data: [...trending.data.results] },
          {
            label: "Top Rated",
            data: [...topRated.data.results],
          },
          { label: "Documentries", data: [...documentries.data.results] },
          {
            label: "Action Movies",
            data: [...actionMovies.data.results],
          },
          { label: "Horrir Movies", data: [...horrorMovies.data.results] },
          {
            label: "Comedy Movies",
            data: [...comedyMovies.data.results],
          },
          { label: "Romantic Movies", data: [...romanceMovies.data.results] },
        ];

        setMovieList([...movies]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
      return request;
    }
    fetchData();
  }, []);

  const signUp = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  };

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    // setOpenSign(false);
  };

  const history = useHistory();
  const onMovieSelect = (id) => history.push("/" + id);

  return !loading ? (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app_signup">
            <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signUp}>
              Sign Up
            </Button>
          </form>
        </div>
      </Modal>

      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app_signup">
            <Input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signIn}>
              Sign In
            </Button>
          </form>
        </div>
      </Modal>

      {user ? (
        <Button onClick={() => auth.signOut()}>Logout</Button>
      ) : (
        <div className="app_loginContainer">
          <Button classes={{ text: "btn" }} onClick={() => setOpenSignIn(true)}>
            <div className="btn">Sign In</div>
          </Button>
          <Button classes={{ text: "btn" }} onClick={() => setOpen(true)}>
            <div className="btn">Sign Up</div>
          </Button>
        </div>
      )}
      <Nav
        label="Search Movies"
        onChange={(event, value, reason) => {
          onMovieSelect(value.id);
        }}
        movieList={movieList}
      />
      <Banner />

      {movieList?.map((row) => (
        <Row title={row.label} movieList={row.data} />
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default App;
