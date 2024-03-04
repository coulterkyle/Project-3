import success from '../assets/success.png'
import background from '../assets/backgroundImg3.png'

const Success = () => {
    return (
      <div  style={{ backgroundImage: `url(${background})` }}>
        <div className="container my-5 bg-dark">
          <div className="row p-4  pe-lg-0  align-items-center rounded shadow-lg ">
  
            <div className="col-lg-2 shadow-lg">
              <img className="rounded-lg-3" src={success} alt="" width="300" />
            </div>
  
            <div className="col-lg-7 p-3 p-lg-5 mx-auto pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-success text-success">BOUNTY RECEIVED</h1>
              <p className="lead">Thank you for your bounty for XX issue.
                <br></br>
                <br></br>
                Now we wait...</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Success;