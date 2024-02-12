import './App.css';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import { AppDispatch, RootState } from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'
import { updateToken } from './store/slice/authSlice';


function PrivateRoute(props:any) {
  const auth = useSelector((state: RootState) => state.auth.token);
  return auth.length>0 ? props.children : <Navigate to="/login" />;
}
function App() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token !== null)
    {
      dispatch(updateToken(token))
    }
  }, [dispatch])
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignUp />} /> 
        <Route path='/dashboard' element={<PrivateRoute><h1>Dashboard</h1></PrivateRoute>}/>
      </Routes>
    </Router>
  );
}

export default App;
