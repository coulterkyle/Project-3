import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME, QUERY_USERS } from '../utils/queries';
import MyBounties from '../components/myBounties';
import MyClaims from '../components/myClaims';
import { ADD_GITHUBUSERNAME } from '../utils/mutations';
import { useEffect } from 'react';


const Profile = () => {

    const { loading, data } = useQuery(QUERY_ME);

    const user = data?.me.firstName + ' ' + data?.me.lastName || [];

    const [addGithubUsername, { error }] = useMutation(ADD_GITHUBUSERNAME);


    //oauth
    const CLIENT_ID = '6073f6de696178eb4484'

    function loginWithGithub() {
        window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID);
    }

    useEffect(() => {
        debugger
        if (localStorage.getItem('accessToken') === null) {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const codeParam = urlParams.get('token');
            console.log('code param', codeParam)
debugger
            if (codeParam && (localStorage.getItem('accessToken') === null)) {
                localStorage.setItem('accessToken', codeParam);
                getUserData()
            }
        }
        async function getUserData() {
            debugger
            try {
                const response = await fetch(
                    'http://localhost:3001/getUserData', {
                    method: 'GET',
                    headers:
                    {
                        'Authorization': "Bearer " + localStorage.getItem('accessToken')// Bearer Authorization
                    }
                })
debugger
                const data = await response.json()
                console.log(data)
                debugger
                await addGithubUsername({
                    variables: {
                        githubUsername: data.login,
                    },
                });
            } catch (err) {
                console.error(err)
            }
        }
    }, [])

    if (loading) return <div className="container">Loading profile, please wait...</div>



    return (
        <div className="container">
            <h1>{`Welcome ${user}`}</h1>
            <button onClick={loginWithGithub}>Verify your account with Github</button>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" fdprocessedid="zc7rwf">
                            Bounties Offered
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapsed collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <MyBounties />
                            {/* <ul>
                                <li>My Bounties offered</li>
                                <li>Will have to be listed here</li>
                            </ul> */}
                            {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" fdprocessedid="tbazrz">
                            Bounties Claimed
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <MyClaims />
                            {/* <ul>
                                <li>My Bounties claimed</li>
                                <li>Will have to be listed here</li>
                            </ul> */}
                            {/* <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Profile;