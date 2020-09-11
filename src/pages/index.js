import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blurb = styled.section`
  width: 80%;
  max-width: 960px;
  margin: 0 auto;

  p {
    line-height: 1.75;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Blurb>
        <h2>About CSS Playgrounds</h2>
        <p>After having dabbled with some CSS art, I quickly realized how useful "playgrounds" are when trying to get a piece of styling just right. Having a little tool that let's you make changes and then copy the code into your own codebase is super convenient, especially if you're working with a complex property or are still learning. I decided to make my own site of various CSS playgrounds to give myself and others a variety of tools when working with CSS, whether it's for "real" sites or fun side projects. Enjoy! :)</p>
      </Blurb>
    </Layout>
  )
}

export default IndexPage
