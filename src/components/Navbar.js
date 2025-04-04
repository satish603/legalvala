import React from "react";
import TopBanner from "../components/TopBanner";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <TopBanner />
        <nav className="navbar navbar-dark w-100 navbar-expand-md slide-in">
          <div className="container-xxl">
            {/* logo */}
            <div className="navbar-brand">
              <span>
                <img
                  // src="/assets/Badaposter.png"
                  // className="img-fluid logo-image"
                  // alt="LegalVala logo"
                  // width="70"
                  // height="70"
                />
                <img
                  src="/assets/Badaposter.png"
                  className="img-fluid px-4 logo-text"
                  alt="LegalVala"
                  width="200"
                  height="100"
                />
              </span>
            </div>
            {/* toggle button for mobile nav */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main-nav"
              aria-controls="main-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* navbar links */}
            <div
              className="collapse navbar-collapse justify-content-end align-center"
              id="main-nav"
            >
              <ul className="navbar-nav">
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c2b697" : "#fff",
                      borderBottom: isActive ? "1px solid #c2b697" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/avocatura"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c2b697" : "#fff",
                      borderBottom: isActive ? "1px solid #c2b697" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    Services
                  </NavLink>
                </li>
                {/* <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/insolventa"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c2b697" : "#fff",
                      borderBottom: isActive ? "1px solid #c2b697" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    Business Registration
                  </NavLink>
                </li> */}
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/informatii-utile"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c2b697" : "#fff",
                      borderBottom: isActive ? "1px solid #c2b697" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    GST & Tax Compliance
                  </NavLink>
                </li>
                {/* <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/legal-compliance"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c2b697" : "#fff",
                      borderBottom: isActive ? "1px solid #c2b697" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    Legal Compliance
                  </NavLink>
                </li> */}
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/AboutUs"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c2b697" : "#fff",
                      borderBottom: isActive ? "1px solid #c2b697" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/contact"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c2b697" : "#fff",
                      borderBottom: isActive ? "1px solid #c2b697" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
