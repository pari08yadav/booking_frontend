import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login'); // Navigate to the Login page
  };

  const handleSignup = () => {
    navigate('/signup'); // Navigate to the Signup page (if implemented)
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">
            <Link to="/">Booking</Link>
        </div>
        <div className="nav-buttons">
          <button className="btn" onClick={handleLogin}>
            Login
          </button>
          <button className="btn" onClick={handleSignup}>
            Signup
          </button>
        </div>
      </nav>
      <div className="welcome-message">
        <h1>Welcome to Booking</h1>
        <p>Book your rides easily and conveniently.</p>
      </div>
    </div>
  );
};

export default Home;
