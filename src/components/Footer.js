import React from 'react';
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <div id="contact" className="footer-wrapper">
      {/* Main Footer */}
      <footer className="py-5 bg-dark text-white position-relative">
        <div className="container">
          <div className="row">
            {/* Logo & About Column */}
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="footer-brand d-flex mb-4">
                <img 
                  src="/images/Monu-logo.svg" 
                  alt="Monu Electricals" 
                  className="me-3" 
                  style={{ height: "80px", width: "auto" }}
                />
                <div>
                  <h3 className="h4 text-white mb-0">Monu</h3>
                  <h4 className="h5 text-white-50">Electricals</h4>
                </div>
              </div>
              <p className="mb-4">
                Your trusted partner for quality electrical products and services since 1997. 
                We provide comprehensive electrical solutions for homes and businesses.
              </p>
              
            </div>
            
            {/* Quick Links Column */}
            <div className="col-md-4 col-lg-2 mb-4 mb-md-0">
              <h5 className="text-white mb-4 footer-heading">Quick Links</h5>
              <ul className="list-unstyled footer-links">
                <li className="mb-2"><a href="#home" className="footer-link">Home</a></li>
                <li className="mb-2"><a href="#services" className="footer-link">Services</a></li>
                <li className="mb-2"><a href="#about" className="footer-link">About Us</a></li>
                <li className="mb-2"><a href="#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>
            
            {/* Services Column */}
            <div className="col-md-4 col-lg-2 mb-4 mb-md-0">
              <h5 className="text-white mb-4 footer-heading">Our Services</h5>
              <ul className="list-unstyled footer-links">
                <li className="mb-2"><a href="http://localhost:3000/services/0" className="footer-link">Designer Lighting Solution</a></li>
                <li className="mb-2"><a href="http://localhost:3000/services/1#" className="footer-link">Commercial Electrical Solutions</a></li>
                <li className="mb-2"><a href="http://localhost:3000/services/2#" className="footer-link">Home Electrical Solutions</a></li>
                <li className="mb-2"><a href="http://localhost:3000/services/3#" className="footer-link">Kitchen Electrical Solutions</a></li>
                
              </ul>
            </div>
            
            {/* Contact Column */}
            <div className="col-md-4 col-lg-4">
              <h5 className="text-white mb-4 footer-heading">Contact Us</h5>
              <div className="contact-info">
                <div className="d-flex mb-3">
                  <Phone size={18} className="text-primary me-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="mb-0">9810468106</p>
                    <p className="mb-0">9213684115</p>
                  </div>
                </div>
                
                <div className="d-flex mb-3">
                  <Mail size={18} className="text-primary me-3 flex-shrink-0 mt-1" />
                  <p className="mb-0">monuelectricals@gmail.com</p>
                </div>
                
                <div className="d-flex mb-3">
                  <MapPin size={18} className="text-primary me-3 flex-shrink-0 mt-1" />
                  <div d-flex flex-column >
                    <p className="mb-1"><strong>Head Office:</strong><br />Sec-10, Vasundhara, Ghaziabad, Uttar Pradesh</p>
                    <p className="mb-0"><strong>Branch Office:</strong><br />Plot No-10, Govind Vihar II, Govindpuram, Ghaziabad, Uttar Pradesh</p>
                  </div>
                </div>
                
                <div className="d-flex mb-3">
                  <Clock size={18} className="text-primary me-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="mb-0"><strong>Hours:</strong><br />All Days Open</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Separator */}
        <div className="footer-wave-separator">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path
              fill="#212529"
              fillOpacity="1"
              d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
      </footer>
      
      {/* Copyright */}
      <div className="py-3 bg-darker text-center">
        <div className="container">
          <p className="mb-0 text-white-50 small">
            © {new Date().getFullYear()} Monu Electricals. All rights reserved.
          </p>
        </div>
      </div>
      
      <style jsx>{`
        .footer-wrapper {
          position: relative;
        }
        .footer-heading {
          position: relative;
          padding-bottom: 12px;
        }
        .footer-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 3px;
          background-color: #0d6efd;
          border-radius: 10px;
        }
        .footer-link {
          color: #adb5bd;
          text-decoration: none;
          transition: color 0.3s ease, transform 0.3s ease;
          display: inline-block;
        }
        .footer-link:hover {
          color: #0d6efd;
          transform: translateX(5px);
        }
        .social-icon-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .social-icon-link:hover {
          background-color: #0d6efd;
          transform: translateY(-3px);
        }
        .social-icon {
          color: white;
        }
        .contact-info p {
          color: #adb5bd;
        }
        .footer-wave-separator {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          transform: rotate(180deg);
        }
        .footer-wave-separator svg {
          position: relative;
          display: block;
          width: 100%;
          height: 120px;
        }
        .bg-darker {
          background-color: #191d21;
        }
      `}</style>
    </div>
  );
};

export default Footer;