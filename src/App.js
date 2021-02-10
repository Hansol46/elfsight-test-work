import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";

function App() {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [users, setUsers] = useState([]);

  // Albums
  useEffect(() => {
    async function fetchAlbums() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums" //?_limit=5
      );
      const data = await response.json();
      setAlbums(data);
    }
    fetchAlbums();
  }, []);

  // Photos
  useEffect(() => {
    async function fetchPhotos() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos" //?_limit=40
      );
      const data = await response.json();
      setPhotos(data);
    }
    fetchPhotos();
  }, []);

  // Users
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users" //?_limit=5
      );
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <NavBar />
      <Route
        path="/"
        render={() => (
          <MainPage 
            albums={albums} 
            photos={photos} 
            users={users} 
          />
        )}
      />
    </div>
  );
}

export default App;
