import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DoctorSchedule = () => {
  // Sample schedule data
  const schedule = [
    { id: 'slotId_1', startTime: '09:00 AM', endTime: '10:00 AM', available: true },
    { id: 'slotId_2', startTime: '10:00 AM', endTime: '11:00 AM', available: false },
    { id: 'slotId_3', startTime: '11:00 AM', endTime: '12:00 PM', available: true },
    { id: 'slotId_4', startTime: '01:00 PM', endTime: '02:00 PM', available: true },
    { id: 'slotId_5', startTime: '02:00 PM', endTime: '03:00 PM', available: false },
    { id: 'slotId_6', startTime: '03:00 PM', endTime: '04:00 PM', available: true },
  ];

  return (
    <div className="container mt-5">
      <h2>Doctor Schedule</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Slot</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map(slot => (
            <tr key={slot.id}>
              <td>{slot.startTime} - {slot.endTime}</td>
              <td>
                {slot.available ? (
                  <span className="badge bg-success">Available</span>
                ) : (
                  <span className="badge bg-danger">Booked</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorSchedule;
