import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchTrain = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login"); // Redirect to login if the user is not authenticated
    }
  }, [navigate]);

  const handleSearch = async () => {
    const token = localStorage.getItem("authToken");
    
    if (!token) {
      setError("You must be logged in to search for trains.");
      return;
    }
    
    if (!source || !destination) {
      setError("Please fill in all fields.");
      return;
    }
    
    try {
      console.log(source, destination, date)
      const response = await axios.get("http://127.0.0.1:8000/api/search/tickets/", {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the header
        },
        params: { source, destination, date },
        
      });
      console.log(token)
      setResults(response.data);
      setError("");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Unauthorized. Please log in again.");
        localStorage.removeItem("authToken"); // Clear token
        navigate("/login");
      } else {
        setError("No trains found for the given criteria.");
        setResults([]);
      }
    }
  };

  return (
    <div className="search-train-container">
      <h1>Search Train</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="results">
        {results.length > 0 ? (
          results.map((ticket, index) => (
            <div key={index} className="result-item">
              <h3>{ticket.train.name} ({ticket.train.train_number})</h3>
              <p>
                From: {ticket.train.source} To: {ticket.train.destination}
              </p>
              <p>
                Departure: {ticket.train.departure_time} Arrival: {ticket.train.arrival_time}
              </p>
              <p>Date: {ticket.date}</p>
              <p>Available Seats: {ticket.available_seats}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchTrain;
