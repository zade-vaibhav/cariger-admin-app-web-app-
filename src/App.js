import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/home/Home';
import Users from './Components/users/Users';
import Karigar from './Components/employee/Karigar';
import Profile from './Components/Profile/Profile';
import NewKarigar from './Components/newKarifar/NewKarigar';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={
        <>
        <Login/>
        </>
      }/>
        <Route path="/Karigar" element={
        <>
        <Navbar/>
        <Karigar/>
        </>
        }/>
        <Route path="/new/karigar" element={
        <>
        <Navbar/>
        <NewKarigar/>
        </>
      }/>
        <Route path="/Karigar/:id" element={
        <>
        <Navbar/>
        <Profile/>
        </>
        }/>
        <Route path="/users" element={
        <Users/>
        }/>
        <Route path="/auth/login" element={
        <Login/>
        }/>
         <Route path="/auth/register" element={
        <Register/>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
