import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-width: 960px;
    height: 100%;
    margin: 0 auto;
    padding: 1rem;
    position: relative;
`

const StyledResult = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    width: ${({ values }) => `${values.width}px`};
    height: ${({ values }) => `${values.height}px`};
    background: ${({ values }) => `
        linear-gradient(${values.angle}deg, 
            rgba(${values.startColor.r}, ${values.startColor.g}, ${values.startColor.b}, ${values.startColor.a}), 
            rgba(${values.endColor.r}, ${values.endColor.g}, ${values.endColor.b}, ${values.endColor.a}))`};
`

const Result = ({ values }) => {
    // const [colors, setColors] = useState({
    //     startColor
    // })

    // console.log('values.startColor: ', values.startColor)

    return (
        <Container>
            <StyledResult values={values}/>
        </Container>
    )
}

export default Result