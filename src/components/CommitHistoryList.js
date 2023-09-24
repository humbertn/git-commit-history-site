import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { ButtonGroup, ListGroup, Button} from 'react-bootstrap';


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
        <br/>           
            <h2>Commit History for {owner}/{repo}</h2>
            <br/>
            <ListGroup>
                {commits.map(currentCommit => (                    
                <ListGroup.Item key={currentCommit.sha}>
                    <div className='row'>
                        <div className='col'>
                            <div className='float-start commit-title'>
                                <b className='float-start'>{currentCommit.commit.message}</b>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='float-end'>
                                <ButtonGroup size="sm">
                                    <Button variant='primary' onClick={() => {window.open(`https://github.com/${owner}/${repo}/commit/${currentCommit.sha}`)}}>{currentCommit.sha.substring(0, 7)}</Button>
                                    <Button variant='primary' onClick={() => {window.open(`https://github.com/${owner}/${repo}/tree/${currentCommit.sha}`)}}>{"<>"}</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='commit-body float-start'>
                                <img src={currentCommit.author.avatar_url} alt="Author" className='rounded-circle float-start' width="20" height="20" />                    
                                <div className='float-start' title={new Date(currentCommit.commit.author.date)}><b> {currentCommit.author.login} </b> {getTimeSinceCommit(currentCommit.commit.author.date)} </div>
                            </div>
                        </div>
                    </div>
                </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
}

export default CommitHistoryList;