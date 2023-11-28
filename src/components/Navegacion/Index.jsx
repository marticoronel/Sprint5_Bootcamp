import React, { useState } from 'react';
import './navegacion.css';

export default function Navegacion() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const menuHamburguesa = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <>
      <nav className={`navegacion ${menuAbierto ? 'abierto' : ''}`} id="navegacion">
        <img className="navegacion__logo" src="icons/logo.svg" alt="" />
        <div className={`navegacion__enlaces ${menuAbierto ? 'abierto' : ''}`}>
          <a className="navegacion__enlaces--item" href="#features">Features</a>
          <a className="navegacion__enlaces--item" href="">Team</a>
          <a className="navegacion__enlaces--item" href="">Sign in</a>
        </div>
        <div className="navegacion__hamburguesa" onClick={menuHamburguesa}>
          <div className={`barra ${menuAbierto ? 'cruz' : ''}`}></div>
          <div className={`barra ${menuAbierto ? 'cruz' : ''}`}></div>
          <div className={`barra ${menuAbierto ? 'cruz' : ''}`}></div>
        </div>
      </nav>
    </>
  );
}
