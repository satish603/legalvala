import React from "react";
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

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Helmet>
            <title>
              Blazing Render Creation Hub LLP 
            </title>
            <meta
              name="BRC Hub LLP"
              content="This Page is Developed by Blazing Render Creation Hub LLP"
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
