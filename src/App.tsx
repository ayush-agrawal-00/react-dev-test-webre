import './App.css';
import Landing from './Pages/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from './Pages/Post';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/posts" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
