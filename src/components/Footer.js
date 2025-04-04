import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row justify-content-center py-4">
            {/* Logo Section */}
            <div className="col-md-4 ps-4 mx-auto text-center">
              <span className="">
                {/* <img
                  src="/assets/Badaposter.png"
                  className="img-fluid logo-image me-1"
                  alt="LegalVala logo"
                  width="50"
                  height="50"
                /> */}
                <img
                  src="/assets/legalvala-top.png"
                  className="img-fluid px-4 logo-text"
                  alt="LegalVala"
                  width="250"
                  height="100"
                />
              </span>
              <p className="content pt-3 px-3">
                LegalVala is your trusted partner in business
                and legal matters in India. We specialize in company
                registrations, GST compliance, tax filings, and regulatory
                approvals to help your business thrive.
              </p>
            </div>

            {/* Contact Section */}
            <div className="col-md-4 text-center">
              <h6 className="pb-2">Contact</h6>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="contact-icon"
                    title="info@legalvala.com"
                  />
                  <span className="fw-light px-2">info@legalvala.com</span>
                </span>
              </div>
              <div className="mt-3 d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="contact-icon"
                    title="+91 73026 58311"
                  />
                  <span className="px-2 fw-light">+91 73026 58311</span>
                </span>
              </div>
              <div className="mt-3 d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="contact-icon"
                    title="Agra, Uttar Pradesh"
                  />
                  <span className="px-2 fw-light">Agra, Uttar Pradesh</span>
                </span>
              </div>
            </div>

            {/* Working Hours */}
            <div className="col-md-4 text-center mt-4 mt-md-0">
              <div>
                <h6 className="pb-2">Office Hours</h6>
                <p className="fw-light">
                  Monday – Saturday: 9 AM – 7 PM <br />
                  Sunday: Closed
                </p>
                {/* <a href="/sitemap.xml" className="">
                  Sitemap
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* WhatsAppWidget */}
        <div>
          <WhatsAppWidget
            phoneNo="+917302658311"
            position="right"
            iconSize="50"
            iconColor="white"
            iconBgColor="#25D366"
            headerIcon="/assets/Badaposter.png"
            headerTxtColor="white"
            headerBgColor="#02182b"
            headerTitle="LegalVala"
            headerCaption="Online Support"
            bodyBgColor="#bbb"
            chatPersonName="Support"
            chatMessage={
              <>
                Hello,
                <br />
                <br /> How can we assist you today?
              </>
            }
            footerBgColor="#999"
            btnBgColor="#c2b697"
            btnTxtColor="black"
          />
        </div>

        {/* Copyright */}
        <div>
          <div className="bg-dark d-flex align-items-center justify-content-center">
            <hr></hr>
            <p className="copyright mb-0">All rights reserved © 2025 | LegalVala Consultancy LLP</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
