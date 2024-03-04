import IssueList from '../components/issueList';
import { useParams, Link } from 'react-router-dom';

const Profile = () => {

    const { firstName, lastName } = useParams()

    return (
        <div className="container">
            <h1>Welcome NAME {firstName} {lastName}</h1>
            <div class="card text-center">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="true" href="#">Bounties Set</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Bounties Claimed</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>

        </div>
    )
};

export default Profile;