import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import mainSlice, { fetchPosts } from '../store/slice/mainSlice'; // Import your fetchPosts action
import Post from '../Pages/Post';
Post
// Mock your Redux store
const store = configureStore({
    reducer: {
      post: mainSlice
    },
    preloadedState: {
        post: {
          posts: [], // Ensure posts is initialized
          status: 'idle',
          error: null,
        },
    }
  })// Add middleware if required

jest.mock('../store/slice/mainSlice', () => ({
  fetchPosts: jest.fn(),
}));

describe('Post component', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

  it('fetches and displays posts', async () => {
    render(
      <Provider store={store}>
        <Post />
      </Provider>
    );

    await waitFor(() => {
      expect(fetchPosts).toHaveBeenCalledTimes(1);
    },{timeout:5000});

    // Add your assertions here based on the component's expected behavior
    // For example:
    // expect(screen.getByText('Loading...')).toBeInTheDocument();
    // or
    // expect(screen.getByText('All Posts')).toBeInTheDocument();
    // Add more specific assertions based on your component's rendering
  });

  // Add more test cases for different status scenarios (loading, failed, etc.) if needed
});
