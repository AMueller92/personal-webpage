import Typography from "typography"
//import Wordpress2016 from "typography-theme-wordpress-2016"
import fairyGatesTheme from 'typography-theme-fairy-gates'
import gray from "gray-percentage"

fairyGatesTheme.overrideThemeStyles = ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const linkColor = "#407294"
    return {
      "a.gatsby-resp-image-link": {
        boxShadow: `none`,
      },
      h1: {
        color: linkColor,
      },
      a: {
        color: linkColor,
        textDecoration: "none",
        textShadow:
          ".03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff", // eslint-disable-line
        backgroundImage: `none`, // eslint-disable-line
      },
      "a:hover,a:active": {
        textShadow: "none",
        backgroundImage: "none",
      },
      "h1,h2,h3,h4,h5,h6": {
        marginTop: rhythm(1.5),
        marginBottom: rhythm(0.5),
      },
      // Blockquote styles.
      blockquote: {
        ...scale(1 / 5),
        borderLeft: `${rhythm(6 / 16)} solid ${linkColor}`,
        color: gray(50),
        paddingLeft: rhythm(10 / 16),
        fontStyle: "italic",
        marginLeft: 0,
        marginRight: 0,
      },
      "blockquote > :last-child": {
        marginBottom: 0,
      },
      "blockquote cite:before": {
        content: '"— "',
      },
    }
}

//delete Wordpress2016.googleFonts

const typography = new Typography(fairyGatesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
