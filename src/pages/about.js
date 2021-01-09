import React from "react"
import {graphql, Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { rhythm } from "../utils/typography"
import Comment from "../components/comment";

class About extends React.Component {
  render() {
    const { location } = this.props

    // TODO SEO for every page

    return (
      <Layout location={location}>
        <SEO title="All posts" />
        <div
          style={{
            maxWidth: rhythm(24),
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <h1>About</h1>
          <h3>Hello there!</h3>
          <p>As you probably have guessed by the url, my name is Alex.<br/>
          I write about exciting new tech and things I am currently learning about, which most likely have
          to do with coding or e-commerce.</p>

          <Comment />
        </div>
      </Layout>
    )
  }
}

export default About