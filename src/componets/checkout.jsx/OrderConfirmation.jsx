import React from 'react';
import './OrderConfirmation.css';

const OrderConfirmation = ({ orderDetails = {
  orderId: "ORD123456789",
  date: new Date().toLocaleDateString(),
  items: [
    {
      id: 1,
      name: "Product 1",
      quantity: 2,
      price: 29.99,
      image: "path/to/image1.jpg"
    },
    // Add more items as needed
  ],
  subtotal: 59.98,
  shipping: 4.99,
  tax: 6.50,
  total: 71.47,
  shippingAddress: {
    name: "John Doe",
    street: "123 Main St",
    city: "Anytown",
    state: "ST",
    zip: "12345",
    country: "United States"
  }
} }) => {
  return (
    <div className="order-confirmation">
      <div className="confirmation-header">
        <i className="fas fa-check-circle"></i>
        <h1>Order Confirmed!</h1>
        <p>Thank you for your purchase</p>
      </div>

      <div className="order-details">
        <div className="order-info">
          <h2>Order Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="label">Order Number:</span>
              <span className="value">{orderDetails.orderId}</span>
            </div>
            <div className="info-item">
              <span className="label">Order Date:</span>
              <span className="value">{orderDetails.date}</span>
            </div>
          </div>
        </div>

        <div className="shipping-info">
          <h2>Shipping Address</h2>
          <div className="address">
            <p className="name">{orderDetails.shippingAddress.name}</p>
            <p>{orderDetails.shippingAddress.street}</p>
            <p>
              {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.zip}
            </p>
            <p>{orderDetails.shippingAddress.country}</p>
          </div>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="items-list">
            {orderDetails.items.map(item => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="quantity">Quantity: {item.quantity}</p>
                </div>
                <div className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="price-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${orderDetails.subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>${orderDetails.shipping.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>${orderDetails.tax.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${orderDetails.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="confirmation-actions">
        <button className="primary-button">
          <i className="fas fa-file-invoice"></i>
          Download Invoice
        </button>
        <button className="secondary-button">
          <i className="fas fa-shopping-bag"></i>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;