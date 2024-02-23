import React, { useEffect } from "react";

const Payment = ({ totalBill }) => {
  useEffect(() => {
    // Load Razorpay script dynamically
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up Razorpay script
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/payment/orders', {
        method: "POST",
        body: JSON.stringify({ amount: totalBill * 100 }), // Convert to cents
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      const data = await res.json();
      const options = {
        key: "rzp_test_YMP1b4R5kixkm3", // Replace with your Razorpay key
        amount: data.amount,
        currency: "INR",
        name: "Total Price",
        description: "Test Transaction",
        image: "https://i.ibb.co/KsjYw7g/ourlogo.jpg",
        order_id: data.id,
        handler: function (response) {
          console.log(response);
          // Handle successful payment response here
          alert("Your odered has placed!");
        },
        theme: {
          color: "#3399cc"
        }
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.log(error);
      alert("Error occurred while processing payment!");
    }
  };

  return (
    <div className="payment-card">
      <h2>Payment Details</h2>
      <p>Total Bill: ₹{totalBill.toFixed(2)}</p>
      {/* Add your payment form fields here */}
      <button onClick={handlePayment} className="payment-btn">
        Pay with Razorpay
      </button>
    </div>
  );
};

export default Payment;
