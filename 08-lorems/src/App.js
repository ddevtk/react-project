import React, { useState } from "react";
import data from "./data";
function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);
  const changedHandler = (e) => {
    setCount(+e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (count < 1) {
      setText(data.slice(0, 1));
    }
    if (count > data.length) {
      setCount(data.length);
      setText(data.slice(0, count));
    } else {
      setCount(data.slice(0, count));
    }
  };
  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum ?</h3>
      <form className="lorem-form" onSubmit={submitHandler}>
        <label htmlFor="amount">Paragraphs</label>
        <input
          name="amount"
          type="number"
          id="amount"
          value={count}
          onChange={changedHandler}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, idx) => {
          return <p key={idx}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
