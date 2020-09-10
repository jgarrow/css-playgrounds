import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BorderRadiusPlaygroundInputs from "../components/borderRadiusInputs"
import BorderRadiusResult from "../components/borderRadiusResult"


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
      <h1>Border Radius Playground</h1>

      <BorderRadiusResult 
        values={values} 
      />

      <BorderRadiusPlaygroundInputs 
        values={values} 
        handleChange={handleChange} 
      />
    </Layout>
  )
}

export default IndexPage
