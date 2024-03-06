import { useQuery } from '@apollo/client'; import { QUERY_USERS } from '../utils/queries';
import UserData from "../components/ui/user"
import { Navigate } from 'react-router-dom'
import Auth from '../utils/auth';

const listUsers = () => {

  if(!Auth.loggedIn()) return <Navigate to="/login" />

  const { loading, data } = useQuery(QUERY_USERS);

  const userData = data?.users || []
  if (loading) return <div className="container">Loading user's GitHub profiles, please wait...</div>;
  
  return (
    // change to a ui component once we know why we can't list all users
    <UserData key={1} users={userData} />
  );
};

export default listUsers;
