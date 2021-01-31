import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
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
          <p>
            As you surely guessed from the url and title, my name is Alexander or Alex for short.
            I write about exciting new technology and things I'm learning, which probably have
            have to do with programming or e-commerce.
          </p>

          <Comment />
        </div>
      </Layout>
    )
  }
}

export default About