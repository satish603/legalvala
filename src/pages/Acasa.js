import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faFileCircleCheck,
  faCommentsDollar,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";

const Acasa = () => {
  return (
    <>
      <div className="home-page">
        <Helmet>
          <title>LegalVala | Legal & Business Solutions</title>

          <meta
            name="description"
            content="LegalVala offers professional legal, tax, and business consultancy services, ensuring compliance and growth for individuals and businesses."
          />
        </Helmet>
        {/* HERO=========== */}
        <div className="container-fluid">
          <div className="row">
            <div className="hero-section">
              <div className="hero-overlay"></div>
              <div className="text-container d-flex flex-column justify-content-start align-items-start pt-6 slide">
                <div className="text-1 fs-1 pb-3">LEGALVALA</div>
                <div className="text-2 fs-4">
                  YOUR TRUSTED LEGAL & BUSINESS ADVISOR
                  <span className="fw-bold">
                    <br></br> All Over India{" "}
                  </span>
                </div>
                <div className="text-3 fst-italic fw-light">
                  "Legal clarity and business success go hand in hand. Let us navigate the complexities for you."
                </div>
              </div>
              {/* horizontal buttons */}
              <div className="horizontal-btn d-none d-md-flex justify-content-center align-items-end w-100 h-100">
                <div className="col flex-grow-1">
                  <Link to="/contact">
                    <button
                      id="horizontal1"
                      className="btn btn-outline-dark btn-lg type-button p-4 w-100 fw-bold"
                      aria-label="Schedule Consultation"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                      </span>
                      Schedule Consultation
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/contact">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Request an Evaluation"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                      </span>
                      Request an Evaluation
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/avocatura">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Our Services"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                      </span>
                      Our Services
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* small screens buttons*/}
            <div className="mobile-btn d-md-none d-flex justify-content-between pt-2">
              <Link to="/contact">
                <button
                  id="small"
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Schedule Consultation"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                  </span>
                  Schedule Consultation
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Request an Evaluation"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                  </span>
                  Request an Evaluation
                </button>
              </Link>
              <Link to="/informatii-utile">
                <button
                  className="btn btn-outline-dark type-button p-2 btn-md"
                  aria-label="Our Services"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                  </span>
                  Our Services
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* INTRODUCTION========= */}

        <section className="card py-5 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <h6 className="guide-text mb-4">INTRODUCTION</h6>
                <h5 className="lh-base text-center pb-4">
                  <strong>Facing Legal or Business Challenges?</strong>
                </h5>

                <p className="text-separator fw-normal text-center px-3">
                  At <strong>LegalVala</strong>, we provide expert guidance in legal, tax, and business compliance.
                  Our goal is to <strong>simplify complexities</strong> so you can focus on growth.
                  Whether you're an <strong>entrepreneur</strong>, a <strong>startup</strong>, or an <strong>established business</strong>,
                  we ensure your legal and business needs are met with precision and expertise.
                </p>

              </div>
            </div>

            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="/assets/Services-STARTUP.png"
                  className="intro-img img-fluid d-block rounded-2"
                  alt="Business and law concept"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US========= */}
        <section className="recommendation p-3 bg-image m-3 px-0">
          <h6 className="guide-text ">OUR EXPERTISE</h6>
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <h5 className="h-50 lh-base text-center pb-4"><strong>Why Choose LEGALVALA?</strong></h5>
          </div>
          <div className="row mt-4 flex-column flex-md-row mb-3">
            <div className="col col-md-7 order-md-2">
              <ul className="my-list">
                <li>Comprehensive Legal & Business Solutions</li>
                <li>Expert Guidance in Corporate Law & Compliance</li>
                <li>Risk Management & Regulatory Compliance</li>
                <li>Intellectual Property Protection (Trademarks, Patents, Copyrights)</li>
                <li>Taxation, GST, and Financial Advisory</li>
                <li>Business Growth Strategies and Market Insights</li>
              </ul>
            </div>
            <div className="col col-md-5 order-md-2 mt-5">
              <div className="square container d-flex flex-column justify-content-center align-items-center py-5 w-50 border border-white border-4 fw-bold">
                <div>
                  <FontAwesomeIcon icon={faGavel} size="2x" />
                </div>
                <div>5+</div>
                <div>Years of Experience</div>
              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  );
};

export default Acasa;
