import logo from '../assets/BugDebugger.png'
import background from '../assets/backgroundImg3.png'

const About = () => {
  return (
    <div  style={{ backgroundImage: `url(${background})` }}>
      <div className="container my-5 bg-dark">
        <div className="row p-4  pe-lg-0  align-items-center rounded shadow-lg ">

          <div className="col-lg-2 shadow-lg">
            <img className="rounded-lg-3" src={logo} alt="" width="300" />
          </div>

          <div className="col-lg-7 p-3 p-lg-5 mx-auto pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-success text-success">About BugBounty</h1>
            <p className="lead">With an estimated 70% of apps failing due to regular upkeep, BugBounty is here to get you help.
              <br></br>
              <br></br>
              BugBounty allows you to place bounties on existing GitHub issues in your Repo.  Other developers can claim the issue, help fix the bug, and claim their bounty.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;