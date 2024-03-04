import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_USERS } from '../utils/queries';

const listUsers = () => {
  const { loading, data } = useQuery(QUERY_USERS);

  const userData = data?.users || []
  console.log("Users", userData)

  if (loading) return <div className="container">Loading, please wait...</div>;
  
  return (
    // change to a ui component once we know why we can't list all users
    <div className="container">
      <ul className="list-group">
        <li className="list-group-item d-flex align-items-center">
          <div className="badge text-bg-info rounded-pill"></div>
            <div className="text-start mx-2">
                <h5 className="m-0">{userData.firstName} {userData.lastName}</h5>
                <small>{userData.githubUsername}</small>
            </div>
            <Link to={userData.githubUsername} className="ms-auto btn btn-success">View</Link>
        </li>
      </ul>
    </div>
  );
};

export default listUsers;
