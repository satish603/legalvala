import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faScaleBalanced,
  faTruck,
  faPeopleLine,
  faBriefcase,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import Insolventa from "./Insolventa";

const Avocatura = () => {
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
        <div>
          <h6 className="guide-text ms-3 mt-4">OUR SERVICES</h6>
          <div className="pt-4 text-center">
            <h5 className="fw-bold text-center pb-1">
              Comprehensive Legal & Business Solutions
            </h5>
            <h6 className="fw-bold subtitle lh-lg text-center px-5 pb-4">
              We provide expert consultancy and support across various legal and business domains.
            </h6>
          </div>
          <div className="row g-5 px-5 pt-4">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="civil card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faScaleBalanced}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">CORPORATE & BUSINESS LAW</h6>
                  <p className="card-text mx-1">
                    Assisting businesses with company formation, compliance, and corporate structuring to ensure legal security and growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="criminal card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faGavel}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">TAX & COMPLIANCE</h6>
                  <p className="card-text mx-1">
                    Expert guidance on GST, income tax, and regulatory compliance, ensuring smooth financial operations for businesses.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="executare card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faTruck}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">IMPORT & EXPORT LICENSES</h6>
                  <p className="card-text mx-1">
                    Obtain your Import Export Code (IEC) and other trade licenses to expand your business globally.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="family card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faPeopleLine}
                    size="2x"
                    className="pb-3 law-icon"
                  />
                  <h6 className="card-title pb-2">INTELLECTUAL PROPERTY</h6>
                  <p className="card-text mx-1">
                    Protect your brand with Trademark, Copyright, and Patent registration services.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="labor card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">ISO & CERTIFICATIONS</h6>
                  <p className="card-text mx-1">
                    We provide assistance in obtaining ISO, GMP, FDA, CE Marking, and other business certifications.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="business card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faScroll}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">STARTUP INDIA REGISTRATION</h6>
                  <p className="card-text mx-1">
                    Legal and compliance support for startups under the Startup India initiative to secure government benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-4">
            <p className="more-services py-4">
              Additional services we offer include NGO registration, FSSAI (Food License), Private Limited & LLP formation, and much more.
            </p>
          </div>
          <Insolventa />
        </div>
      </div>
    </>
  );
};

export default Avocatura;
