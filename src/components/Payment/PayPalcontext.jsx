// src/PayPalContext.jsx
import React from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const PayPalContext = ({ children }) => {
  const initialOptions = {
    "client-id": "AToAHnJIPyj5c0O6DoGCE7hyhudN3ovXidGwe7FOi-VYywW5omAn_tN4rbfvxD8cQDmM1hmMCUL__GAN", // Replace with your actual PayPal Client ID
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      {children}
    </PayPalScriptProvider>
  );
};

export default PayPalContext;
