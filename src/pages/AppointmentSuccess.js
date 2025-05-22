import React, { useEffect, useState } from "react";

const AppointmentSuccess = () => {
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointmentData"));
    setAppointmentData(data);
    // Optionally clear storage
    localStorage.removeItem("appointmentData");
  }, []);

  return (
    <div className="appointment-page container my-5 text-center">
      <h4 className="text-success mt-5">Appointment Confirmed!</h4>
      <p class="center-text">We’ll contact you shortly with the details.</p>

      {appointmentData && (
        <div className="mt-3">
          <strong>Name:</strong> {appointmentData.name} <br />
          <strong>Email:</strong> {appointmentData.email} <br />
          <strong>Phone:</strong> {appointmentData.phone} <br />
          <strong>Date:</strong> {appointmentData.date?.toString()} <br />
          <strong>Time:</strong> {appointmentData.time}
        </div>
      )}
    </div>
  );
};

export default AppointmentSuccess;
