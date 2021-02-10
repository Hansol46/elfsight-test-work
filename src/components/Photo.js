import React from "react";

function Photo({ photo }) {
  const { title, url, thumbnailUrl } = photo;
  return (
    <div>
      <div className="cardPhoto">
        <a href="#imgFull">
          <img src={thumbnailUrl} alt="Фото" title=" Нажмите чтобы увеличить" />
        </a>
        <p> {title} </p>
      </div>

      <div id="imgFull" className="imgFull">
        <a href="#" className="closeImg">
          X
        </a>
        <img
          className="imgFullScreen"
          src={url}
          alt="Фотография"
          title=" Нажмите на Х чтобы закрыть "
        />
      </div>

    </div>
  );
}

export default Photo;
