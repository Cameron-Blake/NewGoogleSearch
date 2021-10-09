import React from "react";

function Button({ size, type, className, children, id, onClick }) {
  return (
    <button onClick={onClick} id={id} className={["btn",`btn-${size}`, `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}

export default Button;