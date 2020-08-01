import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    console.log(movies);
    return isLoading
      ? <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      : <div className="movies">
          {movies.map(movie =>
            <Link
              key={movie.id}
              to={{
                pathname: `/movie/${movie.id}`,
                state: {
                  ...movie
                }
              }}
            >
              <Movie {...movie} />
            </Link>
          )}
        </div>;
  }
}

export default Home;
