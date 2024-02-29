import { useState, useEffect } from 'react';
import Auth from '../utils/auth.js';

const SearchIssues = () => {
    // create state for holding returned Github api data
    const [searchedIssues, setSearchedIssues] = useState([]);
    // create state for holding our search field data
    const [userSearchInput, setUserSearchInput] = useState('');
    const [repoSearchInput, setRepoSearchInput] = useState('');

    // create state to hold saved issue Id values
    const [savedIssueIds, setSavedIssueIds] = useState(getSavedIssueIds());

    const [saveIssue, { error }] = useMutation(SAVE_ISSUE);


    useEffect(() => {
        return () => saveIssueIds(savedIssueIds);
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!userSearchInput || !repoSearchInput) {
            return false;
        }

        try {
            const response = await searchGithubIssues(searchInput);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { items } = await response.json();

            const bookData = items.map((issue) => ({
                issueId: issue.id,
                owner: issue.owner.login,
                title: issue.title,
                state: issue.state,
            }));

            setSearchedBooks(bookData);
            setUserSearchInput('');
            setRepoSearchInput('');
        } catch (err) {
            console.error(err);
        }
    };

    // create function to handle saving an issue to our database
    const handleSaveIssue = async (issueId) => {
        // find the issue in `searchedIssue` state by the matching id
        const issueToSave = searchedIssue.find((issue) => issue.issueId === issueId);

        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await saveIssue({
                variables: { ...issueToSave },
            });
            setSavedIssueIds([...savedIssueIds, issueToSave.issueId]);
        } catch (err) {
            console.error(err);
        }
    };
};

export default SearchIssues;
