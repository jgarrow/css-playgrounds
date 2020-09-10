import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Container = styled.div`
    box-sizing: border-box;
    width: 80%;
    max-width: 960px;
    height: 50vh;
    margin: 0 auto;
    padding: 1rem;
    background-color: papayawhip;
    border: 2px solid rebeccapurple;
`

const Result = styled.div`
    background-color: darkseagreen;
    margin: 0 auto;
    width: ${({ values }) => `${values.width}${values.widthUnit}`};
    height: ${({ values }) => `${values.height}${values.heightUnit}`};
    border-radius: ${({ values }) => `${values.horTopLeft}${values.horTopLeftUnit} ${values.horTopRight}${values.horTopRightUnit} ${values.horBottomRight}${values.horBottomRightUnit} ${values.horBottomLeft}${values.horBottomLeftUnit} / ${values.verTopLeft}${values.verTopLeftUnit} ${values.verTopRight}${values.verTopRightUnit} ${values.verBottomRight}${values.verBottomRightUnit} ${values.verBottomLeft}${values.verBottomLeftUnit}`}
`

const BorderRadiusResult = ({ values }) => {
    console.log('values in result: ', values)
    const [result, setResult] = useState(`${values.horTopLeft}${values.horTopLeftUnit} ${values.horTopRight}${values.horTopRightUnit} ${values.horBottomRight}${values.horBottomRightUnit} ${values.horBottomLeft}${values.horBottomLeftUnit} / ${values.verTopLeft}${values.verTopLeftUnit} ${values.verTopRight}${values.verTopRightUnit} ${values.verBottomRight}${values.verBottomRightUnit} ${values.verBottomLeft}${values.verBottomLeftUnit}`)

    useEffect(() => {
        setResult(`${values.horTopLeft}${values.horTopLeftUnit} ${values.horTopRight}${values.horTopRightUnit} ${values.horBottomRight}${values.horBottomRightUnit} ${values.horBottomLeft}${values.horBottomLeftUnit} / ${values.verTopLeft}${values.verTopLeftUnit} ${values.verTopRight}${values.verTopRightUnit} ${values.verBottomRight}${values.verBottomRightUnit} ${values.verBottomLeft}${values.verBottomLeftUnit}`)
    }, [values])

    return (
        <>
            <Container>
                <Result 
                    values={values}
                />
            </Container>
            <pre>
                <code>
                    border-radius: {result}
                </code>
            </pre>
        </>
    )
}

export default BorderRadiusResult