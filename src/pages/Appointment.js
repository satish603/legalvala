import React, { useState } from "react";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Appointment.css"; // You can style this separately

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
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send this to backend
    console.log({ ...formData, selectedDate, selectedTime });
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="appointment-page container my-5">
      <Helmet>
        <title>Book Appointment | LegalVala</title>
        <meta name="description" content="Book a legal appointment with LegalVala experts." />
      </Helmet>

      <h2 className="text-center mb-4">Book Your Appointment</h2>

      {!submitted ? (
        <>
          <div className="calendar-section mb-4">
            <label>Select Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={new Date()}
              placeholderText="Choose a date"
              className="form-control"
            />
          </div>

          <div className="time-slots mb-4">
            <label>Select Time:</label>
            <div className="d-flex flex-wrap gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  className={`btn ${selectedTime === slot ? "btn-primary" : "btn-outline-primary"}`}
                  onClick={() => setSelectedTime(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="reason"
                className="form-control"
                placeholder="Reason for Appointment"
                value={formData.reason}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-success">
                Confirm Appointment
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="confirmation text-center">
          <h4 className="text-success mt-5">Appointment Confirmed!</h4>
          <p>We’ll contact you shortly with the details.</p>
        </div>
      )}
    </div>
  );
};

export default Appointment;
