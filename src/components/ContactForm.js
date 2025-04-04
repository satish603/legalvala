import { useState, useEffect } from "react";

const ContactForm = ({ defaultMessage = "" }) => {
  const [status, setStatus] = useState("Send Message");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState(defaultMessage);

  // Update query field when defaultMessage changes
  useEffect(() => {
    setQuery(defaultMessage);
  }, [defaultMessage]);

  const sendMail = async () => {
    // Map phone to mobile as per API payload requirements
    const payload = {
      name: name,
      email: email,
      mobile: phone,
      message: query,
    };

    try {
      const response = await fetch("https://email-service-ytdv.onrender.com/send/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("SUCCESS!", response);
        alert("Your message has been sent successfully!");
        // Clear input fields after successful submission
        setName("");
        setEmail("");
        setPhone("");
        setQuery(defaultMessage);
      } else {
        console.log("FAILED...", response);
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("FAILED...", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setStatus("Send Message");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    await sendMail();
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
