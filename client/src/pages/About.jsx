import logo from '../assets/BugDebugger.png'

const About = () => {
    return (
        <div class="container my-5 bg-dark">
        <div class="row p-4  pe-lg-0  align-items-center rounded shadow-lg">
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1 text-body-success text-success">About BugBounty</h1>
            <p class="lead">With an estimated 70% of apps failing due to regular upkeep, BugBounty is here to get you help.
            <br></br>
            <br></br>
            BugBounty allows you to place bounties on existing GitHub issues in your Repo.  Other developers can claim the issue, help fix the bug, and claim their bounty.</p>
          </div>
          <div class="col-lg-2 shadow-lg">
              <img class="rounded-lg-3" src={logo} alt="" width="300" />
          </div>
        </div>
      </div>
    );
  };
  
  export default About;