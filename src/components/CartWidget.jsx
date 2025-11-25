import React from "react";
import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="cart-widget">
      <span role="img" aria-label="carrito" className="cart-widget__icon">🛒</span>
      <span className="cart-widget__badge">3</span>
    </div>
  );
}

export default CartWidget;
