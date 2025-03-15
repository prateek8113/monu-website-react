import React from 'react';
import { useCart } from './Addtocart';

const Cart = () => {
  const { cart, removeFromCart, clearCart, getCartTotal } = useCart(); // Cart functions from context
  
  // Function to send cart details to WhatsApp and clear the cart
  const handleCheckout = () => {
    const phoneNumber = "7303055919"; // Replace with your WhatsApp number
    const message = cart.map(item => 
      `*${item.name}*\nPrice: ₹${item.price}\nView Image: ${item.image}`
    ).join("\n\n");

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Clear the cart after checkout
    clearCart();
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="lead text-muted">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="row">
            {cart.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="card shadow border-0">
                  <div className="text-center p-3">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="img-fluid rounded"
                      style={{ maxWidth: '100%', height: 'auto' }} // Ensures full image display
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">{item.name}</h5>
                    <p className="card-text">
                      <strong>Quantity:</strong> {item.quantity}
                    </p>
                    <p className="card-text">
                      <strong>Price:</strong> ₹{item.price * item.quantity}
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-0 text-center">
                    <button 
                      className="btn btn-sm btn-outline-danger" 
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Total and Buttons */}
          <div className="mt-4 text-end">
            <h4>Total: ₹{getCartTotal()}</h4>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
            <button 
              className="btn btn-warning" 
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <button className="btn btn-primary" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
