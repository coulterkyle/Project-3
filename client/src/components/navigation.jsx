import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import Navbar from './ui/navbar';

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
                <Link className="nav-link" to="/project/coulterkyle/Project-3">Projects</Link>
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
        <Navbar
          links={[
            <Link key={1} className="nav-link" to="/">
              Home
            </Link>,
            <Link key={1} className="nav-link" to="/project/coulterkyle/Project-3">
              Projects
            </Link>,
            <Link key={1} className="nav-link" to="/about">
              About
            </Link>,
            <Link key={1} className="nav-link" to="/contact">
              Contact
            </Link>

          ]}
        />
      );
    }
  }

  return (
    <header className="mb-4">
      <nav className="navbar navbar-expand-md bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">GitPrize</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        {showNavigation()}
        
      </div>
      </nav>
    </header>
  );
}

export default Nav;
