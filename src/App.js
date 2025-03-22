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

function App() {

  const [showModal, setShowModal] = useState(true);
  const [selectedService, setSelectedService] = useState("");

  const openModal = (serviceName) => {
    setSelectedService(`Hello, I am interested in ${serviceName}. Please provide me with more details.`);
    setShowModal(true);
  };

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
            <title>
              Blazing Render Creation Hub LLP
            </title>
            <meta
              name="BRC Hub LLP"
              content="This Page is Developed by Blazing Render Creation Hub LLP https://brchub.vercel.app/"
            />
          </Helmet>
          <Navbar />
          <Routes>
            <Route path="/" element={<Acasa />} />
            <Route path="/informatii-utile" element={<Info />} />
            <Route path="/avocatura" element={<Avocatura />} />
            <Route path="/insolventa" element={<Insolventa />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
