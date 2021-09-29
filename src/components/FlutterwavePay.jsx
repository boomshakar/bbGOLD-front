import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const FlutterwavePay = () => {
  const config = {
    public_key: "FLWPUBK_TEST-d35b6d979eb30cf22096161fceaa3e39-X",
    tx_ref: new Date().getTime().toString(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    meta: {
      consumer_id: 23,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: "hefehmzy@gmail.com",
      phone_number: "07062449225",
      name: "Boomshakar",
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cartsssssssssssssssssssssss",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  return (
    <div>
      <h1>Hello Test user</h1>
      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Payment with React hooks
      </button>
    </div>
  );
};

export default FlutterwavePay;
