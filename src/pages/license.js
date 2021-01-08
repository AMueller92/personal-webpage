import React from "react"
import {graphql, Link} from "gatsby"
import { rhythm, scale } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class License extends React.Component {
  render() {
    const { location } = this.props

    return (
      <Layout location={location}>
        <SEO title="All posts" />
        <h2
          style={{
            ...scale(0.9),
            marginBottom: rhythm(0.5),
            marginTop: rhythm(0.5),
          }}
        >
          License
        </h2>
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
        >
          <img
            alt="Creative Commons License"
            style={{borderWidth: 0}}
            src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"
          />
        </a>
        <br />
        This work is licensed under a
        {" "}
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
        >
          Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
        </a>
        .
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default License