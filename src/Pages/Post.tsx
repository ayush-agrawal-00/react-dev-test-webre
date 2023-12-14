import { useEffect } from 'react'
import { AppDispatch, RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/slice/mainSlice';

function Post() {
    const dispatch: AppDispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.post.posts);
  const status = useSelector((state: RootState) => state.post.status);
  const error = useSelector((state: RootState) => state.post.error);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    if(error==='Request failed with status code 401'){
        alert('Invalid Token Login Again')
        localStorage.clear()
        window.location.reload()
    }
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h2>All Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Post