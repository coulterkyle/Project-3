import cancel from '../assets/cancel.jpg'
import background from '../assets/backgroundImg3.png'

const Cancel = () => {
    return (
      <div  style={{ backgroundImage: `url(${background})` }}>
        <div className="container my-5 bg-dark">
          <div className="row p-4  pe-lg-0  align-items-center rounded shadow-lg ">
  
            <div className="col-lg-2 shadow-lg">
              <img className="rounded-lg-3" src={cancel} alt="" width="300" />
            </div>
  
            <div className="col-lg-7 p-3 p-lg-5 mx-auto pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-success text-danger">PAYMENT CANCELLED</h1>
              <p className="lead">Now this won't get fixed...</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cancel;