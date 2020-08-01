import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default () =>
  <header>
    <Link to="/">Home</Link>
    <Link to="/about">about</Link>
  </header>;
