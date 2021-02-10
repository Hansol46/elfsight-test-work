import React from "react";

function Album({ album, photos }) {
  const { title, id } = album;

  return (
    <div className="albumCard" >
      <img
        src="https://samesound.ru/wp-content/uploads/2019/02/synthwave-album-cover.jpg"
        title="Обложка"
        alt="обложка"
      />
      <div>
        <h2> Название альбома: </h2>
        <p> {title}</p>
      </div>
    </div>
  );
}

export default Album;
