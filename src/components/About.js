import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const about = [
    { name: "image1", image: "/images/shop1.svg" },
    { name: "image2", image: "/images/shop2.svg" },
  ];

  // Simple, elegant slider settings
  const sliderSettings2 = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease",
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div id="about" className="about-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-3">About Us</h2>
          
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="about-image-container shadow rounded overflow-hidden">
              <Slider {...sliderSettings2}>
                {about.map((item, index) => (
                  <div key={index}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid w-100"
                      style={{
                        height: "400px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content ps-lg-4">
              <h3 className="h3 fw-bold mb-4">Welcome to <span className="text-dark">Monu Electricals</span></h3>
              
              <p className="lead mb-4">
                Your one-stop destination for all your electrical needs with over 20 years of experience in providing quality products and services.
              </p>
              
              <p className="mb-4">
                We are a family-owned business dedicated to excellence in the electrical industry. Whether you need wiring, lighting, appliances, or accessories, we have it all at affordable prices. Our friendly and knowledgeable staff are always ready to assist you with any queries or requests.
              </p>
              
              <div className="row mb-4">
                <div className="col-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary rounded-circle p-2 me-3">
                      <i className="bi bi-check-lg text-white"></i>
                    </div>
                    <span>Quality Products</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary rounded-circle p-2 me-3">
                      <i className="bi bi-check-lg text-white"></i>
                    </div>
                    <span>Affordable Pricing</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary rounded-circle p-2 me-3">
                      <i className="bi bi-check-lg text-white"></i>
                    </div>
                    <span>Expert Advice</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary rounded-circle p-2 me-3">
                      <i className="bi bi-check-lg text-white"></i>
                    </div>
                    <span>Premium Brands</span>
                  </div>
                </div>
              </div>
              
              <p className="mb-4">
                At Monu Electricals, we value your satisfaction and trust above everything else. That's why we follow the highest standards of safety and professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .about-section {
          position: relative;
          background-color: #f8f9fa;
          overflow: hidden;
        }
        .about-image-container {
          border: 5px solid white;
        }
        .about-content {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991.98px) {
          .about-content {
            padding-top: 2rem;
            padding-left: 0 !important;
          }
        }
        .btn {
          padding: 0.6rem 1.5rem;
          border-radius: 4px;
          font-weight: 500;
          transition: all 0.3s;
        }
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: #0d6efd;
        }
        .slick-dots li.slick-active button:before {
          color: #0d6efd;
        }
      `}</style>
    </div>
  );
};

export default About;