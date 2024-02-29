export const searchGithubIssues = (query) => {
    return fetch(`https://api.github.com/repos/${username}/${repo}/issues`);
  };
  