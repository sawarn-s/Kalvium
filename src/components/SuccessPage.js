import React from 'react';

function SuccessPage({ onReturnToDashboard, onLogout }) {
  return (
    <div>
      <h2>Attendance Marked Successfully</h2>
      <p>Thank you for marking your attendance!</p>
      <button onClick={onReturnToDashboard}>Return to Dashboard</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default SuccessPage;
