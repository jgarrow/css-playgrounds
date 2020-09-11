import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Result from "../components/linearGradient/result"
import Inputs from "../components/linearGradient/inputs"
import CodeBlock from "../components/linearGradient/codeSnippet"

const Title = styled.h2`
    text-align: center;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(500px, 960px) minmax(350px, 400px);
    grid-template-rows: 1fr minmax(80px, 160px);
    grid-gap: 15px;
    width: 100%;
    max-width: 1325px;
    margin: 0 auto;
    margin-bottom: 1.45rem;
`

const LinearGradient = () => {
    const [values, setValues] = useState({
        width: 200,
        height: 200,
        angle: 180,
        startColor: {
            r: '143',
            g: '188',
            b: '143',
            a: '1'
        },
        endColor: {
            r: '102',
            g: '51',
            b: '153',
            a: '1'
        }
    })

    const handleChange = e => {
        const updates = {
            ...values,
            [e.target.name]: e.target.value
        }

        if (updates.angle < -360) {
            updates.angle = -360
        }

        if (updates.angle > 360) {
            updates.angle = 360
        }

        setValues(updates)
    }

    const handleColorChange = (color, key) => {
        setValues({
            ...values,
            [key]: color.rgb
        })
    }

    return (
        <Layout>
            <SEO title="Linear Gradient"/>
            <Title>Linear Gradient Playground</Title>

            <Container>
                <Result values={values}/>

                <Inputs values={values} handleChange={handleChange} handleColorChange={handleColorChange} />

                <CodeBlock values={values}/>
            </Container>
        </Layout>
    )
}

export default LinearGradient;