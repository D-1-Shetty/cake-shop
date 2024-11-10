import React from "react";

const CakeCard = ({ cake, onAddToCart }) => {
  return (
    <div className="cake-card">
      <img src={cake.image} alt={cake.name} />
      <h3>{cake.name}</h3>
      <p>{cake.description}</p>
      <p>
        <strong>₹{cake.price.toFixed(2)}</strong>
      </p>
      <button onClick={() => onAddToCart(cake)}>Add to Cart</button>
    </div>
  );
};

export default CakeCard;
