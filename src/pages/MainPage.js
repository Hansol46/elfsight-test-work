import React from "react";
import AlbumsCards from "../components/AlbumsCards";
import AuthorList from "../components/AuthorList";
import PhotosCards from "../components/PhotosCards";

function MainPage({ albums, photos, users }) {
  return (
    <div className="wrapper">
        
      <div className="authorsList">
        <AuthorList users={users} />
      </div>

      <div className="albumCards">
        <AlbumsCards albums={albums} photos={photos} />
      </div>

      <div className="cardsPhoto">
        <PhotosCards photos={photos} />
      </div>

    </div>
  );
}

export default MainPage;
