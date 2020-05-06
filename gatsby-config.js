/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const dotenv = require("dotenv")

if(process.env.NODE_ENV !== "production"){
  dotenv.config()
}

module.exports = {
  /* Your site config here */

  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `1yhklcsrrjff`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
}
