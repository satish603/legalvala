import React, { useState } from "react";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Construct a query string with appointment details (optional)
    const queryParams = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      reason: formData.reason,
      date: selectedDate,
      time: selectedTime,
    });
  
    // Save to localStorage so we can read after redirect
    localStorage.setItem("appointmentData", JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      reason: formData.reason,
      date: selectedDate,
      time: selectedTime,
    }));
  
    // Redirect to Razorpay Payment Page
    window.location.href = "https://razorpay.me/@mahiconsultancy3820"; // replace with actual Razorpay link
  };
  

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="appointment-container">
      <Helmet>
        <title>Book Appointment | LegalVala</title>
        <meta name="description" content="Book a legal appointment with LegalVala experts." />
      </Helmet>

      <h2 className="appointment-title">Book Your Appointment</h2>

      {!submitted ? (
        <>
          <form onSubmit={handleSubmit} className="appointment-form">
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
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Your Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Reason for Appointment:</label>
            <input
              type="text"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
            />

            <button type="submit">Confirm Appointment</button>
            <p className="appointment-note"><strong>Please note:</strong> A small fee of ₹10 is charged to confirm your appointment. This helps us ensure commitment and provide better service.</p>
          </form>
        </>
      ) : (
        <div className="appointment-confirmation">
          <h4>Appointment Confirmed !</h4>
          <p class="center-text">We’ll contact you shortly with the details.</p>
        </div>
      )}
    </div>
  );
};

export default Appointment;
