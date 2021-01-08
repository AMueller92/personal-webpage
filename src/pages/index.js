import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchPosts from "../components/searchPosts"
import { rhythm } from "../utils/typography"

class Index extends React.Component {
  render() {
    const { data, navigate, location } = this.props
    const posts = data.allMdx.edges
    const localSearchBlog = data.localSearchBlog

    return (
      <Layout location={this.props.location}>
        <SEO title="All posts" />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
          }}
        >
          <SearchPosts
            posts={posts}
            localSearchBlog={localSearchBlog}
            navigate={navigate}
            location={location}
          />
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
