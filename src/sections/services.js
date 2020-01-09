import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Services = () => (

  <StaticQuery
    query={graphql`
      query {
        desarrolloweb: file(relativePath: {eq: "desarrolloweb.jpeg"}) {
          childImageSharp {
            fluid (maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        aplicacionesmoviles: file(relativePath: {eq: "aplicacionesmoviles.jpg"}) {
          childImageSharp {
            fluid (maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        marketingonline: file(relativePath: {eq: "marketingonline.jpeg"}) {
          childImageSharp {
            fluid (maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}

    render={data => (
      <section id="services">

        <div className="card">
          <Img fluid={data.desarrolloweb.childImageSharp.fluid} alt="Desarrollo Web" />
          <div className="card-content">
            <h3 className="card-title">Desarrollo Web</h3>
            <p>Diseño e implementación del front-end, desarrollo del back-end y bases de datos, configuración de servidores y contenedores.</p>
          </div>
        </div>
        <div className="card">
          <Img fluid={data.aplicacionesmoviles.childImageSharp.fluid} alt="Aplicaciones móviles" />
          <div className="card-content">
            <h3 className="card-title">Aplicaciones Móviles</h3>
            <p>Desarrollo de aplicaciones nativas para Android y iOS, mejorando de forma significativa la experiencia del usuario en su dispositivo móvil.</p>
          </div>
        </div>
        <div className="card">
          <Img fluid={data.marketingonline.childImageSharp.fluid} alt="Marketing Online" />
          <div className="card-content">
            <h3 className="card-title">Marketing Online</h3>
            <p>Estudio de mercado y estrategias de marketing. Implementación SEO y posicionamiento en motores de búsqueda.</p>
          </div>
        </div>

      </section>
    )}
  />
)
export default Services

