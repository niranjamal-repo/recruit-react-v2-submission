import { FormData, FormErrors } from '../types';

export const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  // 1. Card Number Validation (16 digits)
  const cleanedCardNumber = data.cardNumber.replace(/\s/g, '');
  if (!cleanedCardNumber || cleanedCardNumber.length !== 16 || !/^\d+$/.test(cleanedCardNumber)) {
    errors.cardNumber = 'Card Number must be 16 digits.';
  }

  // 2. CVC Validation (3 or 4 digits)
  const cleanedCVC = data.cvc.trim().replace(/\s/g, '');
  if (!cleanedCVC || cleanedCVC.length < 3 || cleanedCVC.length > 4 || !/^\d+$/.test(cleanedCVC)) {
    errors.cvc = 'CVC must be 3 or 4 digits.';
  }

  // 3. Expiry Validation (MM/YY format, not expired)
  const [month, year] = data.expiry.split('/');
  const currentYear = new Date().getFullYear() % 100;
  const currentMonth = new Date().getMonth() + 1;

  if (!month || !year || month.length !== 2 || year.length !== 2) {
    errors.expiry = 'Expiry must be MM/YY format.';
  } else if (Number(month) < 1 || Number(month) > 12) {
    errors.expiry = 'Invalid month.';
  } else if (Number(year) < currentYear || (Number(year) === currentYear && Number(month) < currentMonth)) {
    errors.expiry = 'Card is expired.';
  }

  return errors;
};