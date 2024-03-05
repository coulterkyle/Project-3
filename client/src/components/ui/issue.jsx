import Modal from './modal';
import ClaimBtn from '../claimBtn';


export default function issue({ issues }) {

    const setFormValues = (event) => {
        /* Sets form values on modal to the current clicked on issue */
        const bountyValues = document.getElementById(event.currentTarget.id)
        document.getElementById('amount').value = 10
        document.getElementById('item').value = bountyValues.id
        document.getElementById('name').value = bountyValues.dataset.title
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
                            data-bs-target="#modal"
                            data-title={data.title}
                            data-body={data.body}
                            onClick={setFormValues}
                        >
                            {data.bounty}
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                        </button>
                        <ClaimBtn />
                    </li>
                )}
            </ul>

            <Modal />
        </div>
    );
}