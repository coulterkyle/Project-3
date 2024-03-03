import { loadStripe } from '@stripe/stripe-js';

export default function Modal() {

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(event.target)
        try {
          console.log('amount', event.target.bountyAmount.value)
        } catch (e) {
          console.log(e);
        }
      };

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
        <div className="modal-content">
          <form id="setBounty" onSubmit={handleFormSubmit}>
            <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">New Bounty </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"></span>
            </button>
            </div>
            <div className="modal-body">
                <div className="form-group">
                <label htmlFor="bountyAmount" className="col-form-label text-success">Bounty Amount:</label>
                <input type="number" min="1" step="1" max="250" className="form-control" id="bountyAmount" />
                </div>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-success">Add Bounty</button>
            </div>
          </form>
        </div>
        </div>
        </div>
    )
}