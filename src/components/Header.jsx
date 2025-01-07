import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // Check if the user is logged in
  const isLoggedIn = !!localStorage.getItem("authToken");

  const handleLogin = () => {
    navigate("/login"); // Navigate to the Login page
  };

  const handleSignup = () => {
    navigate("/signup"); // Navigate to the Signup page
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove the token from localStorage
    navigate("/"); // Redirect to the home page
  };

  const handleSearchTrain = () => {
    navigate("/search/train"); // Navigate to the Search Train page
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Booking</Link>
        </div>
        <div className="nav-buttons">
          {!isLoggedIn ? (
            <>
              <button className="btn" onClick={handleLogin}>
                Login
              </button>
              <button className="btn" onClick={handleSignup}>
                Signup
              </button>
            </>
          ) : (
            <>
              <button className="btn" onClick={handleSearchTrain}>
                Search Train
              </button>
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
