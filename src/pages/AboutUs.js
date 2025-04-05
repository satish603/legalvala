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
      text: "We at Domantra Innovations are extremely satisfied with the company management services provided by Legalvala.Himanshu helped me with my ROC compliances and is always available for better solutions. Highly recommended!",
      image: "/assets/people/boy (1).png",
    },
    {
      name: "Satish Chauhan",
      role: "CPPO, Blazing Render Creation Hub LLP",
      text: "I got my GST registration done through Legalvala, and I am very happy with their service. The team is highly professional and handled everything smoothly. I highly recommend Legalvala for all your legal and business needs!",
      image: "/assets/people/man-with-glasses.png",
    },
    {
      name: "Mohini Bhadoriya",
      role: "Director, Startfinity Navigator Pvt Ltd",
      text: "I availed the Company Registration and Compliance Package from Legalvala. Their pricing was the best in the market, and the entire process was fast, smooth, and transparent. I continue to work with them for their excellent service.",
      image: "/assets/people/girl (1).png",
    },
    {
      name: "Gajendra Singh",
      role: "Proprietor, Deepika Enterprises",
      text: "I am very happy with the GST registration service from Legalvala. Their team was professional, and we received our GST certificate within 4-5 days! Highly recommend them for quick and reliable legal services. Thank you!",
      image: "/assets/people/boy (2).png",
    },
    {
      name: "Akash Kumar",
      role: "Relationship Manager, HDFC Bank Ltd",
      text: "I got my Income Tax Return filed through Legalvala, and it was a great experience! The process was quick, hassle-free, and transparent. Their team is highly professional and supportive. Definitely a 5-star experience!",
      image: "/assets/people/boy.png",
    },
    {
      name: "Charan Singh",
      role: "Owner, PTSK Traders",
      text: "I got my GST Registration and GST Return Filing done through Legalvala, and their service has been excellent! Their team is highly professional and efficient. They continue to handle my GST filings with great expertise.",
      image: "/assets/people/man-with-glasses.png",
    },
    {
      name: "Dr Arul Ghandhi",
      role: "Director, Narmada Exploration & Mining Pvt Ltd",
      text: "I got ISO 9001, ISO 14001, and OEM certificates for my company from Legalvala. Their service was outstanding! After facing a scam elsewhere, Legalvala regained my trust. Special thanks to Himanshu Ji for handling everything smoothly.",
      image: "/assets/people/boy.png",
    },
  ];


  const team = [
    {
      name: "Mr. Himanshu",
      role: "Manager / Sr. Consultant / Director",
      about: "Mr. Himanshu is the Senior Consultant and Manager at LEGALVALA. With over five years of experience in the legal field, he specializes in business compliance and legal advisory. He holds a Bachelor of Business Administration from DBRAU Agra and is currently pursuing CMA from the ICMAI Institute.",
      image: "/assets/people/himanshu.jpeg",
    },
    {
      name: "Mr. Gajendra Singh",
      role: "Founder / CEO",
      about: "Mr. Gajendra Singh is the Founder and CEO of LEGALVALA. With over 15 years of experience in legal services and business management, he has helped numerous businesses achieve compliance and operational efficiency. He holds a Bachelor of Commerce degree from DBRAU.",
      image: "/assets/people/gajedra.jpeg",
    },
    {
      name: "Mrs. Sakshi Katariya",
      role: "Human Resources & Consultant",
      about: "Mrs. Sakshi Katariya is the HR & Consultant at LEGALVALA, responsible for managing the team and overseeing compliance processes. With over three years of experience in human resources and consulting, she has been recognized with the 'Best Consultant' award from LEGALVALA for her outstanding contributions.",
      image: "/assets/people/sakshi.jpeg",
    },
    {
      name: "Mrs. Shweta Katariya",
      role: "Business Consultant",
      about: "Mrs. Shweta Katariya is a Business Consultant at LegalVala, bringing over 3 years of experience in business strategy and legal services. A B.Com graduate from DBRAU, Shweta specializes in helping businesses navigate legal complexities and optimize their operations. At LegalVala, she provides tailored solutions that ensure clients achieve compliance, growth, and success in a competitive market.",
      image: "/assets/people/shweta.png",
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
        <h5 className="text-center pb-3"><strong>Who We Are</strong></h5>

        <p>
          Welcome to <strong>LegalVala</strong> - your trusted partner in the world of legal and business services since 2020. We specialize in providing innovative, clear, and effective solutions that empower businesses to not only survive but thrive in today’s fast-paced market.
          <br /><br />
          At LegalVala, we understand the challenges businesses face when it comes to legal complexities. That’s why we offer a combination of expert legal advice and smart business strategies designed to help you streamline operations, ensure compliance, and reduce risks. Whether you're a new startup or an established company, we tailor our services to meet your unique needs.
          <br /><br />
          Our mission is simple: to make legal and business processes easier, more efficient, and more accessible for every client. We are passionate about building strong relationships and providing support that fosters growth and success.
          <br /><br />
          <strong>Why Choose LegalVala?</strong>
          <ul className="text-start">
            <li><strong>Expert Legal & Business Services:</strong> We combine legal expertise with strategic business advice to help you navigate every challenge with confidence.</li>
            <li><strong>Experience You Can Trust:</strong> Since 2020, we’ve helped countless businesses optimize their legal and business strategies for lasting success.</li>
            <li><strong>Personalized Solutions:</strong> We understand that every business is different. Our services are customized to fit your specific goals and challenges.</li>
            <li><strong>Results-Oriented Approach:</strong> We’re dedicated to delivering practical solutions that lead to real, measurable outcomes for your business.</li>
          </ul>
          <br />
          At LegalVala, we don’t just provide legal services—we partner with you to drive your business forward. Let us help you achieve your goals, so you can focus on what matters most—growing your business!
        </p>

      </section>

      {/* OUR EXPERTISE */}
      <section className="container py-5">
        <h6 className="guide-text">OUR EXPERTISE</h6>
        <h5 className="text-center pb-3"><strong>What We Specialize In</strong></h5>
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
        <h5 className="text-center pb-3"><strong>SUCCESS STORIES</strong></h5>
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

      {/* OUR TEAM (COMMENTED OUT) */}
      {/*
      <section className="team p-3 container">
        <h6 className="guide-text text-center">MEET OUR TEAM</h6>
        <h5 className="text-center pb-3"><strong>The Experts Behind LEGALVALA</strong></h5>
        <div className="row text-center">
          {team.map((member, index) => (
            <div key={index} className="col-md-4 p-3">
              <div className="card shadow-sm p-3">
                <img src={member.image} alt={member.name} width="100" height="120" style={{ borderRadius: "0" }} />
                <h6 className="fw-bold">{member.name}</h6>
                <p className="text-muted">{member.role}</p>
                <p className="small">{member.about}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      */}

    </div>
  );
};

export default AboutUs;
