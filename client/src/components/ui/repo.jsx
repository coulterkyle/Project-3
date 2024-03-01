import { Link } from "react-router-dom";

export default function repo({ repos }) {

    return (
        <div className="container" id="gh-repos">
        <ul className="list-group">
            {repos.map((data, index) => 
                <li key={index} className="list-group-item d-flex align-items-center">
                <div className="badge text-bg-info rounded-pill">{data.open_issues}</div>
                    <div className="text-start mx-2">
                        <h5 className="m-0">{data.name}</h5>
                        <small>{data.description}</small>
                    </div>
                    <Link to={data.name} data-id={data.id} className="ms-auto btn btn-info">View Issues</Link>
                </li>
            )}
        </ul>
        </div>
    );
}