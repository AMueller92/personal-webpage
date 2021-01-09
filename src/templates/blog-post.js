import React from "react"
import {useEffect} from "react";
import Link from "../components/Link"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import {Typography, Grid} from "@material-ui/core";
import Comment from "../components/comment"


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <Typography variant="h6" style={{marginTop: 90}}>More? Well, there you go:</Typography>
        <hr
          style={{
            marginBottom: rhythm(0.5),
          }}
        />

        <Grid container justify="space-between">
          <Grid item xs={6} sm={6}>
            {previous && (
                <Link
                  variant="h6"
                  style={{
                    boxShadow: `none`,
                    color: `inherit`,
                  }}
                  to={`/blog${previous.fields.slug}`} rel="prev"
                >
                  <Grid container justify="flex-start">
                    <Grid item xs={12} sm={8}>
                      <Typography variant="body2">← Previous Post</Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>

                      {previous.frontmatter.title}

                    </Grid>
                  </Grid>
                </Link>
            )}
          </Grid>
          <Grid item xs={6} sm={6}>
            {next && (
              <Link
                    variant="h6"
                style={{
                  boxShadow: `none`,
                  color: `inherit`,
                  margin: 0,
                  padding: 0
                }}
                to={`/blog${next.fields.slug}`} rel="next"
              >
                <Grid container justify="flex-end">
                  <Grid item container xs={12} justify="flex-end">
                    <Typography variant="body2">Next Post →</Typography>
                  </Grid>
                  <Grid item container xs={12} justify="flex-end">

                      {next.frontmatter.title}

                  </Grid>
                </Grid>
              </Link>
            )}
          </Grid>
        </Grid>

        <Comment />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
