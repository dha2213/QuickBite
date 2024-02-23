import {React,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { clearCart } from "../Utils/cartSlice";
import { IMG_CLOUD_URL } from "../Constants";
import { useState } from "react";
import Payment from "./Payment";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [showPaymentCard, setShowPaymentCard] = useState(false);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate total bill
  const totalBill = cartItems.reduce((total, item) => total + item.price, 0) / 100;

  // Function to handle payment
  const handleMakePayment = () => {
    // Show the payment card
    setShowPaymentCard(true);
  };

  return (
    <div className="menu">
      <h1>
        Cart Items -{" "}
        <button onClick={handleClearCart} className="menu-btn">
          Clear Cart
        </button>
      </h1>
      {cartItems.length === 0 ? (
        <div className="flex-column">
          <img src={IMG_CLOUD_URL + "2xempty_cart_yfxml0"} alt="" />
          <h1>Your cart is empty</h1>
          <p>You can go to the home page to view more restaurants</p>
        </div>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <CartItemCard key={item.id + index} {...item} index={index} />
          ))}
          <div className="total-bill">
            <h2>Total Bill: ₹{totalBill.toFixed(2)}</h2>
            <button onClick={handleMakePayment} className="menu-btn">
              Make Payment
            </button>
          </div>
          {showPaymentCard && (
            <Payment totalBill={totalBill} setShowPaymentCard={setShowPaymentCard} />
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
  