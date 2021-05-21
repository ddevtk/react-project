import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert, setAlert] = useState(false);

  const bgColor = rgb.join(",");
  useEffect(() => {
    const timer = setInterval(() => {
      setAlert(false);
    }, 2000);
    return () => clearInterval(timer);
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bgColor})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(`#${hex}`);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
      {alert ? <p className="alert">Copied to clipboard</p> : null}
    </article>
  );
};

export default SingleColor;
