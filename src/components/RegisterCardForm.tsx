import React, { useState } from 'react';
import { FormData, FormErrors } from '../types';
import { validateForm } from '../utils/validateForm';

interface RegisterCardFormProps {
  firstName: string;
}

const RegisterCardForm: React.FC<RegisterCardFormProps> = ({ firstName }) => {
  const [formData, setFormData] = useState<FormData>({
    cardNumber: '',
    cvc: '',
    expiry: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // CVC Formatting
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };
  
  // Card Number formatting
  const handleChangeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const digitsOnly = rawValue.replace(/\D/g, '');

    let formattedValue = '';
    for (let i = 0; i < Math.min(digitsOnly.length, 16); i += 4) {
      formattedValue += digitsOnly.substring(i, i + 4);
      if (i + 4 < digitsOnly.length && i + 4 <= 16) {
        formattedValue += ' ';
      }
    }
    setFormData(prevData => ({ ...prevData, cardNumber: formattedValue }));
  };

  // Expiry formatting
  const handleChangeExpiry = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;   
    let digitsOnly = rawValue.replace(/\D/g, '');

    let formattedValue = digitsOnly;
    if (digitsOnly.length > 2) {
        formattedValue = digitsOnly.substring(0, 2) + '/' + digitsOnly.substring(2, 4);
    }
    
    formattedValue = formattedValue.substring(0, 5); 
    setFormData(prevData => ({ ...prevData, expiry: formattedValue }));
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return <div className="success-message">Registration Successful!</div>;
  }

  return (
    <div className="form-view-container">
      <h2>Welcome {firstName}</h2>
      
      <form onSubmit={handleSubmit} className="card-form">
        
        {/* Credit Card Number Input */}
        <div className="input-group">
          <label htmlFor="cardNumber" className="sr-only">Credit card number</label>
          <input
            id="cardNumber"
            type="tel"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChangeCardNumber}
            maxLength={19}
            placeholder="Credit card number"
            aria-invalid={!!errors.cardNumber}
          />
          {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
        </div>

        {/* CVC and Expiry Group */}
        <div className="input-group-inline">
          
          <div className="input-field-inline">
            <label htmlFor="cvc" className="sr-only">CVC</label>
            <input
              id="cvc"
              type="tel"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              maxLength={4}
              placeholder="CVC"
              aria-invalid={!!errors.cvc}
            />
            {errors.cvc && <p className="error-message">{errors.cvc}</p>}
          </div>

          <div className="input-field-inline">
            <label htmlFor="expiry" className="sr-only">Expiry (MM/YY)</label>
            <input
              id="expiry"
              type="tel"
              name="expiry"
              value={formData.expiry}
              onChange={handleChangeExpiry}
              maxLength={5} 
              placeholder="expiry"
              aria-invalid={!!errors.expiry}
            />
            {errors.expiry && <p className="error-message">{errors.expiry}</p>}
          </div>
        </div>
        
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default RegisterCardForm;