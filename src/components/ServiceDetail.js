import React from "react";
import { useParams } from "react-router-dom";
import productData from "./productCatlog.json"; // Import JSON
import { useCart } from "./Addtocart"; // Import the hook
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = productData.services[id]; // Access service by key
  const products = productData.productCatalog[id] || []; // Ensure it's an array
  const { addToCart } = useCart();

  if (!service) {
    return <h2 className="text-center mt-4">Service not found!</h2>;
  }

  const sendWhatsAppMessage = (product) => {
    const phoneNumber = "7303055919";
    const message = `Hello, I am interested in the ${product.name}.\n\nSpecifications:\n${Object.entries(product.specs)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n")}\n\nCould you please provide the price and more details?`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    window.dispatchEvent(new CustomEvent("cart-updated"));
    toast.success(`${product.name} has been added to the cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  };

  return (
    <>
      <Navbar className="Navbar-fixed-top" />
      <div className="container py-1">
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="display-5 mb-1">{service.title}</h2>
            <p className="lead text-muted mb-1">{service.description}</p>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {products.map((product, index) => (
            <div key={index} className="col">
              <div className="card h-200 shadow border-0 rounded overflow-hidden">
                <div style={{ height: "300px", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8f9fa" }}>
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="card-img-top h-100 w-100 object-fit-cover"
                    />
                  ) : (
                    <p className="text-muted text-center">{product.name}</p>
                  )}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <div className="mt-3">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="d-flex justify-content-between py-1 border-bottom">
                        <span className="text-muted text-capitalize">{key}:</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="card-footer bg-transparent d-flex gap-2">
                  <button className="btn btn-outline-primary flex-grow-1" onClick={() => sendWhatsAppMessage(product)}>
                    Enquire
                  </button>
                  <button className="btn btn-success flex-grow-1" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default ServiceDetail;
