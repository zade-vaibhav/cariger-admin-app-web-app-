import React, { useState } from 'react'; // Import useState
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/home/Home';
import Users from './Components/users/Users';
import Karigar from './Components/employee/Karigar';
import Profile from './Components/Profile/Profile';
import NewKarigar from './Components/newKarifar/NewKarigar';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import BookingTable from './Components/Bookings/Booking'; // Import BookingTable component

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Move useState inside the App component

  // Function to handle login
  const handleLogin = () => {
    setLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar loggedIn={loggedIn} />
            <Home />
          </>
        } />
        <Route path="/Karigar" element={
          <>
            <Navbar loggedIn={loggedIn} />
            <Karigar />
          </>
        } />
        <Route path="/new/karigar" element={
          <>
            <Navbar loggedIn={loggedIn} />
            <NewKarigar />
          </>
        } />
        <Route path="/Karigar/:id" element={
          <>
            <Navbar loggedIn={loggedIn} />
            <Profile />
          </>
        } />
        <Route path="/users" element={<Users loggedIn={loggedIn} />} />
        <Route path="/auth/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/auth/register" element={<Register loggedIn={loggedIn} />} />
        {/* Add a new route for the BookingTable component */}
        <Route path="/booking-table" element={<BookingTable />} />
      </Routes>
    </Router>
  );
}

export default App;
