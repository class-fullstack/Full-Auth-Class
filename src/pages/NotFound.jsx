import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="not-found-button">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
