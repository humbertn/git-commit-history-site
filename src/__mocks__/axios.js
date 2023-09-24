const mockCommits = [
    {
      sha: '1234567',
      commit: {
        message: 'Commit message 1',
        author: {
          date: '2023-09-01T12:00:00Z',
        },
      },
      author: {
        login: 'author1',
        avatar_url: 'avatar_url_1',
      },
    },
    {
      sha: '8901234',
      commit: {
        message: 'Commit message 2',
        author: {
          date: '2023-09-02T12:00:00Z',
        },
      },
      author: {
        login: 'author2',
        avatar_url: 'avatar_url_2',
      },
    },
];

module.exports = {
    get: jest.fn(() => Promise.resolve({data: mockCommits})),
};