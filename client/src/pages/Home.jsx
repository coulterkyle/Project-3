import background from '../assets/backgroundImg3.png'
import logo from '../assets/BugDebugger.png'
import { Link } from 'react-router-dom';

const Home = () => {
  return (

    <div>
      <div id="hero" style={{ backgroundImage: `url(${background})` }}>
        <div className="container col-xl-8 px-4 py-1" >
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={logo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold  text-success lh-1 mb-3">ARE YOU READY TO HUNT?</h1>
              <p class="lead">Some quorky stuff about debugging other developers' apps.</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                {/* sending to signup for now - can change or add different logic */}
                <Link className="btn btn-success btn-lg px-4 me-md-2" to="/signup">Join the Hunt</Link>

              </div>
            </div>
          </div>
        </div>
      </div>


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
    </div>
  );
};

export default Home;
