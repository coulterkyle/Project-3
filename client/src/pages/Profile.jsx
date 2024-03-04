import IssueList from '../components/issueList';
import { useParams, Link } from 'react-router-dom';

const Profile = () => {

  const { firstName, lastName } = useParams()

    return (
      <div className="container">
        <h1>Welcome {firstName} {lastName}</h1>
        <div>
            <h2>Bounties Set</h2>
            
        </div>
        <div>
            <h2>Bounties Claimed</h2>
        </div>
        
      </div>
    )
  };
  
  export default Profile;