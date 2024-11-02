import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const AppointmentForm = () => {
  const [patientId] = useState('patientId_1'); // Static patient ID
  const [name] = useState('Alice Smith'); // Static patient name
  const [contactDetails] = useState('alice@example.com'); // Static contact
  const [medicalHistory] = useState('Previous surgery in 2018'); // Static medical history
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [doctorName, setDoctorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const appointmentData = {
      patientId,
      name,
      contactDetails,
      medicalHistory,
      appointmentDate,
      appointmentTime,
      doctorName,
    };

    console.log('Appointment Data:', appointmentData);
    alert('Appointment created successfully!');
    // Here you can add logic to send this data to a server or store it
  };

  return (
    <div className="container mt-5">
      <h2>Appointment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="patientId" className="form-label">Patient ID</label>
          <input 
            type="text" 
            className="form-control" 
            id="patientId" 
            value={patientId} 
            readOnly 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            value={name} 
            readOnly 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactDetails" className="form-label">Contact Details</label>
          <input 
            type="email" 
            className="form-control" 
            id="contactDetails" 
            value={contactDetails} 
            readOnly 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="medicalHistory" className="form-label">Medical History</label>
          <textarea 
            className="form-control" 
            id="medicalHistory" 
            value={medicalHistory} 
            readOnly 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="appointmentDate" className="form-label">Appointment Date</label>
          <input 
            type="date" 
            className="form-control" 
            id="appointmentDate" 
            value={appointmentDate} 
            onChange={(e) => setAppointmentDate(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="appointmentTime" className="form-label">Appointment Time</label>
          <input 
            type="time" 
            className="form-control" 
            id="appointmentTime" 
            value={appointmentTime} 
            onChange={(e) => setAppointmentTime(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="doctorName" className="form-label">Doctor's Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="doctorName" 
            value={doctorName} 
            onChange={(e) => setDoctorName(e.target.value)} 
            required 
          />
        </div>
   <button className='btn btn-primary'><Link className="nav-link" to="/doctor-schedule">Book Appointment</Link></button> 
      </form>
    </div>
  );
}; 

export default AppointmentForm;
