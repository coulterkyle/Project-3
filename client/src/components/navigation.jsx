import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="container-fluid">
        <a className="navbar-brand" href="#">GitPrize</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project/issues">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Contact</Link>
              </li>
            </ul>

            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="mx-1">
                {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <a className="navbar-brand" href="#">GitPrize</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project/issues">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Contact</Link>
              </li>
            </ul>
              <Link className="btn btn-outline-success mx-2" to="/login">Login</Link>
              <Link className="btn btn-outline-success mx-2" to="/signup">Join Now</Link>
          </div>
        </div>
      );
    }
  }

  return (
    <header className="mb-4">
      <nav className="navbar navbar-expand-md bg-dark" data-bs-theme="dark">
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
