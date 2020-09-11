/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const Footer = styled.footer`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #424C56;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        
      </div>
      <Footer>
          <p>
            {/* © {new Date().getFullYear()},
            {` `} */}
            <a href="https://janessagarrow.com/">Made with <span role="img" aria-label="green heart">💚</span></a>
          </p>
        </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
