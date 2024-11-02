import React from 'react';
import './Home.css'; // Optional: for additional custom styling
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='position-relative'>
      <img
        src="./doctors.jpg" width={1360}// Placeholder image
        alt="Background"
        className="img-fluid"
      />
      <div className="overlay1 mt-5 text-center">
      <h1 className='text-dark'>Welcome to Dostris</h1>
      <p>Your go-to platform for managing doctor appointments<br></br> and schedules.</p>
       <Link  to="/createappointment"><button className='btn btn-primary' >I'm A Doctor</button></Link>
       <Link  to="/bookappointment"><button className='btn btn-primary mx-3' >I'm A Patient</button></Link>
        
      </div>
    </div>
  );
};

export default Home;