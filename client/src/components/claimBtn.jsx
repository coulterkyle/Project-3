import { useState } from 'react';

function ClaimBtn() {
    const [btnState, setBtnState] = useState(false);

    function handleClick() {
        setBtnState(btnState => !btnState);
    }

    let toggleClassCheck = btnState ? ' disabled' : '';

    return (
        <a
            className={`mx-2 btn btn-dark${toggleClassCheck}`}
            id="splatBtn"
            onClick={handleClick}
            title="Claim Bounty"
            href="mailto:example@example.com">
            <i className="fa-solid fa-virus-slash"></i></a>
    )
}

export default ClaimBtn;