import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from './firebase.config'; // Import Firebase config
import { collection, addDoc, getDocs, deleteDoc, doc , updateDoc } from 'firebase/firestore';

const CreateAppointment = () => {
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [patientName, setPatientName] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [message, setMessage] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentAppointmentId, setCurrentAppointmentId] = useState('');


  

  // Sample doctor data
  const doctorData = {
    id: 'doctorId_1',
    name: 'Dr. John Doe',
    specialization: 'Cardiologist',
    contactInfo: 'contact@example.com',
    schedule: [
      { id: 'slotId_1', startTime: '09:00 AM', endTime: '10:00 AM', available: true },
      { id: 'slotId_2', startTime: '10:00 AM', endTime: '11:00 AM', available: false },
      { id: 'slotId_3', startTime: '11:00 AM', endTime: '12:00 PM', available: true },
    ],
  };

  useEffect(() => {
    setDoctor(doctorData);
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const appointmentsCollection = collection(db, 'appointments');
    const appointmentSnapshot = await getDocs(appointmentsCollection);
    const appointmentList = appointmentSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setAppointments(appointmentList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!patientName || !selectedSlot) {
      setMessage('Please fill in all fields.');
      return;
    }

    const appointmentData = {
      doctorId: doctor.id,
      patientName,
      slot: selectedSlot,
      timestamp: new Date().toISOString(),
    };

    try {
      if (isUpdating) {
        const appointmentRef = doc(db, 'appointments', currentAppointmentId);
        await updateDoc(appointmentRef, appointmentData);
        setMessage('Appointment updated successfully.');
      } else {
        await addDoc(collection(db, 'appointments'), appointmentData);
        setMessage('Appointment created successfully.');
        
      }
      setPatientName('');
      setSelectedSlot('');
      setIsUpdating(false);
      fetchAppointments(); // Refresh appointments
    } catch (error) {
      console.error("Error adding/updating document: ", error);
      setMessage('Error creating/updating appointment.');
    }
  };

  const handleEdit = (appointment) => {
    setPatientName(appointment.patientName);
    setSelectedSlot(appointment.slot);
    setCurrentAppointmentId(appointment.id);
    setIsUpdating(true);
  };

  const handleCancel = async (id) => {
    try {
      await deleteDoc(doc(db, 'appointments', id));
      setMessage('Appointment canceled successfully.');
      fetchAppointments(); // Refresh appointments
    } catch (error) {
      console.error("Error deleting document: ", error);
      setMessage('Error canceling appointment.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>{isUpdating ? 'Update Appointment' : 'Create Appointment'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Doctor:</label>
          <input type="text" className="form-control" value={doctor?.name} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Specialization:</label>
          <input type="text" className="form-control" value={doctor?.specialization} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Info:</label>
          <input type="text" className="form-control" value={doctor?.contactInfo} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Patient Name:</label>
          <input
            type="text"
            className="form-control"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Select Slot:</label>
          <select
            className="form-select"
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
            required
          >
            <option value="">Choose a slot...</option>
            {doctor?.schedule.map(slot => (
              slot.available && (
                <option key={slot.id} value={`${slot.startTime} - ${slot.endTime}`}>
                  {slot.startTime} - {slot.endTime}
                </option>
              )
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">{isUpdating ? 'Update Appointment' : 'Create Appointment'}</button>
      </form>
      {message && <div className="mt-3 alert alert-info">{message}</div>}
      
      <h3 className="mt-5">Your Appointments</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Slot</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.patientName}</td>
              <td>{appointment.slot}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => handleEdit(appointment)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleCancel(appointment.id)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreateAppointment;
