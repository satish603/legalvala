import React, { useState } from "react";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "./Appointment.css";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });

  const timeSlots = [
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("appointmentData", JSON.stringify({
      ...formData,
      date: selectedDate,
      time: selectedTime,
    }));

    window.location.href = "https://razorpay.me/@mahiconsultancy3820";
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="appointment-wrapper">
      <Helmet>
        <title>Book Appointment | LegalVala</title>
        <meta name="description" content="Book a legal appointment with LegalVala experts." />
      </Helmet>

      <h2 className="appointment-title">Book Your Appointment</h2>

      <div className="row" style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {/* Left: Client Info */}
        <div className="client-info-box" style={{ flex: "1" }}>
          <img src="/your-client-image.jpg" alt="Client" />
          <h4>Adv. Mahi Consultancy</h4>
          <p>LLB, Corporate Legal Advisor</p>
          <p>Bangalore, Karnataka</p>
          <p>Over 10 years of experience in handling civil, criminal, and corporate cases.</p>
        </div>

        {/* Right: Appointment Form */}
        <form onSubmit={handleSubmit} className="appointment-form" style={{ flex: "2" }}>
          <label>Select Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            placeholderText="Choose a date"
            className="form-control"
            required
          />

          <label>Select Time:</label>
          <div className="time-slots">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                className={`btn ${selectedTime === slot ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setSelectedTime(slot)}
              >
                {slot}
              </button>
            ))}
          </div>

          <label>Your Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Your Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Phone Number:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

          <label>Reason for Appointment:</label>
          <input type="text" name="reason" value={formData.reason} onChange={handleChange} required />

          <button type="submit">Confirm Appointment</button>
          <p className="appointment-note">
            <strong>Note:</strong> A small ₹10 fee confirms your slot. This helps avoid cancellations and improves service.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
