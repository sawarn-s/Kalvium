import React from 'react';

function Dashboard({ className, date, onMarkAttendance }) {
  return (
    <div>
      <h1>{className}</h1>
      <p>Date: {date}</p>
      <button onClick={onMarkAttendance}>Mark Attendance</button>
    </div>
  );
}

export default Dashboard;
