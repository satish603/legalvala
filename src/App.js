import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Info from "./pages/Info";
import Avocatura from "./pages/Avocatura";
import Insolventa from "./pages/Insolventa";
import Contact from "./pages/Contact";
import Acasa from "./pages/Acasa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import AboutUs from "./pages/AboutUs";
import ContactForm from "./components/ContactForm";
import Appointment from "./pages/Appointment";
import AppointmentSuccess from "./pages/AppointmentSuccess";





function App() {

  const [showModal, setShowModal] = useState(true);
  const [selectedService, setSelectedService] = useState("");

  // const openModal = (serviceName) => {
  //   setSelectedService(`Hello, I am interested in ${serviceName}. Please provide me with more details.`);
  //   setShowModal(true);
  // };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService("");
  };

  return (
    <div className="App">
      <>
        {showModal && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-modal" onClick={closeModal}>&times;</span>
              <ContactForm defaultMessage={selectedService} onClose={closeModal} />
            </div>
          </div>
        )}
      </>
      <>
        <BrowserRouter>
  <Helmet>
  <title>Legalvala Consultancy LLP | Expert Business Setup & Compliance</title>
  <meta
    name="description"
    content="Legalvala Consultancy LLP helps startups, SMEs, and enterprises with business setup, GST, tax compliance, and legal advisory across India."
  />
  <meta name="keywords" content="Legalvala, Business Consultancy, GST Filing, Legal Compliance, Company Registration" />
  <meta name="author" content="Legalvala Consultancy LLP" />

  {/* <!-- Organization Structured Data --> */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Legalvala Consultancy LLP",
        "url": "https://www.legalvala.com",
        "logo": "https://www.legalvala.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-XXXXXXXXXX",
          "contactType": "Customer Service"
        },
        "sameAs": [
          "https://www.facebook.com/legalvala",
          "https://www.instagram.com/legalvala"
        ]
      }
    `}
  </script>

  {/* <!-- Appointment Booking Service Structured Data --> */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Business Appointment Booking",
        "url": "https://www.legalvala.com/appointment",
        "provider": {
          "@type": "Organization",
          "name": "Legalvala Consultancy LLP"
        }
      }
    `}
  </script>
</Helmet>



          <Navbar />
          <Routes>
            <Route path="/" element={<Acasa />} />
            <Route path="/gst-tax-compliance" element={<Info />} />
            <Route path="/services" element={<Avocatura />} />
            <Route path="/insolventa" element={<Insolventa />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/appointment-success" element={<AppointmentSuccess />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
