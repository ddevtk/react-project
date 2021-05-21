import React, { Fragment, useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [colorVal, setColorVal] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    try {
      setError(false);
      let colors = new Values(colorVal).all(10);
      setList(colors);
    } catch (err) {
      setError(true);
      console.error(err);
    }
  };
  return (
    <Fragment>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            onChange={(e) => {
              setColorVal(e.target.value);
            }}
            value={colorVal}
            placeholder="#f15025"
            className={`${error ? "error" : "null"}`}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, idx) => {
          return (
            <SingleColor key={idx} {...color} hex={color.hex} index={idx} />
          );
        })}
      </section>
    </Fragment>
  );
}

export default App;
