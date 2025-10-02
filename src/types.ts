export interface FormData {
  cardNumber: string;
  cvc: string;
  expiry: string;
}

export interface FormErrors {
  cardNumber?: string;
  cvc?: string;
  expiry?: string;
}

export type ViewState = 'form' | 'menu';
