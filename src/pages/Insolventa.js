import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Insolventa = () => {
  return (
    <>
      <div className="insolventa-page">
        <Helmet>
          <title>
            Insolvency & Bankruptcy Services | LEGALVALA CONSULTANCY LLP
          </title>

          <meta
            name="description"
            content="Expert consultancy for Insolvency and Bankruptcy in India. Services include NCLT filings, corporate liquidation, debt recovery, IBC cases, and company winding up."
          />
        </Helmet>
        <div>
          <h6 className="guide-text ms-3 mt-4">INSOLVENCY & BANKRUPTCY SERVICES</h6>
          <div className="container py-5">
            <h5 className="fw-bold text-center pb-1">
              Complete Assistance in Insolvency & Bankruptcy Proceedings
            </h5>
            <h6 className="fw-bold subtitle lh-lg text-center px-5 pb-5">
              Legal solutions for financial distress, debt recovery, and business restructuring under India's Insolvency & Bankruptcy Code (IBC).
            </h6>

            <div className="card">
              <div className="insolvency card-img-top2"></div>
              <div className="card-body">
                <div className="card-text text-white py-5">
                  <ul className="my-list pt-3">
                    <li>
                      <strong>Corporate Insolvency Resolution Process (CIRP):</strong>
                      <br></br>Assistance in filing insolvency petitions before NCLT, creditor negotiations, and restructuring advisory.
                    </li>
                    <br></br>

                    <li>
                      <strong>Liquidation & Winding Up of Companies:</strong>
                      <br></br>Guidance on voluntary liquidation, winding-up petitions, and compliance with the Insolvency and Bankruptcy Code (IBC), 2016.
                    </li>
                    <br></br>

                    <li>
                      <strong>Debt Recovery & NPA Resolution:</strong>
                      <br></br>Legal assistance for banks, NBFCs, and financial institutions in loan recovery, SARFAESI Act proceedings, and arbitration.
                    </li>
                    <br></br>

                    <li>
                      <strong>Filing of Insolvency Applications:</strong>
                      <br></br>Preparation and filing of insolvency applications on behalf of corporate debtors or operational creditors before NCLT.
                    </li>
                    <br></br>

                    <li>
                      <strong>Personal & Corporate Bankruptcy Advisory:</strong>
                      <br></br>Legal support for individuals, proprietors, and directors under personal insolvency cases and debt restructuring.
                    </li>
                    <br></br>

                    <li>
                      <strong>Drafting & Reviewing of Legal Documents:</strong>
                      <br></br>Drafting insolvency petitions, settlement agreements, legal notices, and contracts for financial restructuring.
                    </li>
                    <br></br>

                    <li>
                      <strong>Representation before NCLT & NCLAT:</strong>
                      <br></br>Assisting clients in presenting cases before the National Company Law Tribunal (NCLT) and National Company Law Appellate Tribunal (NCLAT).
                    </li>
                    <br></br>

                    <li>
                      <strong>Strategic Business Restructuring & Asset Monetization:</strong>
                      <br></br>Advisory services for financial turnaround, mergers, and acquisition of distressed assets.
                    </li>
                    <br></br>

                    <li>
                      <strong>IBC Compliances & Advisory:</strong>
                      <br></br>Assistance in regulatory filings, procedural compliance, and legal support for businesses under IBC, 2016.
                    </li>
                    <br></br>

                    <li>
                      <strong>Pre-Packaged Insolvency Process (For MSMEs):</strong>
                      <br></br>Helping micro, small, and medium enterprises (MSMEs) with structured resolution plans under the new Pre-Pack Insolvency Framework.
                    </li>
                    <br></br>

                    <li>
                      <strong>Negotiations & Settlements with Creditors:</strong>
                      <br></br>Facilitating amicable settlements, restructuring plans, and out-of-court debt resolutions.
                    </li>
                    <br></br>

                    <li>
                      <strong>Legal Notices & Demand Recovery:</strong>
                      <br></br>Issuing legal notices under Section 8 of IBC for debt recovery and claims against defaulting companies.
                    </li>
                    <br></br>

                    <li>
                      <strong>MSME & Startup Support for Insolvency Cases:</strong>
                      <br></br>Advisory for startups and small businesses facing financial distress and legal disputes.
                    </li>
                  </ul>
                </div>

                <Link to="/contact" className="link">
                  <button
                    className="btn btn-outline-dark my-4"
                    type="button"
                    aria-label="Request a Consultation"
                  >
                    Request a Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insolventa;
