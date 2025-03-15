import { Helmet } from "react-helmet";
import React, { useState } from "react";
import ContactForm from "../components/ContactForm";


const services = [
  { name: "GST REGISTRATION", price: "1499", image: "/assets/product/1.png", description: "Get your GST registered and start your business legally in India." },
  { name: "MSME REGISTRATION", price: "999", image: "/assets/product/2.png", description: "Avail benefits under the MSME scheme for small and medium businesses." },
  { name: "PRIVATE LIMITED COMPANY REGISTRATION", price: "7999", image: "/assets/product/3.png", description: "Incorporate a Private Limited Company with ease." },
  { name: "OPC COMPANY REGISTRATION", price: "5999", image: "/assets/product/4.png", description: "Register your One Person Company and get limited liability benefits." },
  { name: "LLP COMPANY REGISTRATION", price: "6999", image: "/assets/product/5.png", description: "Start your Limited Liability Partnership (LLP) with complete legal support." },
  { name: "PUBLIC LIMITED COMPANY REGISTRATION", price: "14999", image: "/assets/product/6.png", description: "Form a Public Limited Company and expand your business reach." },
  { name: "SECTION 8 COMPANY REGISTRATION", price: "7999", image: "/assets/product/7.png", description: "Register your non-profit organization under Section 8." },
  { name: "NGO REGISTRATION", price: "6999", image: "/assets/product/8.png", description: "Start an NGO legally and get the necessary approvals." },
  { name: "GST RETURN FILING", price: "499", image: "/assets/product/9.png", description: "File your GST returns monthly, quarterly, or annually with expert guidance." },
  { name: "FOOD LICENCE (FSSAI)", price: "1499", image: "/assets/product/10.png", description: "Get your FSSAI license and operate your food business legally." },
  { name: "COMPANY COMPLIANCES", price: "14999", image: "/assets/product/11.png", description: "Ensure your company adheres to all legal and tax compliances." },
  { name: "INCOME TAX RETURN FILING (ITR)", price: "999", image: "/assets/product/12.png", description: "File your Income Tax Returns accurately and on time." },
  { name: "ISO CERTIFICATION", price: "2499", image: "/assets/product/13.png", description: "Ensure quality compliance with an ISO certification." },
  { name: "GMP CERTIFICATE", price: "3499", image: "/assets/product/14.png", description: "Good Manufacturing Practice (GMP) certification for businesses." },
  { name: "FDA CERTIFICATE", price: "3499", image: "/assets/product/15.png", description: "FDA approval for ensuring product compliance and quality." },
  { name: "CE MARKING", price: "4999", image: "/assets/product/16.png", description: "Get CE marking for regulatory compliance in the European market." },
  { name: "TRADEMARK REGISTRATION", price: "6599", image: "/assets/product/17.png", description: "Secure your brand identity with a registered trademark." },
  { name: "PTEC & PTRC CERTIFICATE", price: "2999", image: "/assets/product/18.png", description: "Professional Tax Enrollment and Registration Certificates." },
  { name: "STARTUP INDIA REGISTRATION", price: "1999", image: "/assets/product/19.png", description: "Get recognized under the Startup India initiative for tax benefits." },
  { name: "IMPORT EXPORT CODE LICENCE", price: "1999", image: "/assets/product/20.png", description: "Obtain an IEC license and start international trade." },
  { name: "KOSHER CERTIFICATE", price: "3499", image: "/assets/product/21.png", description: "Get Kosher certification for compliance with Jewish dietary laws." },
  { name: "HALAL CERTIFICATE", price: "3999", image: "/assets/product/22.png", description: "Obtain Halal certification to meet food and business requirements." },
];



const Avocatura = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = (serviceName) => {
    setSelectedService(`Hello, I am interested in ${serviceName}. Please provide me with more details.`);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(""); // Clear the selected service
  };

  return (
    <>
      <div className="avocatura">
        <Helmet>
          <title>Legal & Business Services | LegalVala</title>
          <meta
            name="description"
            content="LegalVala offers expert legal and business services, including company registration, taxation, intellectual property protection, and compliance advisory."
          />
        </Helmet>

        {/* Section Header */}
        <div className="container py-5">
          <h6 className="text-center guide-text">OUR SERVICES</h6>
          <h3 className="text-center fw-bold pb-3">
            Comprehensive Legal & Business Solutions
          </h3>

          {/* Service Cards */}
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card shadow-sm border-0 service-card">
                  <div className="service-img-wrapper">
                    <img
                      src={service.image}
                      className="card-img-top service-img"
                      alt={service.name}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="fw-bold text-uppercase text-white">
                      {service.name}
                    </h5>
                    <p className="text-light small">{service.description}</p>
                    <button
                      className="btn btn-outline-light"
                      onClick={() => openModal(service.name)}
                    >
                      Let's Start
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Contact Form */}
        {showModal && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-modal" onClick={closeModal}>&times;</span>
              <ContactForm defaultMessage={selectedService} onClose={closeModal} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Avocatura;

