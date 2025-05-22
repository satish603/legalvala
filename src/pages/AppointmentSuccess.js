import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const AppointmentSuccess = () => {
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointmentData"));
    setAppointmentData(data);
    localStorage.removeItem("appointmentData");
  }, []);

  return (
    <div className="appointment-success-wrapper d-flex justify-content-center align-items-center min-vh-100">
      <div className="appointment-success-card text-center p-4 p-md-5 shadow-lg rounded-4 bg-white w-100">
        <div className="checkmark-icon mb-3 mx-auto">
          <FaCheckCircle size={60} color="#28a745" />
        </div>
        <h2 className="text-success mb-3">Appointment Confirmed!</h2>
        <p className="text-muted mb-4">We’ll contact you shortly with the details below:</p>

        {appointmentData && (
          <div className="appointment-details text-start mx-auto mb-4" style={{ maxWidth: "400px" }}>
            <p><strong>Name:</strong> {appointmentData.name}</p>
            <p><strong>Email:</strong> {appointmentData.email}</p>
            <p><strong>Phone:</strong> {appointmentData.phone}</p>
            <p><strong>Date:</strong> {appointmentData.date?.toString()}</p>
            <p><strong>Time:</strong> {appointmentData.time}</p>
          </div>
        )}

        <Link to="/" className="btn btn-primary mt-3 px-4 py-2">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default AppointmentSuccess;
