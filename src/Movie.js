import React from "react";
import propTypes from "prop-types";
import "./Movie.css";

const Movie = ({ year, title, summary, medium_cover_image }) => {
  return (
    <div className="movie">
      <img src={medium_cover_image} alt={title} title={title} />
      <div className="movie-data">
        <h3 className="movie-title">
          {title}
        </h3>
        <h5 className="movie-year">
          {year}
        </h5>
        <p className="movie-summary">
          {summary}
        </p>
      </div>
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
