import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

export default function MyBounties() {
    
    const { loading, data } = useQuery(QUERY_ME);
    if(loading) return <div className="container">Loading bounties, please wait...</div>
    console.info('MyBounties:', data.me.savedIssues)

    return (
        <div className="container" id="gh-repo-issues">
            <ul className="list-group">
                {data.me.savedIssues.map((data, index) => 
                    <li key={index} className="list-group-item d-flex align-items-center">
                        <div className="badge text-bg-info rounded-pill">{data.vote}</div>
                        <div className="text-start mx-2">
                            <h5 className="m-0">{data.title}</h5>
                            <small>{data.description}</small>
                        </div>
                        <button className="ms-auto btn btn-success" type="button">
                            {data.bounty}
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                        </button>
                        <a href="#" className="mx-2 btn btn-dark" title="Claim Bounty"><i className="fa-solid fa-virus-slash"></i></a>
                    </li>
                )}
            </ul>
        </div>
    );
}