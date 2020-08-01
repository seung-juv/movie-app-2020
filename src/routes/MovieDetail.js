import React from "react";

class MovieDetail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    return <div />;
  }
}

export default MovieDetail;
