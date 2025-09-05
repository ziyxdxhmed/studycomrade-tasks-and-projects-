import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostsList from './PostsList';
import PostDetail from './PostDetail';

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Posts List</Link>
        <Link to="/post/1">Post Detail</Link>
      </nav>

      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/post/1" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
