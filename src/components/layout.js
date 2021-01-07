import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from './Link';
import styled from "styled-components"
import Emoji from "react-emoji-render"

import { rhythm, scale } from "../utils/typography"

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: "center"
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-evenly',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Layout(props) {
  const classes = useStyles();
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  const blogPath = `${__PATH_PREFIX__}/blog/`
  let header

  if (location.pathname === rootPath || location.pathname === blogPath) {
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
          }}
          to='/'
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginBottom: rhythm(0.5),
          marginTop: rhythm(0.5),
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to='/'
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <Wrapper
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(55),
      }}
    >
      <Toolbar className={classes.toolbar}>
        <header>{header}</header>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        <Link
          color="inherit"
          noWrap
          key="Index"
          variant="body2"
          to="/"
          className={classes.toolbarLink}
        >
          Home
        </Link>
        <Link
            color="inherit"
            noWrap
            key="About Me"
            variant="body2"
            to="/about"
            className={classes.toolbarLink}
          >
            About Me
          </Link>
      </Toolbar>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <Emoji text=":heart:" />
      </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`
