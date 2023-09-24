import React, {useState, useEffect } from 'react';
import axios from 'axios';


function CommitHistoryList(props) {    
    const [commits, setCommits] = useState([]);

    const {
        repo,
        owner
    } = props;


    useEffect(() => {
        axios.get(`/commit-history/${owner}/${repo}`)
        .then(response => {
            setCommits(response.data);
        })
        .catch(error => {
            if(error.response) {
                console.log('Error:', error.response);
            } else {
                console.log('Error:', error.message);
            }
        });
    }, [repo, owner]);

    const getTimeSinceCommit = (commitDate) => {
        const commitTime = new Date(commitDate).getTime();
        const currentTime = new Date().getTime();
        const timeDifference = currentTime - commitTime;
        const minutes = Math.floor(timeDifference / (1000 * 60));
        if (minutes < 60) {
          return `${minutes} min ago`;
        } else if (minutes < 1440) {
          const hours = Math.floor(minutes / 60);
          return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
        } else {
          const days = Math.floor(minutes / 1440);
          return `${days} ${days === 1 ? 'day' : 'days'} ago`;
        }
      };

    return (
        <>            
            <h2>Commit History for {owner}/{repo}</h2>
            <ul>
                {commits.map(commit => (
                <li key={commit.sha}>
                    <img src={commit.author.avatar_url} alt="Author" width="50" height="50" />
                    <div>
                    <p>{commit.commit.message}</p>
                    <p>{getTimeSinceCommit(commit.committer.date)}</p>
                    <p>SHA: {commit.sha.substring(0, 7)}</p>
                    </div>
                </li>
                ))}
            </ul>
        </>
    );
}

export default CommitHistoryList;