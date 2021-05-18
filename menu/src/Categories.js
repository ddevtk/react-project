import React from "react";

const Categories = ({ categories, onFilter }) => {
  return (
    <div className="btn-container">
      {categories.map((category, idx) => {
        return (
          <button
            className="filter-btn"
            key={idx}
            onClick={() => onFilter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
