import Issue from './ui/issue.jsx';

export default function issueList() {
  return (
    
      <Issue
        issues={[
          { title: 'xyz', description: 'An issue from GH', bounty: 25 }, 
          { title: 'abc', description: 'An issue from GH' }
        ]}
      />
  );
}
