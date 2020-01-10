import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// function SEO({ description, lang, meta, title }) {
//   const { site } = StaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//           }
//         }
//       }
//     `
//   );

//   const metaDescription = description || site.siteMetadata.description

//   return (
//     <Helmet
//       htmlAttributes={{
//         lang,
//       }}
//       title={title}
//       titleTemplate={`%s | ${site.siteMetadata.title}`}
//       meta={[
//         {
//           name: `description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:title`,
//           content: title,
//         },
//         {
//           property: `og:description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:type`,
//           content: `website`,
//         },
//         {
//           name: `twitter:card`,
//           content: `summary`,
//         },
//         {
//           name: `twitter:creator`,
//           content: site.siteMetadata.author,
//         },
//         {
//           name: `twitter:title`,
//           content: title,
//         },
//         {
//           name: `twitter:description`,
//           content: metaDescription,
//         },
//       ].concat(meta)}
//     />
//   )
// }

// SEO.defaultProps = {
//   lang: `es`,
//   meta: [],
//   description: ``,
// }

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// }

// export default SEO


const SEO = ({ title, description, lang}) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          defaultLang,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        lang: lang || defaultLang,
      }

      return (
        <>
          <Helmet 
            htmlAttributes={{
              lang,
            }}
            title={seo.title}>
            <meta name="description" content={seo.description} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  lang: `es`,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
      }
    }
  }
`