import { useQuery } from '@apollo/client'; import { QUERY_USERS } from '../utils/queries';
import UserData from "../components/ui/user"

const listUsers = () => {
  const { loading, data } = useQuery(QUERY_USERS);

  const userData = data?.users || []

  if (loading) return <div className="container">Loading, please wait...</div>;
  
  return (
    // change to a ui component once we know why we can't list all users
    <UserData key={1} users={userData} />
  );
};

export default listUsers;
