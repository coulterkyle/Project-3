import Issue from './ui/issue.jsx';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Need to add some sort of functionality to the `bounty` to allow it to know if it should say 'Contribute' or 'Dollar Amt' instead of passing it explicit
// Reference 22-State | 12-Stu_Hooks-Review

export default function issueList() {

  const { userId, repoId } = useParams()
  const [issues, setIssues] = useState([])

  useEffect(() => {
    getRepoIssues(userId, repoId)
  }, [])

  const getRepoIssues = async (username, repo) => {
    //let issuesURL = `https://api.github.com/repos/${repo}/issues?direction=asc`;
    let issuesURL = `https://api.github.com/repos/${username}/${repo}/issues?direction=asc`;
    const response = await fetch(issuesURL);
    const data = await response.json();
    console.info("GitHub Data", data)
    /* 
      Need to create a function to map through data and format like the 'formattedIssues' below
        data.map((issue, index) => {
          
        })
    */
    setIssues(data)
  };
  
  // We need to 'map' through the returned data and match it to our database
  // =========================
  // const formattedIssues = [
  //   { title: 'xyz', description: 'An issue from GH', vote: 5, bounty: '$25' }, 
  //   { title: 'abc', description: 'An issue from GH', vote: 0, bounty: 'Contribute' }
  // ]

  return <Issue issues={issues} />;

}
