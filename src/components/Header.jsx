import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="sombra">
        <div className="contenedor">
          <div className="barra">
            <a className="logo" href="/">
              <img src="IMG/menu.png" alt="Menu" />
            </a>
            <nav className="navegacion">
              <a href="/smartphones" className="navegacion__enlace">
                <i className="fas fa-mobile-alt icono"></i> Smartphones
              </a>
              <a href="/accesorios" className="navegacion__enlace">
                <i className="fas fa-headphones icono"></i> Accesorios
              </a>
              <a href="/electronica" className="navegacion__enlace">
                <i className="fas fa-tv icono"></i> Electrónica
              </a>
              <a href="/carrito" className="navegacion__enlace">
                <i className="fas fa-shopping-cart icono"></i> Carrito
              </a>
            </nav>
          </div>
          <div className="header__texto">
            <h2 className="no-margin"></h2>
            <h4 className="no-margin"></h4>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
