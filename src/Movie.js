import React, { useState } from "react";
import propTypes from "prop-types";
import "./Movie.css";

const Movie = ({ year, title, summary, medium_cover_image, genres }) => {
  const [dataView, setdataView] = useState(true);
  return (
    <div
      className="movie"
      onMouseEnter={() => setdataView(true)}
      onMouseLeave={() => setdataView(false)}
    >
      <img src={medium_cover_image} alt={title} title={title} />
      {dataView &&
        <div className="movie-data">
          <h3 className="movie-title">
            {title}
          </h3>
          <h5 className="movie-year">
            {year}
          </h5>
          <ul className="movie-genres">
            {genres.map((genre, index) =>
              <li key={index} className="genres-genre">
                {genre}
              </li>
            )}
          </ul>
          <p className="movie-summary">
            {summary.slice(0, 180)}...
          </p>
        </div>}
    </div>
  );
};

Movie.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  medium_cover_image: propTypes.string.isRequired
};

export default Movie;
