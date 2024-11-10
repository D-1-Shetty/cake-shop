// src/components/CakeCategories.js
import React from "react";

const CakeCategories = ({ categories, onSelectCategory }) => {
  return (
    <div className="categories">
      <h2>Categories</h2>
      {categories.map((category) => (
        <button key={category} onClick={() => onSelectCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CakeCategories;
