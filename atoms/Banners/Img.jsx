import React from "react";

function Img({ item }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <img
      layout="responsive"
      alt={"banner profile"}
      src={
        `${BASE_URL}${item.backdrop_path || item.poster_path}` ||
        `${BASE_URL}${item.poster_path}`
      }
      height={1000}
      width={1920}
    />
  );
}

export default Img;
