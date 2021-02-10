import React from "react";
import { Link, Route } from "react-router-dom";
import Album from "./Album";

function AlbumsCards({ albums, photos }) {
  return (
    <>
      {albums.map((album) => (
        <Route
          path={`/author/${album.userId}/`}
          key={album.id}
          render={() => (
            <Link to={`/album/${album.id}/photos`}>
              <Album key={album.id} album={album} photos={photos} />
            </Link>
          )}
        />
      ))}
    </>
  );
}

export default AlbumsCards;
