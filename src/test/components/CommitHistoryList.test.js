import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import axios from 'axios';
import CommitHistoryList from '../../components/CommitHistoryList';

describe('CommitHistoryList', () => {
  const owner = 'exampleOwner';
  const repo = 'exampleRepo';

  it('renders the component with commit history', async () => {
    const { getByText } = render(
      <CommitHistoryList owner={owner} repo={repo} />
    );
        
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(`/commit-history/${owner}/${repo}`);
      expect(getByText('Commit message 1')).toBeInTheDocument();
      expect(getByText('Commit message 2')).toBeInTheDocument();
    });
  });

  it('renders buttons by commit', async () => {
    const { getByTestId } = render(
      <CommitHistoryList owner={owner} repo={repo} />
    );

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(`/commit-history/${owner}/${repo}`);
      expect(getByTestId('commit-sha-1234567')).toBeInTheDocument();
      expect(getByTestId('commit-sha-8901234')).toBeInTheDocument();
    });
  });
});
