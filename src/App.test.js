import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import App from './App';

jest.mock('./components/CommitHistoryList', () => {
  return () => <div data-testid="commit-history-list-mock"></div>
});

jest.mock('./components/Header', () => {
  return () => <div data-testid="header-mock"></div>
});

test('renders App component', () => {
  const { getByTestId } = render(<App />);
  const headerElement = getByTestId('header-mock');
  expect(headerElement).toBeInTheDocument();
});

test('renders radio buttons with repo names', () => {
  const { getByText } = render(<App />);
  const apiRepoElement = getByText('API commits');
  const webRepoElement = getByText('WEB commits');
  expect(apiRepoElement).toBeInTheDocument();
  expect(webRepoElement).toBeInTheDocument();
});
