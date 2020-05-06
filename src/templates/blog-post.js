import React, {Component} from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

class BlogPost extends Component {
    render(){
        const {
            data, 
            pageContext
        } = this.props

        const post = data.contentfulPost
        const { previous, next } = pageContext

        return(
            <div>
                <h1>{post.title}</h1>
                
                <nav>
                    <ul
                        style={{
                            display: `flex`,
                            flexWrap: `wrap`,
                            justifyContent: `space-between`,
                            listStyle: `none`,
                            padding: 0,
                        }}
                    >
                        <li>
                            {previous && (
                            <Link to={previous.slug} rel="prev">
                                ← {previous.title}
                            </Link>
                            )}
                        </li>
                        <li>
                            {next && (
                            <Link to={next.slug} rel="next">
                                {next.title} →
                            </Link>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

BlogPost.propTypes = {
    data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
    query blogPostQuery($slug: String!){
        contentfulPost(slug: {eq: $slug}) {
            title
            subtitle
            author
        }
    }
`