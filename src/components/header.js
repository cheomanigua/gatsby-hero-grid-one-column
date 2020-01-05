import React from 'react'

const Header = () => <div className="wrapper" id="home">
  
 <header>
      <nav>
        <div id="logo"><a href="#home">DIGITAL REALM</a></div>
        <ul>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#about">Nosotros</a></li>          
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      <div className="bg-image"></div>
      <div className="content-wrap">
        <h1>Desarrollo Web y Marketing</h1>
        <h3>Da visibilidad a tu empresa, negocio o proyecto con nuestros servicios</h3>
        <a href="#contact" className="btn">Contáctanos</a>
      </div>
    </header>

</div>
  
export default Header;
