import React from "react";
import { Helmet } from "react-helmet";

const Info = () => {
  return (
    <div className="info">
      <Helmet>
        <title>Information | LEGALVALA CONSULTANCY LLP</title>

        <meta
          name="description"
          content="Complete Business, Taxation, and Legal Consultancy Services in India. Get expert assistance for GST, company registration, compliance, taxation, and licensing."
        />
      </Helmet>
      <div>
        <h6 className="guide-text ms-3 mt-4">OUR SERVICES</h6>
        <div className="container py-5">
          <div id="accordion" className="accordion">

            {/* Company Registration Services */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Business & Company Registration
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>Start your business in India with hassle-free registration services:</p>
                  <ul>
                    <li>Private Limited Company Registration</li>
                    <li>One Person Company (OPC) Registration</li>
                    <li>Limited Liability Partnership (LLP) Registration</li>
                    <li>Public Limited Company Registration</li>
                    <li>NGO/Section 8 Company Registration</li>
                    <li>Startup India Registration</li>
                    <li>Udyam (MSME) Registration</li>
                  </ul>
                  <p>We handle end-to-end registration, documentation, and compliance to ensure smooth setup.</p>
                </div>
              </div>
            </div>

            {/* GST, Taxation & Compliance */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  GST, Income Tax & Compliance Services
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>Ensure tax compliance with expert GST and taxation services:</p>
                  <ul>
                    <li>GST Registration</li>
                    <li>GST Return Filing (GSTR-1, GSTR-3B, GSTR-9, etc.)</li>
                    <li>Income Tax Return (ITR) Filing</li>
                    <li>Tax Audit & Tax Planning</li>
                    <li>Professional Tax (PTEC & PTRC) Registration</li>
                    <li>ESI & EPF Registration</li>
                    <li>TDS & TCS Compliance</li>
                  </ul>
                  <p>We ensure complete tax compliance to help you avoid penalties and optimize tax savings.</p>
                </div>
              </div>
            </div>

            {/* Licensing & Business Permits */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Business Licenses & Certifications
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>Get mandatory licenses & certifications for your business:</p>
                  <ul>
                    <li>Food License (FSSAI Registration)</li>
                    <li>Import Export Code (IEC) License</li>
                    <li>ISO Certification (ISO 9001, ISO 14001, etc.)</li>
                    <li>Good Manufacturing Practice (GMP) Certification</li>
                    <li>FDA Certification for Pharmaceuticals & Food Businesses</li>
                    <li>CE Marking for Export Compliance</li>
                    <li>Drug License (State & Central)</li>
                  </ul>
                  <p>We help you acquire all necessary licenses to operate legally in India.</p>
                </div>
              </div>
            </div>

            {/* Trademark & Intellectual Property Rights */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Trademark & Intellectual Property Protection
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>Protect your brand, inventions, and creative works with IPR services:</p>
                  <ul>
                    <li>Trademark Registration</li>
                    <li>Patent Filing</li>
                    <li>Copyright Registration</li>
                    <li>Brand Name & Logo Protection</li>
                    <li>IPR Dispute Resolution</li>
                  </ul>
                  <p>We help secure your intellectual assets legally in India.</p>
                </div>
              </div>
            </div>

            {/* Corporate Compliance & Legal Advisory */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Corporate Compliance & Legal Advisory
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>Ensure smooth legal and corporate compliance with expert services:</p>
                  <ul>
                    <li>Company ROC Compliances</li>
                    <li>Labour Law & Payroll Compliance</li>
                    <li>Legal Documentation & Contract Drafting</li>
                    <li>Startup Advisory & Business Structuring</li>
                    <li>Company Mergers & Dissolution</li>
                  </ul>
                  <p>We assist businesses in meeting legal requirements and regulatory standards.</p>
                </div>
              </div>
            </div>

            {/* Startup & Business Growth Consulting */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Startup & Business Growth Consulting
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>Helping Indian businesses grow with strategic advisory:</p>
                  <ul>
                    <li>Business Model Development</li>
                    <li>Government Schemes & Subsidies</li>
                    <li>Startup Pitch Decks & Investor Readiness</li>
                    <li>Market Research & Feasibility Studies</li>
                  </ul>
                  <p>We provide strategic insights to scale your business effectively.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
