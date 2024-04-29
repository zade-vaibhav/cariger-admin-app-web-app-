// BookingTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookingTable() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('YOUR_API_ENDPOINT_HERE');
      setBookings(response.data.bookings);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  return (
    <div className='content'>
      <h1>Bookings Table</h1>
    </div>
  );
}

export default BookingTable;
