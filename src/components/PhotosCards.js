import React from "react";
import { Route } from "react-router-dom";
import Photo from "./Photo";

function PhotosCards({ photos }) {

  return (
    <>
      {photos.map((photo) => (
        <Route
          path={`/album/${photo.albumId}/photos`}
          key={photo.id}
          render={() => <Photo key={photo.id} photo={photo} />}
        />
      ))}
    </>
  );
}

export default PhotosCards;
