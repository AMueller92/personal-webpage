import React from "react"
import {graphql, Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class About extends React.Component {
  render() {
    const { location } = this.props

    return (
      <Layout location={location}>
        <SEO title="All posts" />
        <p>Wow this is about me</p>
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default About