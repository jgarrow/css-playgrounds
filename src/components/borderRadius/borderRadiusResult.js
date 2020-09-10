import React from "react"
import styled from "styled-components"

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-width: 960px;
    height: 100%;
    margin: 0 auto;
    padding: 1rem;
    position: relative;
    font-size: ${({ values }) => `${values.fontSize}${values.fontUnit}`};
`

const Result = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: darkseagreen;
    margin: 0 auto;
    width: ${({ values }) => `${values.width}px`};
    height: ${({ values }) => `${values.height}px`};
    border-radius: ${({ values }) => `${values.horTopLeft}${values.horTopLeftUnit} ${values.horTopRight}${values.horTopRightUnit} ${values.horBottomRight}${values.horBottomRightUnit} ${values.horBottomLeft}${values.horBottomLeftUnit} / ${values.verTopLeft}${values.verTopLeftUnit} ${values.verTopRight}${values.verTopRightUnit} ${values.verBottomRight}${values.verBottomRightUnit} ${values.verBottomLeft}${values.verBottomLeftUnit}`};
    border: ${({ values }) => `${values.borderWidth}${values.borderUnit} solid #424C56`};
`

const BorderRadiusResult = ({ values }) => {
    return (
        <Container values={values}>
            <Result values={values} />
        </Container>
    )
}

export default BorderRadiusResult