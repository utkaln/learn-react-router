import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <Link to="/">Home</Link>
    </>
  );
};

export default ErrorPage;
