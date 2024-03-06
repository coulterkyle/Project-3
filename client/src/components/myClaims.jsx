export default function MyClaims({ issues }) {

    return (
        <div className="container" id="gh-repo-issues">
            <ul className="list-group">
                {/* {issues.map((data, index) => */}
                <li>Loading...</li>
                    {/* <li key={index} className="list-group-item d-flex align-items-center">
                        <div className="badge text-bg-info rounded-pill">{data.vote}</div>
                        <div className="text-start mx-2">
                            <h5 className="m-0">{data.title}</h5>
                            <small>{data.description}</small>
                        </div>
                        <button
                            data-bs-id={data.id}
                            className="ms-auto btn btn-success"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            data-bs-whatever={data.title}
                            data-bs-body={data.body}>
                                {data.bounty}
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                        </button>
                        <a href="#" className="mx-2 btn btn-dark" title="Claim Bounty"><i className="fa-solid fa-virus-slash"></i></a>
                    </li> */}
                {/* )} */}
            </ul>
        </div>
    );
}