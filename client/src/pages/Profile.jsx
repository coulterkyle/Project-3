// import IssueList from '../components/issueList';
import { useParams, Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import { useState } from "react";
import { QUERY_ME } from '../utils/queries';
// import ReactDOM from "react-dom/client";
// import Auth from '../utils/auth';

const Profile = () => {

    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    });

    const user = data?.me || data?.user || {};
    // navigate to personal profile page if username is yours
    // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    //     return <Navigate to="/profile" />;
    // }

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (!user?.username) {
    //     return (
    //         <h4>
    //             You need to be logged in to see this. Use the navigation links above to
    //             sign up or log in!
    //         </h4>
    //     );
    // }

    return (
        <div className="container">
            <h1>{`Welcome ${user.firstName} ${user.lastName}`}</h1>
            <div class="card text-center">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="true" href="#">Bounties Offered</a>
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