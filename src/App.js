import React from 'react';
import Header from './components/Header';
import CommitHistoryList from './components/CommitHistoryList';

function App() {
  return (
    <div className="App">      
    <Header />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <CommitHistoryList owner="humbertn" repo="git-commit-history-site"/>
          </div>
          <div className="col">
            <CommitHistoryList owner="humbertn" repo="git-commit-history-api"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
