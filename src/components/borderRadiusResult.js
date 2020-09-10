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
`

const Result = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: darkseagreen;
    margin: 0 auto;
    width: ${({ values }) => `${values.width}${values.widthUnit}`};
    height: ${({ values }) => `${values.height}${values.heightUnit}`};
    border-radius: ${({ values }) => `${values.horTopLeft}${values.horTopLeftUnit} ${values.horTopRight}${values.horTopRightUnit} ${values.horBottomRight}${values.horBottomRightUnit} ${values.horBottomLeft}${values.horBottomLeftUnit} / ${values.verTopLeft}${values.verTopLeftUnit} ${values.verTopRight}${values.verTopRightUnit} ${values.verBottomRight}${values.verBottomRightUnit} ${values.verBottomLeft}${values.verBottomLeftUnit}`}
`

const BorderRadiusResult = ({ values }) => {
    return (
        <Container>
            <Result 
                values={values}
            />
        </Container>
    )
}

export default BorderRadiusResult