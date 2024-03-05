import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import Navbar from './ui/navbar';

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Navbar
          auth={true}
          links={[
            <Link key={1} className="nav-link" to="/">
              Home
            </Link>,
            <Link key={2} className="nav-link" to="/project/coulterkyle">
              Projects
            </Link>,
            <Link key={3} className="nav-link" to="/about">
              About
            </Link>,
            <Link key={4} className="nav-link" to="/contact">
              Contact
            </Link>,
            <Link key={5} className="nav-link" to="/bountyboard">
              BountyBoard
            </Link>,
            <Link key={6} className="nav-link" to="/profile">
              Profile
            </Link>,
          ]}
        />
      );
    } else {
      return (
        <Navbar
          auth={false}
          links={[
            <Link key={1} className="nav-link" to="/">
              Home
            </Link>,
            <Link key={2} className="nav-link" to="/project/coulterkyle">
              Projects
            </Link>,
            <Link key={3} className="nav-link" to="/about">
              About
            </Link>,
            <Link key={4} className="nav-link" to="/contact">
              Contact
            </Link>,
            <Link key={5} className="nav-link" to="/bountyboard">
            Bounty Board
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
          <a className="navbar-brand" href="#">G<span className="text-success">it</span>Fi<span className="text-success">x</span></a>
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
