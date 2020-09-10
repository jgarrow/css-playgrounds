import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Code = styled.pre`
    max-width: 960px;
    height: 100%;
    display: block;
    white-space: pre-wrap;
    margin: 0;

    code {
        display: block;
        white-space: pre-wrap;
        padding: 0;
    }

`

const BorderRadiusCodeSnippet = ({ values }) => {
    const [result, setResult] = useState({
        width: `${values.width}px`,
        height: `${values.height}px`,

        borderRadius: `${values.horTopLeft}${values.horTopLeftUnit} ${values.horTopRight}${values.horTopRightUnit} ${values.horBottomRight}${values.horBottomRightUnit} ${values.horBottomLeft}${values.horBottomLeftUnit} / ${values.verTopLeft}${values.verTopLeftUnit} ${values.verTopRight}${values.verTopRightUnit} ${values.verBottomRight}${values.verBottomRightUnit} ${values.verBottomLeft}${values.verBottomLeftUnit}`,

        border: `${values.borderWidth}${values.borderUnit} solid #424C56`
    })

    useEffect(() => {
        setResult({
            width: `${values.width}px`,
            height: `${values.height}px`,

            borderRadius: `${values.horTopLeft}${values.horTopLeftUnit} ${values.horTopRight}${values.horTopRightUnit} ${values.horBottomRight}${values.horBottomRightUnit} ${values.horBottomLeft}${values.horBottomLeftUnit} / ${values.verTopLeft}${values.verTopLeftUnit} ${values.verTopRight}${values.verTopRightUnit} ${values.verBottomRight}${values.verBottomRightUnit} ${values.verBottomLeft}${values.verBottomLeftUnit}`,

            border: `${values.borderWidth}${values.borderUnit} solid #424C56`
        })
    }, [values])

    return (
        <Code>
            {values.borderWidth > 0 ? (
                <code>
                    {`width: ${result.width};\nheight: ${result.height};\nborder-radius: ${result.borderRadius};\nborder: ${result.border};`}
                </code>
                ) : (
                <code>
                    {`width: ${result.width};\nheight: ${result.height};\nborder-radius: ${result.borderRadius};`}
                </code>
            )}
        </Code>
        
    )
}

export default BorderRadiusCodeSnippet