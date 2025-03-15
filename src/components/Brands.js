import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brands = () => {
  const brands = [
    { name: "Anchor", logo: "images/anchor-logo.png" },
    { name: "Bajaj", logo: "/images/bajaj-electricals-logo.svg" },
    { name: "Crompton", logo: "/images/crompton-logo.png" },
    { name: "Sujata", logo: "/images/sujata.svg" },
    { name: "RR Kabel", logo: "/images/rr.svg" },
    { name: "Havells", logo: "/images/havells-logo.png" },
    { name: "Philips", logo: "/images/cona-logo.png" },
    { name: "Wipro", logo: "/images/philips1.png" },
  ];

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
    arrows: false,
  };

  return (
    <div className="brands-section py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold mb-2">Our Premium Brands</h2>
            
            <p className="lead text-muted mb-4">
              We partner with the world's leading electrical manufacturers to
              bring you the best in quality and innovation.
            </p>
          </div>
        </div>

        <div className="brand-slider-container w-100">
          <Slider {...sliderSettings}>
            {brands.map((brand, index) => (
              <div key={index} className="brand-item text-center">
                <div className="brand-card mx-1 py-3 px-3">
                  <div className="brand-logo-container">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="brand-logo"
                    />
                  </div>
                  <p className="brand-name mt-3 mb-0">{brand.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx>{`
        .brands-section {
          background-color: #f8f9fa;
          position: relative;
          overflow: hidden;
        }
        .brands-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(13, 110, 253, 0.05) 0%, rgba(255, 255, 255, 0) 50%);
          z-index: 0;
        }
        .container {
          position: relative;
          z-index: 1;
        }
        .brand-card {
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .brand-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        .brand-logo-container {
          height: 80px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .brand-logo {
          max-height: 80px;
          max-width: 100%;
          /* Removed grayscale filter */
        }
        .brand-name {
          font-weight: 600;
          color: #495057;
          margin-top: 15px;
          font-size: 14px;
        }
        .divider-custom {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 1.25rem 0;
        }
        .divider-custom-line {
          width: 100%;
          max-width: 7rem;
          height: 0.25rem;
          background-color: #0d6efd;
          border-radius: 1rem;
          margin: 0 1rem;
        }
        .divider-custom-icon {
          font-size: 1.5rem;
          color: #0d6efd;
        }
        .brands-slider .slick-dots li button:before {
          color: #0d6efd;
        }
        .brand-slider-container {
          padding: 5px 0;
        }
      `}</style>
    </div>
  );
};

export default Brands;