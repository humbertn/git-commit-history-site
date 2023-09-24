import { React, useState } from 'react';
import Header from './components/Header';
import CommitHistoryList from './components/CommitHistoryList';
import { ButtonGroup, ToggleButton} from 'react-bootstrap';

function App() {
  const [repoValue, setRepoValue] = useState('git-commit-history-api');

  const repos = [
    { name: 'API commits', value: 'git-commit-history-api' },
    { name: 'WEB commits', value: 'git-commit-history-site'}
  ];

  return (
    <div className="App">      
    <Header />
      <div className="container text-center">
        <div className='row mt-5'>
          <div className='col'>
          <ButtonGroup className="mb-2">
            {repos.map((repo, idx) => (
              <ToggleButton
                key={idx}
                id={`repo-${idx}`}
                type="radio"
                variant='secondary'
                name={repo.value}
                value={repo.value}
                checked={repoValue === repo.value}
                onChange={(e) => setRepoValue(e.currentTarget.value)}
              >
                {repo.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
          </div>
        </div>
        <div className="row">          
          <div className="col commit-list-container">
            <CommitHistoryList owner="humbertn" repo={repoValue}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
