/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Desarrollo Web y Marketing",
    description: "Nuestro estudio diseña y desarrolla sitios webs rápidos y con un marketing y SEO de alta calidad.",
    author: "Sergio Sanchez",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    { 
      resolve: `gatsby-source-filesystem`,
      options: {      
        path: `${__dirname}/src/images/`,
      } 
    },
  ],
}



