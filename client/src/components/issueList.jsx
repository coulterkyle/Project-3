import Issue from './ui/issue.jsx';
// Need to add some sort of functionality to the `bounty` to allow it to know if it should say 'Contribute' or 'Dollar Amt' instead of passing it explicit

export default function issueList() {
  return (
    
      <Issue
        issues={[
          { title: 'xyz', description: 'An issue from GH', vote: 5, bounty: '$25' }, 
          { title: 'abc', description: 'An issue from GH', vote: 0, bounty: 'Contribute' }
        ]}
      />
  );
}
