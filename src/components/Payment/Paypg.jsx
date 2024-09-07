// src/App.jsx
import React from 'react';
import PayPalContext from './PayPalContext';
import Checkout from './Checkout';

const Paypg = () => {
  return (
 <div>
       
 


    <PayPalContext>
    
      <Checkout />
    </PayPalContext>
    </div>
  );
};

export default Paypg;
