import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
        
        <p><Link to={-1}>Go Back to Previous Page</Link></p>
    </div>
  );
};

export default Error;
