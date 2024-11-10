import React from "react";

const formatPrice = (price) => {
  return `₹${price.toFixed(2)}`;
};

const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x {formatPrice(item.price)} ={" "}
              {formatPrice(item.quantity * item.price)}
              <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>
        Total:{" "}
        {formatPrice(
          cartItems.reduce(
            (total, item) => total + item.quantity * item.price,
            0
          )
        )}
      </p>
    </div>
  );
};

export default Cart;
