const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  const result = await graphql(
    `
      {
        allContentfulPost {
          edges{
            node{
              title
              subtitle
              author
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  // const posts = result.data.allMarkdownRemark.edges
  const posts = result.data.allContentfulPost.edges


  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      // path: post.node.fields.slug,
      path: post.node.slug,
      component: blogPost,
      context: {
        // slug: post.node.fields.slug,
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })
}