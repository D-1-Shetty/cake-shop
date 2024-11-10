import React, { useState } from "react";
import { cakes } from "./data";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CakeCard from "./components/CakeCard";
import CakeCategories from "./components/CakeCategories";
import Cart from "./components/Cart";
import "./App.css";

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
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (cake) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === cake.id
    );
    if (existingItemIndex >= 0) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...cake, quantity: 1 }]);
    }
  };

  const onRemoveFromCart = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/" className="nav-button">
            <button>Home</button>
          </Link>
          <Link to="/cart" className="nav-button">
            <button>Cart ({cartItems.length})</button>
          </Link>
        </nav>

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
