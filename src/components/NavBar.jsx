
import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <ul className="navbar__links" style={{marginRight: '1.5rem'}}>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
