import React from "react";
import { Helmet } from "react-helmet";

import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact | LegalVala</title>
        
        <meta
          name="description"
          content="Get in touch with LegalVala for expert legal and business consultation. Location: India, Office Hours: Monday - Saturday: 9 AM - 6 PM, Email: support@legalvala.com, Phone: +91 7302658311."
        />
      </Helmet>
      <section>
        <h6 className="guide-text ms-3 mt-4">CONTACT</h6>
        {/* Contact info */}
        <div className="container-lg bg-light my-5 shadow">
          <div className="contact-info text-center py-5">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Location:</h5>
                  <p>India</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faClock}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Office Hours:</h5>
                  <p>Monday – Saturday: 9 AM – 7 PM</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Email</h5>
                  <p>support@legalvala.com</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faPhone}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Phone</h5>
                  <p>+91 7302658311</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact form and text */}
        <div className="container-lg">
          <div className="row g-5">
            <div className="col-sm-6 order-sm-first">
              <div className="contact-text d-flex flex-column">
                <h5 className="lh-base text-center pb-4">
                  Reach Out for Expert Assistance!
                </h5>
                <p>
                Whether you need legal consultation, business registration, or compliance support, we are here to assist you{" "}
                </p>
                <p>
                  Fill out the contact form below, and one of our experts will get back to you shortly.
                </p>
                <p>
                  We value your queries and strive to provide prompt and reliable solutions.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
