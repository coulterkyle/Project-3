import IssueList from '../components/issueList';
import { useParams, Link } from 'react-router-dom';

const Issues = () => {

  const { userId, repoId } = useParams()

    return (
      <div className="container">
        <ol className="breadcrumb bg-info">
          <li className="breadcrumb-item"><Link to="/project">users</Link></li>
          <li className="breadcrumb-item"><Link to={`/project/${userId}`}>{userId}</Link></li>
          <li className="breadcrumb-item active">{repoId}</li>
        </ol>
        <IssueList />
        <br />
      </div>
    )
  };
  
  export default Issues;