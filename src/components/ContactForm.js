import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [status, setStatus] = useState("Send Message");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");

  const sendMail = () => {
    const params = {
      name,
      email,
      phone,
      message: query,
    };
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;

    emailjs.send(serviceID, templateID, params, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Send Message");
        alert("Your message has been sent successfully!");

        // Clear input fields after successful submission
        setName("");
        setEmail("");
        setPhone("");
        setQuery("");
      },
      (error) => {
        console.log("FAILED...", error);
        setStatus("Send Message");
        alert("Something went wrong. Please try again later.");
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    sendMail();
  };

  return (
    <div className="form-wrap p-5 mb-5">
      <div className="form-overlay"></div>
      <div className="contact-form text-center">
        <p className="lead text-light">Request Consultation</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="form-label text-light">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              required
            />
            <label htmlFor="email" className="form-label text-light pt-2">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
            <label htmlFor="phone" className="form-label text-light pt-2">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              required
            />
            <div>
              <label htmlFor="query" className="form-label text-light pt-2">
                Your Message:
              </label>
              <textarea
                className="form-control"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                id="query"
                required
              ></textarea>
            </div>
            <div className="my-4 text-center pt-2">
              <button
                type="submit"
                className="btn btn-outline-dark"
                aria-label="Send Message"
              >
                {status}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
