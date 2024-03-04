import RepoList from '../components/repoList';
import { useParams, Link } from 'react-router-dom';

const Repos = () => {
  
  const { userId } = useParams()

    return (
      <div className="container my-4">
        <ol className="breadcrumb bg-info">
          <li className="breadcrumb-item"><Link to="/project">users</Link></li>
          <li className="breadcrumb-item active">{userId}</li>
        </ol>
        <RepoList />
      </div>
      )
  };
  
  export default Repos;