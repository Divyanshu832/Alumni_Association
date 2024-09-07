import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import './Checkout.css';
import PayCard from './PayCard';
const Checkout = () => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderID) => {
    // Handle post-payment actions
    setPaidFor(true);
  };

  if (paidFor) {
    return <h1>Payment successful! Thank you for your purchase.</h1>;
  }

  return (

    <div className="bgrnd">
   
    <div className="checkout">
      
        <div className='boxx1'>
      <h1 className=' font-bold'>Fund Our Vision</h1>
      <div className="payment-options">
        <div className="paypal-button">
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "80", // Replace with the price
                    },
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              return actions.order.capture().then((details) => {
                handleApprove(data.orderID);
              });
            }}
            onError={(err) => {
              setError(err);
              console.error("PayPal Checkout Error", err);
            }}
          />
        </div>
        
      </div>
      {error && <div className="error">An error occurred during payment. Please try again.</div>}
      </div>
    <div className='boxx2'>
      <PayCard 
      imageSrc={"https://www.rewariyasat.com/h-upload/2022/03/14/21977-rgpv-news.jpg"}
      description={"Give back to the place that shaped you!"}
      desc={"Support our college and help future students thrive."}
      />
      </div>
    
    </div>


    </div>
  );
};

export default Checkout;
