import { Link } from "react-router-dom";

export default function Nav({ links }) {
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