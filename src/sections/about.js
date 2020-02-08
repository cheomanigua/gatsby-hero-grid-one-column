import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => (

  <StaticQuery
    query={graphql`
      query {
        mobile: file(relativePath: {eq: "mobile.png"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        },
        charts: file(relativePath: {eq: "charts.png"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        },
        teamcollab: file(relativePath: {eq: "team-collab.png"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}

    render={data => (
      <section id="about">        
        <div className="twoColumns">
          <div className="text">Diseño "responsive" para que la navegación y experiencia del usuario con la interfaz sea siempre perfecta independientemente del dispositivo utilizado</div>
          <div className="illustration"><Img fluid={data.mobile.childImageSharp.fluid} alt="Mobile" /></div>
        </div>
        <div className="twoColumns">
          <div className="illustration"><Img fluid={data.charts.childImageSharp.fluid} alt="Charts" /></div>
          <div className="text">Conseguimos las puntuaciones con los valores máximos en las pruebas de rendimiento y SEO de stándares como Lighthouse</div>
        </div>
        <div className="twoColumns">
          <div className="text">Ofrecemos formación para el mantenimiento e implementación de nuevas funcionalidades de tu sitio web en el futuro</div>
          <div className="illustration"><Img fluid={data.teamcollab.childImageSharp.fluid} alt="Collaboration" /></div>
        </div>
      </section>
    )}
  />
)
export default About;
