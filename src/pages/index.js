import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Blurb = styled.section`
  width: 80%;
  max-width: 960px;
  margin: 0 auto;

  p {
    line-height: 1.75;
  }
`

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  margin: 0 auto;
`

const Li = styled.li`
  list-style: none;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }

  a {
    text-decoration: none;
    color: #fffafa;
    text-shadow: rgb(66, 76, 86) 1px 1px;
    background-color: darkseagreen;
    box-sizing: border-box;
    padding: 0.5rem;
    border-radius: 5px;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Blurb>
        <h2>About CSS Playgrounds</h2>
        <p>
          After having dabbled with some CSS art, I quickly realized how useful
          "playgrounds" are when trying to get a piece of styling just right.
          Having a little tool that let's you make changes and then copy the
          code into your own codebase is super convenient, especially if you're
          working with a complex property or are still learning. I decided to
          make my own site of various CSS playgrounds to give myself and others
          a variety of tools when working with CSS, whether it's for "real"
          sites or fun side projects. Enjoy! :)
        </p>
      </Blurb>
      <Ul>
        <Li>
          <Link to="/border-radius">Border Radius</Link>
        </Li>
        <Li>
          <Link to="/linear-gradient">Linear Gradient</Link>
        </Li>
      </Ul>
    </Layout>
  )
}

export default IndexPage
