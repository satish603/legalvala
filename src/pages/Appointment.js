import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, addDays } from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = 'https://legalvala-appointment.vercel.app';

const fetchSlots = async (dateStr) => {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/slot/get?date=${dateStr}`);
    if (!response.ok) throw new Error("Failed to fetch slots");
    const data = await response.json();
    return data.availableSlots || [];
  } catch (err) {
    console.error("Error fetching slots:", err);
    return [];
  }
};

const blockSlot = async (formData) => {
  const res = await fetch(`${BASE_URL}/api/v1/slot/block`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  return res.ok;
};

const bookSlot = async (formData) => {
  formData.key = 'THEBRCHUB';
  const res = await fetch(`${BASE_URL}/api/v1/slot/book`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  return res.ok;
};

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", mobile: "", reason: "", consultationType: "",
  });
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    if (!selectedDate) {
      setTimeSlots([]);
      return;
    }

    const loadSlots = async () => {
      const dateStr = format(selectedDate, "yyyy-MM-dd");
      setLoading(true);
      const slots = await fetchSlots(dateStr);
      setTimeSlots(slots);
      setSelectedTime("");
      setLoading(false);

      if (slots.length === 0) {
        toast.info("No available slots for the selected date.");
      }
    };

    loadSlots();
  }, [selectedDate]);


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      toast.error("Please select a valid date and time slot.");
      return;
    }

    const submissionData = {
      ...formData,
      date: format(selectedDate, "yyyy-MM-dd"),
      timeSlot: selectedTime,
    };

    try {
      setLoading(true);
      const blocked = await blockSlot(submissionData);
      if (!blocked) throw new Error("Slot booking failed! Please select different slot");

      const booked = await bookSlot(submissionData);
      if (!booked) throw new Error("Slot booking failed! Please select different slot");

      // Refresh slots BEFORE showing success toast
      const refreshedSlots = await fetchSlots(submissionData.date);
      setTimeSlots(refreshedSlots);
      setSelectedTime("");

      toast.success("Appointment booked successfully! Details will be sent to email.");
    } catch (err) {
      console.error(err);

      //  Refresh slots BEFORE showing error toast
      const refreshedSlots = await fetchSlots(submissionData.date);
      setTimeSlots(refreshedSlots);
      setSelectedTime("");

      toast.error(err.message || "Booking failed. Try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="appointment-wrapper" style={{ position: "relative", padding: "1rem" }}>
      <Helmet>
        <title>Book Appointment | LegalVala</title>
      </Helmet>

      <ToastContainer position="top-center" autoClose={5000} />
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}

      <h2 className="appointment-title">Book Your Appointment</h2>

      <div className="row" style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {/* Left: Client Info */}
        <div className="client-info-box" style={{ flex: "1" }}>
          <div className="d-flex flex-column align-items-center text-center mb-3">
            <img src="/your-client-image.png" alt="Himanshu" className="rounded img-thumbnail mb-3"
              style={{ width: "180px", height: "180px", objectFit: "cover" }} />
            <h4 style={{ color: "#c2b697" }}>Himanshu</h4>
          </div>
          <div className="text-light" style={{ textAlign: "left" }}>
            <p><strong>Designation:</strong> Business Consultant / Legal Advisor</p>
            {/* ...rest of the info... */}
            <div style={{ marginTop: "1rem" }}>
              <button onClick={() => setShowTerms(prev => !prev)} style={{
                backgroundColor: "#2d6da5", color: "white", border: "none",
                padding: "0.5rem 1rem", borderRadius: "0.5rem", cursor: "pointer"
              }}>
                {showTerms ? "Hide Terms & Conditions" : "View Terms & Conditions"}
              </button>
              {showTerms && (
                <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem", color: "white", fontSize: "0.9rem" }}>
                  <li>Appointments are not available on Sundays.</li>
                  {/* ...more terms... */}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Right: Appointment Form */}
        <form onSubmit={handleSubmit} className="appointment-form" style={{ flex: "2" }}>
          <label>Select Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={setSelectedDate}
            minDate={new Date()}
            maxDate={addDays(new Date(), 6)}
            placeholderText="Choose a date"
            className="form-control"
            dateFormat="yyyy-MM-dd"
            filterDate={(date) => date.getDay() !== 0}
            required
          />

          <label>Select Time:</label>
          <div className="time-slots" style={{ marginBottom: "1rem" }}>
            {timeSlots.map((slot) => (
              <button key={slot} type="button"
                className={`btn ${selectedTime === slot ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setSelectedTime(slot)}>
                {slot}
              </button>
            ))}
          </div>

          <label>Your Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Your Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Mobile Number:</label>
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />

          <label>Reason for Appointment:</label>
          <input type="text" name="reason" value={formData.reason} onChange={handleChange} required />

          <label style={{ display: "block", marginBottom: "0.1rem" }}>Consultation Type:</label>
          <p><strong>Online Only:</strong> Details shared after confirmation.</p>

          <button type="submit" disabled={loading}>Confirm Appointment</button>

          // <p className="appointment-note">
          //   <strong>Note:</strong> A small ₹10 fee confirms your slot to avoid cancellations.
          // </p>
        </form>
      </div>

      {/* Optional Spinner CSS */}
      <style>{`
        .loading-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex; align-items: center; justify-content: center;
          z-index: 9999;
        }
        .spinner {
          border: 6px solid #f3f3f3;
          border-top: 6px solid #3498db;
          border-radius: 50%;
          width: 60px; height: 60px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Appointment;
