const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local Contentful graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
    graphql(
      `
        {
          allContentfulProperties {
            edges {
              node {
                id
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      // Create Product pages
      const productTemplate = path.resolve(`./src/templates/property.js`)
      // We want to create a detailed page for each
      // product node. We'll just use the Contentful id for the slug.
      _.each(result.data.allContentfulProperties.edges, edge => {
        // Gatsby uses Redux to manage its internal state.
        // Plugins and sites can use functions like "createPage"
        // to interact with Gatsby.
        createPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: `/properties/${edge.node.id}/`,
          component: slash(productTemplate),
          context: {
            id: edge.node.id,
          },
        })
      })
      resolve()
    })
  })
}
