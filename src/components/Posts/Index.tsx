import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { fetchPosts } from '../../store/slice/mainSlice';
function Index() {
    const dispatch: AppDispatch = useDispatch();
    const posts = useSelector((state: RootState) => state.post.posts);
    const status = useSelector((state: RootState) => state.post.status);
    const error = useSelector((state: RootState) => state.post.error);
  
    const handlePosts =()=>{
        dispatch(fetchPosts());
    }
  return (
    <div>Index</div>
  )
}

export default Index