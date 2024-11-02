import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const doctors = [
  {
    id: 1,
    name: "Dr. Alice Smith",
    specialty: "Cardiologist",
    schedule: [
      { day: "Monday", time: "9:00 AM - 12:00 PM" },
      { day: "Wednesday", time: "1:00 PM - 4:00 PM" },
    ],
  },
  {
    id: 2,
    name: "Dr. Bob Johnson",
    specialty: "Dermatologist",
    schedule: [
      { day: "Tuesday", time: "10:00 AM - 2:00 PM" },
      { day: "Thursday", time: "3:00 PM - 5:00 PM" },
    ],
  },
  {
    id: 3,
    name: "Dr. Carol Lee",
    specialty: "Pediatrician",
    schedule: [
      { day: "Friday", time: "8:00 AM - 11:00 AM" },
      { day: "Saturday", time: "12:00 PM - 3:00 PM" },
    ],
  },
];

const DoctorSchedule = () => {
  return (
    <div className="container mt-5">
      <h2>Available Doctors</h2>
      <div className="row">
        {doctors.map((doctor) => (
          <div className="col-md-4 mb-4" key={doctor.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{doctor.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{doctor.specialty}</h6>
                <h6>Schedule:</h6>
                <ul className="list-unstyled">
                  {doctor.schedule.map((slot, index) => (
                    <li key={index}>
                      <strong>{slot.day}:</strong> {slot.time}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link  to="/patient"><button className='btn btn-primary mx-3 ' >Book Appointment</button></Link>

    </div>
  );
};

export default DoctorSchedule;
