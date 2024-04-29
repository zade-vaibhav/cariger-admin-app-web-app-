import React, { useState, useEffect } from 'react';
import './Booking.css';
function BookingTable() {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingsPerPage] = useState(5); // Number of bookings to display per page

  useEffect(() => {
    // For demonstration purposes, using setTimeout to simulate API call
    setTimeout(() => {
      const dummyBookings = [
        { username: 'user1', bookingNumber: 'booking1' },
        { username: 'user2', bookingNumber: 'booking2' },
        { username: 'user3', bookingNumber: 'booking3' },
        { username: 'user4', bookingNumber: 'booking4' },
        { username: 'user5', bookingNumber: 'booking5' },
        { username: 'user6', bookingNumber: 'booking6' },
        { username: 'user7', bookingNumber: 'booking7' },
        { username: 'user8', bookingNumber: 'booking8' },
        { username: 'user9', bookingNumber: 'booking9' },
        { username: 'user10', bookingNumber: 'booking10' },
        { username: 'user11', bookingNumber: 'booking11' },
        { username: 'user12', bookingNumber: 'booking12' },
        { username: 'user13', bookingNumber: 'booking13' },
        { username: 'user14', bookingNumber: 'booking14' },
        { username: 'user15', bookingNumber: 'booking15' },
        { username: 'user16', bookingNumber: 'booking16' },
        { username: 'user17', bookingNumber: 'booking17' },
        { username: 'user18', bookingNumber: 'booking18' },
        { username: 'user19', bookingNumber: 'booking19' },
        { username: 'user20', bookingNumber: 'booking20' }
      ];
      setBookings(dummyBookings);
    }, 500); // Simulating delay of 500ms
  }, []);

  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = bookings.slice(indexOfFirstBooking, indexOfLastBooking);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Bookings Table</h1>
      <table>
        <thead>
          <tr>
            <th>Usernames</th>
            <th>Booking Numbers</th>
          </tr>
        </thead>
        <tbody>
          {currentBookings.map(booking => (
            <tr key={booking.username}>
              <td>{booking.username}</td>
              <td>{booking.bookingNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="pagination">
        {Array.from({ length: Math.ceil(bookings.length / bookingsPerPage) }, (_, i) => (
          <li key={i} className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}>
            <button onClick={() => paginate(i + 1)} className="page-link">
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingTable;
