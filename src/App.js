import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import AttendanceModal from './components/AttendanceModal';
import SuccessPage from './components/SuccessPage';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessPageVisible, setIsSuccessPageVisible] = useState(false);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleMarkAttendance = () => {
    setIsModalOpen(true);
  };

  const handleConfirmAttendance = () => {
    setIsModalOpen(false);
    setIsSuccessPageVisible(true);
  };

  const handleReturnToDashboard = () => {
    setIsSuccessPageVisible(false);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setIsSuccessPageVisible(false);
  };

  return (
    <div className="App">
      {loggedInUser ? (
        isSuccessPageVisible ? (
          <SuccessPage
            onReturnToDashboard={handleReturnToDashboard}
            onLogout={handleLogout}
          />
        ) : (
          <Dashboard
            className="Math Class"
            date="August 28, 2023"
            onMarkAttendance={handleMarkAttendance}
          />
        )
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}

      {isModalOpen && (
        <AttendanceModal
          studentName={loggedInUser}
          onClose={() => setIsModalOpen(false)}
          onConfirmAttendance={handleConfirmAttendance}
        />
      )}
    </div>
  );
}

export default App;
