// import React from 'react';
// import { render, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit'
// import mainSlice, { fetchPosts } from '../store/slice/mainSlice'; 
// import Post from '../Pages/Post';
// const store = configureStore({
//     reducer: {
//       post: mainSlice
//     },
//     preloadedState: {
//         post: {
//           posts: [],
//           status: 'idle',
//           error: null,
//         },
//     }
//   })

// jest.mock('../store/slice/mainSlice', () => ({
//   fetchPosts: jest.fn(),
// }));

// describe('Post component', () => {
// //   beforeEach(() => {
// //     jest.clearAllMocks();
// //   });

//   it('fetches and displays posts', async () => {
//     render(
//       <Provider store={store}>
//         <Post />
//       </Provider>
//     );

//     await waitFor(() => {
//       expect(fetchPosts).toHaveBeenCalledTimes(1);
//     },{timeout:5000});

//     // expect(screen.getByText('Loading...')).toBeInTheDocument();
//     // expect(screen.getByText('All Posts')).toBeInTheDocument();
//   });
// });
