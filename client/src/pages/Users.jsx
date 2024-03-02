import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

const listUsers = () => {
  const { loading, data } = useQuery(QUERY_USERS);

  const userData = data?.user || []
  console.log("Users", userData)

  if (loading) return <div className="container">Loading, please wait...</div>;
  
  return (
    <div className="container">
      {userData.githubUsername}
    </div>
  );
};

export default listUsers;
