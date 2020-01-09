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

        <div className="flyer">
          <div className="twoColumns">
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ea maxime animi incidunt quisquam ducimus enim. Quod illo quo quas?</div>
            <div className="illustration"><Img fluid={data.mobile.childImageSharp.fluid} alt="Mobile" /></div>
          </div>
          <div className="twoColumns">
            <div className="illustration"><Img fluid={data.charts.childImageSharp.fluid} alt="Charts" /></div>
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ea maxime animi incidunt quisquam ducimus enim. Quod illo quo quas?</div>
          </div>
          <div className="twoColumns">
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ea maxime animi incidunt quisquam ducimus enim. Quod illo quo quas?</div>
            <div className="illustration"><Img fluid={data.teamcollab.childImageSharp.fluid} alt="Collaboration" /></div>
          </div>
        </div>

      </section>
    )}
  />
)
export default About;
