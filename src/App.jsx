import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import SearchTrain from './components/SerachTrain';
import BaseLayout from './components/BaseLayout';


function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          {/* Define the route for the Home page */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search/train" element={<SearchTrain />} />
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;
