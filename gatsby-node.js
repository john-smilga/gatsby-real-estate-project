/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const storeTemplate = path.resolve('src/pages/sample.js')
    resolve(
      graphql(`
        {
          allContentfulProperties {
            edges {
              node {
                id
                description {
                  description
                }
                neighborhood {
                  neighborhood
                }
                features {
                  content
                }
                images {
                  fluid(maxWidth: 800) {
                    src
                    aspectRatio
                    srcSet
                    sizes
                  }
                }
                title
                address
                type
                price
                bedrooms
                bathrooms
                garages
                city
                footage
                featured
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulProperties.edges.forEach(edge => {
          createPage({
            path: `/properties/${edge.node.id}`,
            component: storeTemplate,
            context: {
              property: edge.node,
            },
          })
        })
        return
      })
    )
  })
}
