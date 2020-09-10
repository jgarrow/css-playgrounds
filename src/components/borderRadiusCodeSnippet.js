import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Code = styled.pre`
    max-width: 960px;
    height: 100%;
`

const BorderRadiusCodeSnippet = ({ values }) => {
    const [result, setResult] = useState(`${values.horTopLeft}${values.horTopLeftUnit} ${values.horTopRight}${values.horTopRightUnit} ${values.horBottomRight}${values.horBottomRightUnit} ${values.horBottomLeft}${values.horBottomLeftUnit} / ${values.verTopLeft}${values.verTopLeftUnit} ${values.verTopRight}${values.verTopRightUnit} ${values.verBottomRight}${values.verBottomRightUnit} ${values.verBottomLeft}${values.verBottomLeftUnit}`)

    useEffect(() => {
        setResult(`${values.horTopLeft}${values.horTopLeftUnit} ${values.horTopRight}${values.horTopRightUnit} ${values.horBottomRight}${values.horBottomRightUnit} ${values.horBottomLeft}${values.horBottomLeftUnit} / ${values.verTopLeft}${values.verTopLeftUnit} ${values.verTopRight}${values.verTopRightUnit} ${values.verBottomRight}${values.verBottomRightUnit} ${values.verBottomLeft}${values.verBottomLeftUnit}`)
    }, [values])

    return (
        <Code>
            <code>
                border-radius: {result}
            </code>
        </Code>
    )
}

export default BorderRadiusCodeSnippet