import Modal from './modal';

export default function issue({ issues }) {

const setFormValues = (event) => {
    /* Sets form values on modal to the current clicked on issue */
    const bountyValues = document.getElementById(event.currentTarget.id)
    document.getElementById('bountyAmount').value = 10
    document.getElementById('bountyId').value = bountyValues.id
    document.getElementById('bountyName').value = bountyValues.dataset.title
}

    return (
        <div className="container" id="gh-repo-issues">
            <ul className="list-group">
                {issues.map((data, index) =>
                    <li key={index} className="list-group-item d-flex align-items-center">
                        <div className="badge text-bg-info rounded-pill">{data.vote}</div>
                        <div className="text-start mx-2">
                            <h5 className="m-0">{data.title}</h5>
                            <small className="text-muted">GitHub Issue #{data.number} - Created by {data.user.login}</small>
                        </div>
                        <button
                            data-bs-id={data.id}
                            className="ms-auto btn btn-success"
                            id={data.id}
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            data-title={data.title}
                            data-body={data.body}
                            onClick={setFormValues}   
                        >
                                {data.bounty}
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                        </button>
                        <a href="#" className="mx-2 btn btn-dark" title="Claim Bounty"><i className="fa-solid fa-virus-slash"></i></a>
                    </li>
                )}
            </ul>

            <Modal />
        </div>
    );
}