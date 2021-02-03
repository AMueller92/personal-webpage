import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from './Link';
import styled from "styled-components"
import {useStaticQuery, graphql} from "gatsby";
import { rhythm, scale } from "../utils/typography"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: "space-evenly",
    overflowX: 'auto',
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarFooter: {
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(1.5, 0, 5, 0),
  },
  toolbarLink: {
    padding: theme.spacing(0),
    flexShrink: 0,
    backgroundImage: "none"
  },
}));

export default function Layout(props) {
  // TODO change layout depending if its viewed on a phone or computer
  const classes = useStyles();
  const { children } = props
  let header

  const data = useStaticQuery(
    graphql`query {
      site {
        siteMetadata {
         title
        }
      }
    }
    `
  )

  const title = data.site.siteMetadata.title

  header = (
    <h1
      style={{
        ...scale(1),
        marginBottom: rhythm(0.5),
        marginTop: rhythm(0.5),
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
          backgroundImage: "none"
        }}
        to='/'
      >
        {title}
      </Link>
    </h1>
  )


  return (
    <Wrapper
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(50),
      }}
    >
      <Toolbar className={classes.toolbar}>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          noWrap
          key="Index"
          variant="h6"
          to="/"
          className={classes.toolbarLink}
        >
          Home
        </Link>
        <header>{header}</header>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          noWrap
          key="About"
          variant="h6"
          to="/about"
          className={classes.toolbarLink}
        >
          About
        </Link>
      </Toolbar>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(35),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer classes={classes} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Copyright = styled.div`
  text-align: center;
`
const Footer = ({classes}) => (
  <div className={classes.toolbarFooter}>
    <Typography variant="caption">
      <Copyright>
        © {new Date().getFullYear()}
        {` `}
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to="/"
          noWrap
          key="Home"
        >
          alexmueller.tech
        </Link>
        {" - "}
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to="/license"
          noWrap
          key="License"
        >
          License
        </Link>
        {" - Icons by "}
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to="https://www.icons8.com"
          noWrap
          key="License"
        >
          icons8.com
        </Link>
      </Copyright>
    </Typography>
  </div>
)
