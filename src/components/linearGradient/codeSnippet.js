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

const CodeBlock = ({ values }) => {
    const [result, setResult] = useState({
        width: `${values.width}px`,
        height: `${values.height}px`,
        background: `linear-gradient(${values.angle}deg, 
            rgba(${values.startColor.r}, ${values.startColor.g}, ${values.startColor.b}, ${values.startColor.a}), 
            rgba(${values.endColor.r}, ${values.endColor.g}, ${values.endColor.b}, ${values.endColor.a}))`
    })

    useEffect(() => {
        setResult({
            width: `${values.width}px`,
            height: `${values.height}px`,
            background: `linear-gradient(${values.angle}deg, 
                rgba(${values.startColor.r}, ${values.startColor.g}, ${values.startColor.b}, ${values.startColor.a}), 
                rgba(${values.endColor.r}, ${values.endColor.g}, ${values.endColor.b}, ${values.endColor.a}))`
        })
    }, [values])

    return (
        <Code>
            <code>
                {`width: ${values.width}px;\nheight: ${values.height}px;\nbackground: linear-gradient(${values.angle}deg, 
            rgba(${values.startColor.r}, ${values.startColor.g}, ${values.startColor.b}, ${values.startColor.a}), 
            rgba(${values.endColor.r}, ${values.endColor.g}, ${values.endColor.b}, ${values.endColor.a}))`};
            </code>
        </Code>
    )
}

export default CodeBlock