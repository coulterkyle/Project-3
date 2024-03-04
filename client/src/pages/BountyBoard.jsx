const BountyBoard = () => {
    return (
        <div>
            {/* Top Bounties */}
            <div className="container col-xxl-8 px-4 py-5" >
                <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h1 className="display-4 fw-normal text-success">Top Bounties</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            {/* Links the whole box to that particular issue */}
                            <a style={{ textDecoration: 'none' }} href="http://localhost:3000/project/coulterkyle/Project-3">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Kyle's Issue Something</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title text-success">$1,000,000</h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>Brief description</li>
                                        <li>Blah, Blah, something, something...</li>
                                    </ul>
                                    <button type="button" className="w-100 btn btn-lg btn-outline-primary btn-success">CLAIM BOUNTY</button>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            {/* Links the whole box to that particular issue */}
                            <a style={{ textDecoration: 'none' }} href="http://localhost:3000/project/coulterkyle/Project-3">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Kyle's Issue Something</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title text-success">$1,000,000</h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>Brief description</li>
                                        <li>Blah, Blah, something, something...</li>
                                    </ul>
                                    <button type="button" className="w-100 btn btn-lg btn-outline-primary btn-success">CLAIM BOUNTY</button>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            {/* Links the whole box to that particular issue */}
                            <a style={{ textDecoration: 'none' }} href="http://localhost:3000/project/coulterkyle/Project-3">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Kyle's Issue Something</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title text-success">$1,000,000</h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>Brief description</li>
                                        <li>Blah, Blah, something, something...</li>
                                    </ul>
                                    <button type="button" className="w-100 btn btn-lg btn-outline-primary btn-success">CLAIM BOUNTY</button>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* All other Bounties */}



        </div>
    );
};

export default BountyBoard;