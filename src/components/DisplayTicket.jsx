import React from "react";
import { useLocation } from "react-router-dom";

const DisplayTicket = () => {
    const location = useLocation();
    const { bookings } = location.state || {}; // Retrieve the bookings data passed from the BookTicket component

    if (!bookings) {
        return <div className="no-booking-message">No booking data found.</div>;
    }

    return (
        <div className="ticket-details-container">
            <h2>Your Ticket Details</h2>
            <table className="ticket-table">
                <thead>
                    <tr>
                        <th>Passenger Name</th>
                        <th>Passenger Age</th>
                        <th>Class Type</th>
                        <th>Total Fare</th>
                        <th>Train Name</th>
                        <th>Train Number</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Date</th>
                        <th>Seat Number</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                        <tr key={index}>
                            <td>{booking.passenger_name}</td>
                            <td>{booking.passenger_age}</td>
                            <td>{booking.class_type}</td>
                            <td>₹{booking.total_fare}</td>
                            <td>{booking.train_name}</td>
                            <td>{booking.train_number}</td>
                            <td>{booking.source}</td>
                            <td>{booking.destination}</td>
                            <td>{booking.date}</td>
                            <td>{booking.seat_number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayTicket;
