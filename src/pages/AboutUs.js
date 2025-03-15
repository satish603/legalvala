import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGavel, faLightbulb, faHandshake } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AboutUs = () => {
  const testimonials = [
    {
      name: "Surendra Saini",
      role: "Director, Domantra Innovations Pvt Ltd",
      text: "We at Domantra Innovations are extremely satisfied with the company management services provided by Legalvala. Their team is highly professional, responsive, and knowledgeable. Himanshu helped me with all my ROC compliances and is always available for better legal & business solutions. Highly recommended for anyone looking for reliable legal and business services!",
      image: "/assets/people/boy (1).png",
    },
    {
      name: "Gajendra Singh",
      role: "Proprietor, Deepika Enterprises",
      text: "I am very happy with the GST registration service provided by Legalvala. Their team was highly professional and efficient, and we received our GST certificate within just 4-5 days! I recommend Legalvala for anyone looking for quick and reliable legal services. Thank you for your excellent support!",
      image: "/assets/people/boy (2).png",
    },
    {
      name: "Mohini Bhadoriya",
      role: "Director, Startfinity Navigator Pvt Ltd",
      text: "I availed the Company Registration and Compliance Package from Legalvala for my company, and their service was outstanding! The pricing was the best in the market, and the entire process was fast, smooth, and transparent. I continue to work with them because of their excellent service.",
      image: "/assets/people/girl (1).png",
    },
    {
      name: "Akash Kumar",
      role: "Relationship Manager, HDFC Bank Ltd",
      text: "I got my Income Tax Return filed through Legalvala, and it was a great experience! The process was quick, hassle-free, and transparent. Their team is professional and very supportive. Definitely a 5-star experience!",
      image: "/assets/people/boy.png",
    },
    {
      name: "Charan Singh",
      role: "Owner, PTSK Traders",
      text: "I got my GST Registration and GST Return Filing done through Legalvala, and their service has been excellent! Their team is highly professional and efficient. They continue to handle my GST filings, ensuring top-notch service.",
      image: "/assets/people/man-with-glasses.png",
    },
    {
      name: "Dr Arul Ghandhi",
      role: "Director, Narmada Exploration & Mining Pvt Ltd",
      text: "I got ISO 9001, ISO 14001, ISO 23872, and OEM certificates for my company from Legalvala, and their service was outstanding! After facing a scam elsewhere, Legalvala regained my trust with their professionalism. Special thanks to Himanshu Ji for handling everything smoothly.",
      image: "/assets/people/boy.png",
    },
  ];

  const team = [
    {
      name: "Amit Sharma",
      role: "Founder & CEO",
      image: "/assets/team1.png",
    },
    {
      name: "Neha Verma",
      role: "Legal Consultant",
      image: "/assets/team2.png",
    },
    {
      name: "Rajesh Gupta",
      role: "Taxation Expert",
      image: "/assets/team3.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="about-page">
      <Helmet>
        <title>About Us | LEGALVALA CONSULTANCY LLP</title>
        <meta
          name="description"
          content="Learn about LEGALVALA CONSULTANCY LLP, our mission, expertise, and commitment to providing top-tier legal and business solutions in India."
        />
      </Helmet>

      {/* INTRODUCTION */}
      <section className="container py-5">
        <h6 className="guide-text">INTRODUCTION</h6>
        <h5 className="text-center pb-3">Who We Are</h5>
        <p className="text-center">
          LEGALVALA CONSULTANCY LLP is a leading legal and business consultancy firm in India, dedicated to helping individuals, startups, and enterprises navigate legal complexities with ease. 
          Established in 2020, we have assisted thousands of clients in company registration, tax compliance, trademark registration, and business law.
        </p>
      </section>

      {/* OUR EXPERTISE */}
      <section className="container py-5">
        <h6 className="guide-text">OUR EXPERTISE</h6>
        <h5 className="text-center pb-3">What We Specialize In</h5>
        <div className="row text-center">
          <div className="col-md-4">
            <FontAwesomeIcon icon={faGavel} size="3x" className="mb-3 text-primary" />
            <h6>Corporate & Business Law</h6>
            <p>Company formation, contracts, and regulatory compliance.</p>
          </div>
          <div className="col-md-4">
            <FontAwesomeIcon icon={faLightbulb} size="3x" className="mb-3 text-warning" />
            <h6>Intellectual Property</h6>
            <p>Trademark, copyright, and patent registration services.</p>
          </div>
          <div className="col-md-4">
            <FontAwesomeIcon icon={faHandshake} size="3x" className="mb-3 text-success" />
            <h6>Tax & Compliance</h6>
            <p>GST registration, tax filing, and financial advisory.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials p-3 bg-light m-3 px-0">
        <h6 className="guide-text text-center">WHY CLIENTS LOVE US</h6>
        <h5 className="text-center pb-3">SUCCESS STORIES</h5>
        <div className="container">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center p-3">
                <div className="card shadow-sm p-3">
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="d-flex align-items-center justify-content-center mt-3">
                    <img src={testimonial.image} alt={testimonial.name} className="rounded-circle" width="60" />
                  </div>
                  <h6 className="fw-bold mt-2">{testimonial.name}</h6>
                  <p className="text-muted">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="team p-3 container">
        <h6 className="guide-text text-center">MEET OUR TEAM</h6>
        <h5 className="text-center pb-3">The Experts Behind LEGALVALA</h5>
        <div className="row text-center">
          {team.map((member, index) => (
            <div key={index} className="col-md-4 p-3">
              <div className="card shadow-sm p-3">
                <img src={member.image} alt={member.name} className="rounded-circle mb-3" width="80" />
                <h6 className="fw-bold">{member.name}</h6>
                <p className="text-muted">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
