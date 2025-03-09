import React from "react";

const ErrorPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <h4>404 - Page Not Found</h4>
      <p>Oops! The page you are looking for does not exist or has been moved.</p>
      <a href="/" className="btn btn-outline-dark mt-3">
        Go to Home
      </a>
    </div>
  );
};

export default ErrorPage;
