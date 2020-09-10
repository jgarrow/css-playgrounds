import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BorderRadiusPlaygroundInputs from "../components/borderRadius/borderRadiusInputs"
import BorderRadiusResult from "../components/borderRadius/borderRadiusResult"
import BorderRadiusCodeSnippet from "../components/borderRadius/borderRadiusCodeSnippet"

const Title = styled.h1`
  text-align: center;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(500px, 960px) minmax(290px, 350px);
  grid-template-rows: 1fr minmax(80px, 160px);
  grid-gap: 15px;
  width: 100%;
  max-width: 1325px;
  margin: 0 auto;
  margin-bottom: 1.45rem;
`

const IndexPage = () => {
  const [values, setValues] = useState({
    width: 200,
    height: 200,
    horTopLeft: 10,
    horTopRight: 50,
    horBottomRight: 10,
    horBottomLeft: 50,
    verTopLeft: 50,
    verTopRight: 50,
    verBottomRight: 50,
    verBottomLeft: 50,
    horTopLeftUnit: "%",
    horTopRightUnit: "%",
    horBottomRightUnit: "%",
    horBottomLeftUnit: "%",
    verTopLeftUnit: "%",
    verTopRightUnit: "%",
    verBottomRightUnit: "%",
    verBottomLeftUnit: "%",
    borderWidth: 0,
    borderUnit: "px",
  })

  const handleChange = e => {
    let updates = {...values}

    if (e.target.name === "withBorder") {
        updates = {
            ...values,
            [e.target.name]: e.target.checked
        }
    } else {
        updates = {
            ...values,
          [e.target.name]: e.target.value
        }
    }

    if (updates.width > 960) {
        updates.width = 960;
    }

    if (updates.height > 435) {
        updates.height = 435;
    }

    setValues(updates)
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
