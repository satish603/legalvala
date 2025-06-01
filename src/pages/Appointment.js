import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, addDays } from "date-fns";

// import "./Appointment.css";


const BASE_URL = 'https://legalvala-appointment.vercel.app'

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    reason: "",
    consultationType: "",
  });

  const [timeSlots, setTimeSlots] = useState([]);

  // Fetch slots whenever selectedDate changes
  useEffect(() => {
    if (!selectedDate) {
      setTimeSlots([]);
      return;
    }

    const dateStr = format(selectedDate, "yyyy-MM-dd");

    fetch(`${BASE_URL}/api/v1/slot/get?date=${dateStr}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch slots");
        return res.json();
      })
      .then((data) => {
        // Assuming API returns { availableSlots: [...] }
        setTimeSlots(data.availableSlots || []);
        setSelectedTime(""); // reset selected time when date changes
      })
      .catch((error) => {
        console.error("Error fetching slots:", error);
        setTimeSlots([]);
      });
  }, [selectedDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 1: Block the slot
    // Step 2: Call razor pay
    // Step 2 is by passed as of now

    //  Append additional info
    formData.date = format(selectedDate, "yyyy-MM-dd");;
    formData.timeSlot = selectedTime

    // Step 1
    try {
      const blockResponse = await fetch(BASE_URL + '/api/v1/slot/block', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!blockResponse.ok) {
        console.error('Failed to block slot');
        return;
      }

      console.log('Success blocked');

      // Proceed to book
      // Apeend key
      formData.key = 'THEBRCHUB';
      const bookResponse = await fetch(BASE_URL + '/api/v1/slot/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!bookResponse.ok) {
        console.error('Failed to book slot');
      } else {
        console.log('Success booked');
      }
    } catch (error) {
      console.error('Network Error:', error);
    }


    // localStorage.setItem("appointmentData", JSON.stringify({
    //   ...formData,
    //   date: selectedDate,
    //   time: selectedTime,
    // }));

    // window.location.href = "https://razorpay.me/@mahiconsultancy3820";

  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const [showTerms, setShowTerms] = useState(false);

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

          {/* Centered Image + Name */}
          <div className="d-flex flex-column align-items-center text-center mb-3">
            <img
              src="/your-client-image.png"
              alt="Himanshu - Business Consultant"
              className="rounded img-thumbnail mb-3"
              style={{ width: "180px", height: "180px", objectFit: "cover" }}
            />
            <h4 style={{ color: "#c2b697" }}>Himanshu</h4>
          </div>

          {/* Left-Aligned Content */}
          <div className="text-light" style={{ textAlign: "left" }}>
            <p><strong>Designation:</strong> Business Consultant / Legal Advisor</p>
            <p><strong>Qualification:</strong> BBA, MBA, and CMA (Pursuing)</p>
            <p><strong>Contact:</strong> 8864885831</p>
            <p><strong>Email:</strong> Himanshuagrawal5831@gmail.com</p>
            <p><strong>About:</strong> Himanshu is a Business Consultant</p>
            <p><strong>Specializations:</strong></p>
            <ul style={{ listStyle: "disc", marginLeft: "1.5rem", padding: 0 }}>
              <li>GST Registration</li>
              <li>Company Incorporation</li>
              <li>Company Compliances</li>
              <li>Legal and Business Advisory</li>
              <li>ISO Certificate</li>
              <li>IEC Code</li>
              <li>All Business Related Query Resolution</li>
            </ul>
            <p style={{ fontStyle: "italic" }}>
              <strong>Address:</strong><br />
              131, Jawahar Puram Phase -1,<br />
              Shahganj, Agra, Uttar Pradesh 282010
            </p>

            {/* Terms & Conditions Toggle */}
            <div style={{ marginTop: "1rem" }}>
              <button
                onClick={() => setShowTerms((prev) => !prev)}
                style={{
                  backgroundColor: "#2d6da5",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  cursor: "pointer"
                }}
              >
                {showTerms ? "Hide Terms & Conditions" : "View Terms & Conditions"}
              </button>

              {showTerms && (
                <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem", color: "white", fontSize: "0.9rem", lineHeight: "1.6" }}>
                  <li>Please confirm your appointment using the "Confirm Appointment" button provided below.</li>
                  <li>In case of any booking issues, kindly reach out to us immediately for assistance.</li>
                  <li>Appointments are not available on Sundays, as it is a weekly holiday.</li>
                  <li>A short break will be observed after every 6 consecutive appointments.</li>
                  <li>A nominal consultation fee of ₹600 is applicable for each 15-minute session.</li>
                  <li>All consultations are strictly confidential and conducted by qualified professionals.</li>
                  <li>For urgent legal matters, priority time slots may be arranged upon request.</li>
                  <li>Himanshu is available for consultations between 11:00 AM and 4:30 PM.</li>
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
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            maxDate={addDays(new Date(), 7)} // Max 7 days allowed for selection
            placeholderText="Choose a date"
            className="form-control"
            dateFormat="yyyy-MM-dd"
            filterDate={(date) => date.getDay() !== 0} // Exclude Sundays
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

          <label>Mobile Number:</label>
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />

          <label>Reason for Appointment:</label>
          <input type="text" name="reason" value={formData.reason} onChange={handleChange} required />

          <label style={{ display: "block", marginBottom: "0.1rem" }}>Consultation Type:</label>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center", marginBottom: "1rem" }}>
            <p>The consultation will be conducted <strong>ONLINE</strong>. Detailed information will be provided upon confirmation of the appointment.</p>
            {/* <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                <input
                  type="radio"
                  name="consultationType"
                  value="Online"
                  checked={formData.consultationType === "Online"}
                  onChange={handleChange}
                  style={{ accentColor: "#007BFF" }} // Customize this color if needed
                />
                <span>Online</span>
              </label>

              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                <input
                  type="radio"
                  name="consultationType"
                  value="Offline"
                  checked={formData.consultationType === "Offline"}
                  onChange={handleChange}
                  style={{ accentColor: "#007BFF" }}
                />
                <span>Offline</span>
              </label> */}
          </div>



          <button type="submit">Confirm Appointment</button>
          <p className="appointment-note">
            <strong>Note:</strong> A small ₹10 fee confirms your slot. This helps avoid cancellations and improves service.
          </p>
        </form>
      </div>
    </div>
  );
};


// const Appointment = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.open("https://calendar.app.google/A3xkzBJqLBstQyiU7", "_blank");
//     navigate("/"); 
//   }, [navigate]);

//   return null; 
// }

export default Appointment;
