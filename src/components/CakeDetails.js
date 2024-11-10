import React, { useState } from "react";

const CakeDetails = ({ cake, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="cake-details">
      <img src={cake.image} alt={cake.name} />
      <h2>{cake.name}</h2>
      <p>{cake.description}</p>
      <p>Ingredients: {cake.ingredients}</p>
      <p>Price: ${cake.price}</p>
      <label>Quantity:</label>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={() => onAddToCart(cake, quantity)}>Add to Cart</button>
    </div>
  );
};

export default CakeDetails;
