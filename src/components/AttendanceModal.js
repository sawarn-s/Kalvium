import React from 'react';

function AttendanceModal({ studentName, onClose, onConfirmAttendance }) {
  return (
    <div className="modal">
      <h2>Confirm Attendance</h2>
      <p>{studentName}, are you present today?</p>
      <button onClick={onConfirmAttendance}>Confirm Attendance</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default AttendanceModal;
