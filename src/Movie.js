import React from "react";
import propTypes from "prop-types";

const Movie = ({ id, year, title, summary, medium_cover_image }) => {
  return (
    <h5>
      {title}
    </h5>
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
