export default function issue( { issues } ) {

    return (
        <div class="container" id="gh-repo-issues">
        <ul class="list-group">
            {issues.map((data, index) => 
                <li key={index} className="list-group-item d-flex align-items-center">
                <div class="badge text-bg-info rounded-pill">5</div>
                    <div class="text-start mx-2">
                        <h5 class="m-0">{data.title}</h5>
                        <small>{data.description}</small>
                    </div>
                    <a href="#" class="ms-auto btn btn-success">{data.bounty} <i class="fa-solid fa-hand-holding-dollar"></i></a>
                    <a href="#" class="mx-2 btn btn-dark" title="Claim Bounty"><i class="fa-solid fa-virus-slash"></i></a>
                </li>
            )}
        </ul>
        </div>
    );
}