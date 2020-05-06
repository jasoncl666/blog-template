import React from "react"
import Link from 'gatsby-link'
import { graphql } from "gatsby"

import Nav from "../Components/Nav"
import Card from "../Components/Card"

import img1 from "../img/nature1.jpg"
import img2 from "../img/nature2.jpg"
import img3 from "../img/nature3.jpg"


import '../css/Home.css'

const BlogPost = ({node}) => {
  return (
    <li>
      {/* <img src={node.featureImage.responsiveResolution.src}/> */}
      <Link to={node.slug}><h3>{node.title}</h3></Link>
      {/* <div>{node.content.childMarkdownRemark.excerpt}</div> */}
    </li>
  )
}
const IndexPage = ({data}) => (

  <div className="homepage-container">
      <div className="home-banner">
          <Nav />

      </div>

      <div className="background">
          {/* <ul className='blog-post'>
              {data.allContentfulPost.edges.map((edge) => <BlogPost node={edge.node} />)}
          </ul> */}
      </div>

      <div className="home-main">
          <Card image={img1}/>
          <Card image={img2}/>
          <Card image={img2}/>

      </div>
  </div>
  
)

export default IndexPage

export const pageQuery = graphql `
    query {
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

