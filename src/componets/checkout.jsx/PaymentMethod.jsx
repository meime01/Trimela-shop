import React, { useState } from 'react';
import './PaymentMethod.css';

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add payment processing logic
    console.log('Payment details:', { paymentMethod, cardDetails });
  };

  return (
    <div className="payment-method">
      <h2>Payment Method</h2>
      
      <div className="payment-options">
        <button
          type="button"
          className={`payment-option ${paymentMethod === 'credit-card' ? 'active' : ''}`}
          onClick={() => handlePaymentMethodChange('credit-card')}
        >
          <i className="fas fa-credit-card"></i>
          <span>Credit Card</span>
        </button>
        
        <button
          type="button"
          className={`payment-option ${paymentMethod === 'paypal' ? 'active' : ''}`}
          onClick={() => handlePaymentMethodChange('paypal')}
        >
          <i className="fab fa-paypal"></i>
          <span>PayPal</span>
        </button>
      </div>

      {paymentMethod === 'credit-card' ? (
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={cardDetails.cardNumber}
              onChange={handleCardInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cardName">Name on Card</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              placeholder="John Doe"
              value={cardDetails.cardName}
              onChange={handleCardInputChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                value={cardDetails.expiryDate}
                onChange={handleCardInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="123"
                value={cardDetails.cvv}
                onChange={handleCardInputChange}
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              <i className="fas fa-lock"></i>
              Pay Securely
            </button>
          </div>
        </form>
      ) : (
        <div className="paypal-section">
          <button type="button" className="paypal-button">
            <i className="fab fa-paypal"></i>
            Continue with PayPal
          </button>
          <p className="paypal-note">
            You'll be redirected to PayPal to complete your payment securely.
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;