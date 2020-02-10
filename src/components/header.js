import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const Header = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "header.jpg" }) {
          childImageSharp {
            fluid(quality: 72, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage style={{zIndex:'10'}}
          Tag="header"
          className={className}
          fluid={imageData}
        >
          <header id="home">
            <nav>
              <div id="logo"><a href="#home">DIGITAL REALM</a></div>
              <ul>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#about">Nosotros</a></li>
                <li><a href="#contact">Contacto</a></li>
              </ul>
            </nav>
            <div className="bg-image"></div>
              <h1>Desarrollo Web y Marketing</h1>
              <h3>Da visibilidad a tu empresa, negocio o proyecto con nuestros servicios</h3>
              <a href="#contact" className="btn">Contáctanos</a>
          </header>
        </BackgroundImage>
      )
    }
    }
  />
)

export default Header;
