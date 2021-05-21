import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(3);

  useEffect(() => {
    if (index > people.length - 1) setIndex(0);
    if (index < 0) setIndex(people.length - 1);
  }, [setIndex, index]);

  useEffect(() => {
    let timer = setInterval(() => {
      setIndex(index + 1);
    }, 2000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, idx) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (idx === index) {
            position = "activeSlide";
          }
          if (idx === index - 1 || (index === 0 && idx === people.length - 1)) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
