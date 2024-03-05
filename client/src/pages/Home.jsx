import background from '../assets/backgroundImg3.png'
import logo from '../assets/BugDebugger-nobg-shadow.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';

const Home = () => {

  // if (localStorage.getItem('accessToken') === null){
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get('token');
    console.log('code param',codeParam)

    if(codeParam && (localStorage.getItem('accessToken') === null)) {
      localStorage.setItem('accessToken', codeParam);
    }

  }, [])

  async function getUserData(){
    await fetch('http://localhost:3001/getUserData', {
      method: 'GET',
      headers: {
        'Authorization' : "Bearer " + localStorage.getItem('accessToken')// Bearer Authorization
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data)
    })
  }

  getUserData();
// }


  return (

    <div className="container-fluid px-0">
      <div id="hero" style={{ backgroundImage: `url(${background})` }}>
        <div className="container col-xl-8" >
          <div className="row flex-md-row-reverse align-items-center">
            <div className="col-10 col-sm-8 col-md-4">
              <img src={logo} className="d-none d-md-block" alt="Bug Bounty Hunter" width="300" height="300" loading="lazy" />
            </div>
            <div className="col-md-8">
              <h2 className="fw-bold text-success">ARE YOU READY TO HUNT?</h2>
              <p className="lead">Some quorky stuff about debugging other developers' apps.</p>
              <div className="d-grid d-md-flex justify-content-md-start">
                {/* sending to signup for now - can change or add different logic */}
                <Link className="btn btn-success btn-lg px-4 me-md-2" to="/signup">Join the Hunt</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container col-xxl-8 py-2" >
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h2 className="fw-bold text-success">Top Bounties</h2>
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
