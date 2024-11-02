// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const RegistrationForm = () => {
//   const [doctor, setDoctor] = useState({
//     name: '',
//     specialization: '',
//     contactInfo: '',
//   });

//   const [patient, setPatient] = useState({
//     name: '',
//     contactDetails: '',
//     medicalHistory: '',
//   });

//   const handleDoctorChange = (e) => {
//     setDoctor({ ...doctor, [e.target.name]: e.target.value });
//   };

//   const handlePatientChange = (e) => {
//     setPatient({ ...patient, [e.target.name]: e.target.value });
//   };

//   const handleDoctorSubmit = (e) => {
//     e.preventDefault();
//     console.log('Doctor Registration:', doctor);
//     // Here, you would typically send the data to your backend
//   };

//   const handlePatientSubmit = (e) => {
//     e.preventDefault();
//     console.log('Patient Registration:', patient);
//     // Here, you would typically send the data to your backend
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Doctor Registration</h2>
//       <form onSubmit={handleDoctorSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             name="name"
//             value={doctor.name}
//             onChange={handleDoctorChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Specialization</label>
//           <input
//             type="text"
//             className="form-control"
//             name="specialization"
//             value={doctor.specialization}
//             onChange={handleDoctorChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Contact Information</label>
//           <input
//             type="email"
//             className="form-control"
//             name="contactInfo"
//             value={doctor.contactInfo}
//             onChange={handleDoctorChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Register Doctor</button>
//       </form>

//       <hr />

//       <h2>Patient Registration</h2>
//       <form onSubmit={handlePatientSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             name="name"
//             value={patient.name}
//             onChange={handlePatientChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Contact Details</label>
//           <input
//             type="email"
//             className="form-control"
//             name="contactDetails"
//             value={patient.contactDetails}
//             onChange={handlePatientChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Medical History</label>
//           <textarea
//             className="form-control"
//             name="medicalHistory"
//             value={patient.medicalHistory}
//             onChange={handlePatientChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Register Patient</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;













import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import DoctorSchedule from './DoctorSchedule';
import Patient from './Patient'
import CreateAppointment from './CreateAppointment'
import BookAppointment from './BookAppointment'
import Login from './Login';
import RegisterForm from './RegisterForm';
import About from './About'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor-schedule" element={<DoctorSchedule />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/createappointment" element={<CreateAppointment />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registerform" element={<RegisterForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;


