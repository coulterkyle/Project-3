import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

export default function Nav({ auth, links }) {
  if(auth) {
    return (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {links.map((link, index) => <li key={index} className="nav-item">{link}</li>)}
        </ul>
        <Link to="/profile" className="btn btn-outline-success m-2">Profile</Link>
        <Link to="/" className="btn btn-outline-success m-2" onClick={Auth.logout}>Logout</Link>
      </div>
    );
  } 
  else {
    return (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {links.map((link, index) => <li key={index} className="nav-item">{link}</li>)}
        </ul>
            <Link className="btn btn-outline-success m-2" to="/login">Login</Link>
            <Link className="btn btn-outline-success m-2" to="/signup">Join Now</Link>
      </div>
    );
  }
}