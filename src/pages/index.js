import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BorderRadiusPlaygroundInputs from "../components/borderRadiusInputs"
import BorderRadiusResult from "../components/borderRadiusResult"
import BorderRadiusCodeSnippet from "../components/borderRadiusCodeSnippet"

const Title = styled.h1`
  text-align: center;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(500px, 960px) minmax(290px, 350px);
  grid-template-rows: 1fr 80px;
  grid-gap: 15px;
  width: 100%;
  max-width: 1325px;
  height: calc(100% - (45px + 1.45rem));
  margin: 0 auto;
`

const IndexPage = () => {
  const [values, setValues] = useState({
    width: 200,
    height: 200,
    horTopLeft: 50,
    horTopRight: 50,
    horBottomRight: 50,
    horBottomLeft: 50,
    verTopLeft: 50,
    verTopRight: 50,
    verBottomRight: 50,
    verBottomLeft: 50,
    widthUnit: "px",
    heightUnit: "px",
    horTopLeftUnit: "%",
    horTopRightUnit: "%",
    horBottomRightUnit: "%",
    horBottomLeftUnit: "%",
    verTopLeftUnit: "%",
    verTopRightUnit: "%",
    verBottomRightUnit: "%",
    verBottomLeftUnit: "%"
  })

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <Layout>
      <SEO title="Home" />
      <Title>Border Radius Playground</Title>

      <Container>
        <BorderRadiusResult 
          values={values} 
        />
  
        <BorderRadiusPlaygroundInputs 
          values={values} 
          handleChange={handleChange} 
        />

        <BorderRadiusCodeSnippet values={values} />
      </Container>
    </Layout>
  )
}

export default IndexPage
