import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import ArtistsList from "../src/components/ArtistsList";
import ArtistsView from "../src/components/ArtistsView";
import Main from "./components/Main";
import CreateArtist from "./components/CreateArtist";

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [artists, setArtists] = useState([]);
  const [hideForm, setHideForm] = useState(true);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthenticatedUser(token);
      return;
    }
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/artists`)
      .then((res) => res.json())
      .then((artistsData) => {
        setArtists(artistsData);
        console.log(artistsData);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Main setAuthenticatedUser={setAuthenticatedUser} />}
        />
        <Route
          path="/artists"
          element={authenticatedUser && <ArtistsList artists={artists} />}
        />
        <Route
          path="/artists/:artistId"
          element={
            authenticatedUser && (
              <ArtistsView hideForm={hideForm} setHideForm={setHideForm} />
            )
          }
        />
        <Route
          path="/artists/create"
          element={authenticatedUser && <CreateArtist />}
        />
      </Routes>
    </>
  );
}

export default App;
