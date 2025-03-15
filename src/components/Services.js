import React from "react";
import { Link } from "react-router-dom";
import productData from "./productCatlog.json";

const Services = () => {
  const services = Object.entries(productData.services);

  return (
    <div id="services" className="services-section py-5 bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-4 fw-bold text-dark mb-2">Our Services</h2>
            
            <p className="lead text-muted">Quality electrical solutions for homes and businesses</p>
          </div>
        </div>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {services.map(([key, service]) => (
            <div key={key} className="col">
              <div className="card h-100 shadow-sm border-0 hover-card">
                <div className="service-img-container">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-img-top p-3"
                    style={{
                      height: "180px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
                <div className="card-footer bg-transparent border-0 text-center pb-4">
                  <Link to={`/services/${key}`} className="btn btn-primary rounded-pill px-4 fw-bold">
                    Learn More <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        .service-img-container {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 8px 8px 0 0;
        }
        
        
      `}</style>
    </div>
  );
};

export default Services;