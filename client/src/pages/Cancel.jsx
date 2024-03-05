import cancel from '../assets/cancel.png'
import background from '../assets/backgroundImg3.png'

const Cancel = () => {
    return (
        <div className="container">
          <div className="row align-items-center">
  
            <div className="col-md-5">
              <img src={cancel} alt="" width="300" />
            </div>
  
            <div className="col-md-7 ms-auto ">
              <h2 className="fw-bold text-danger">PAYMENT CANCELLED</h2>
              <p className="lead">Now this won't get fixed...</p>
            </div>
          </div>
        </div>
    );
  };
  
  export default Cancel;