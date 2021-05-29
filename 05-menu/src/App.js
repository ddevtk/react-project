import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

function App() {
  const allCategories = ["all", ...new Set(data.map((item) => item.category))];
  const [items, setItems] = useState(data);
  const filteredItemHandler = (category) => {
    if (category === "all") {
      setItems(data);
      return;
    }
    const filteredItem = data.filter((item) => item.category === category);
    setItems(filteredItem);
  };

  return (
    <section className="menu section">
      <div className="title">
        <h2>Our menu</h2>
        <div className="underline" />
      </div>
      <Categories onFilter={filteredItemHandler} categories={allCategories} />
      <Menu items={items} />
    </section>
  );
}

export default App;
