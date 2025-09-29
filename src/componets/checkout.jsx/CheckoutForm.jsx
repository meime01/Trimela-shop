import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    // Shipping Address
    shippingFirstName: '',
    shippingLastName: '',
    shippingStreet: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: '',
    shippingCountry: '',
    shippingPhone: '',
    // Billing Address
    sameAsShipping: true,
    billingFirstName: '',
    billingLastName: '',
    billingStreet: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    billingCountry: '',
    billingPhone: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      {/* Shipping Address Section */}
      <div className="form-section">
        <h2>Shipping Address</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="shippingFirstName">First Name*</label>
            <input
              type="text"
              id="shippingFirstName"
              name="shippingFirstName"
              value={formData.shippingFirstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="shippingLastName">Last Name*</label>
            <input
              type="text"
              id="shippingLastName"
              name="shippingLastName"
              value={formData.shippingLastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="shippingStreet">Street Address*</label>
          <input
            type="text"
            id="shippingStreet"
            name="shippingStreet"
            value={formData.shippingStreet}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="shippingCity">City*</label>
            <input
              type="text"
              id="shippingCity"
              name="shippingCity"
              value={formData.shippingCity}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="shippingState">State/Province*</label>
            <input
              type="text"
              id="shippingState"
              name="shippingState"
              value={formData.shippingState}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="shippingZip">ZIP/Postal Code*</label>
            <input
              type="text"
              id="shippingZip"
              name="shippingZip"
              value={formData.shippingZip}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="shippingCountry">Country*</label>
            <select
              id="shippingCountry"
              name="shippingCountry"
              value={formData.shippingCountry}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="shippingPhone">Phone Number*</label>
            <input
              type="tel"
              id="shippingPhone"
              name="shippingPhone"
              value={formData.shippingPhone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>

      {/* Billing Address Section */}
      <div className="form-section">
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="sameAsShipping"
            name="sameAsShipping"
            checked={formData.sameAsShipping}
            onChange={handleInputChange}
          />
          <label htmlFor="sameAsShipping">Billing address same as shipping</label>
        </div>

        {!formData.sameAsShipping && (
          <>
            <h2>Billing Address</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="billingFirstName">First Name*</label>
                <input
                  type="text"
                  id="billingFirstName"
                  name="billingFirstName"
                  value={formData.billingFirstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="billingLastName">Last Name*</label>
                <input
                  type="text"
                  id="billingLastName"
                  name="billingLastName"
                  value={formData.billingLastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="billingStreet">Street Address*</label>
              <input
                type="text"
                id="billingStreet"
                name="billingStreet"
                value={formData.billingStreet}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="billingCity">City*</label>
                <input
                  type="text"
                  id="billingCity"
                  name="billingCity"
                  value={formData.billingCity}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="billingState">State/Province*</label>
                <input
                  type="text"
                  id="billingState"
                  name="billingState"
                  value={formData.billingState}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="billingZip">ZIP/Postal Code*</label>
                <input
                  type="text"
                  id="billingZip"
                  name="billingZip"
                  value={formData.billingZip}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="billingCountry">Country*</label>
                <select
                  id="billingCountry"
                  name="billingCountry"
                  value={formData.billingCountry}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="billingPhone">Phone Number*</label>
                <input
                  type="tel"
                  id="billingPhone"
                  name="billingPhone"
                  value={formData.billingPhone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-button">
          Continue to Payment
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
