import { Link } from "react-router-dom";

export default function UserData({ users }) {


  return (
    <div className="container mb-4" id="gh-user-list">
      <ul className="list-group">
        {users.map((data, index) => {
          {
            if (data.githubUsername !== null) {
              return (
                <li className="list-group-item d-flex align-items-center">
                  <div className="badge text-bg-info rounded-pill"></div>
                  <div className="text-start mx-2">
                    <h5 className="m-0">{data.firstName} {data.lastName}</h5>
                    <small>{data.githubUsername}</small>
                  </div>
                  <Link key={index} to={data.githubUsername} className="ms-auto btn btn-success">View</Link>
                </li>
              )}
          }
        }
        )}
      </ul>
    </div>
  );
}