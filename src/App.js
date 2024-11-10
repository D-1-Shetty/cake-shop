// src/App.js
import React, { useState } from "react";
import { cakes } from "./data"; // Assuming you have cake data
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CakeCard from "./components/CakeCard";
import CakeCategories from "./components/CakeCategories";
import Cart from "./components/Cart"; // Make sure Cart is imported correctly
import "./App.css";

// Home Component
const Home = ({ addToCart }) => (
  <div>
    <h1>Welcome to the Cake Shop</h1>
    <CakeCategories
      categories={["All", "Chocolate Cakes", "Fruit Cakes", "Vanilla Cakes"]}
    />
    <div className="cakes-list">
      {cakes.map((cake) => (
        <CakeCard key={cake.id} cake={cake} onAddToCart={addToCart} />
      ))}
    </div>
  </div>
);

const App = () => {
  const [cartItems, setCartItems] = useState([]); // Manage cart items

  // Function to add items to the cart
  const addToCart = (cake) => {
    // Check if the item is already in the cart
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === cake.id
    );
    if (existingItemIndex >= 0) {
      // If the item is already in the cart, update the quantity
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...cake, quantity: 1 }]);
    }
  };

  // Function to remove an item from the cart
  const onRemoveFromCart = (itemId) => {
    // Filter out the item by its id
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };

  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <Link to="/" className="nav-button">
            <button>Home</button>
          </Link>
          <Link to="/cart" className="nav-button">
            <button>Cart ({cartItems.length})</button>
          </Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
