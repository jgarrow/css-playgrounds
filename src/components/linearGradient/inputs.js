import React from "react"
import styled from "styled-components"

import { ChromePicker } from "react-color"

const Form = styled.form`
  grid-row: span 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  width: 100%;
  max-height: 610px;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 5px;
  background-color: #424C56;
  color: #fffafa;
  font-size: 1rem;
  margin-bottom: 0;
  overflow-y: scroll;
  transition: height 0.25s ease-in-out;

  h3 {
    margin: 0;
  }

  input {
    padding: 0 5px;
  }

  input, select {
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #fffafa;
    color: #424C56
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 115px minmax(100px, 1fr);
  grid-gap: 15px;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 15px;
  border-bottom: 1px solid #fffafa;
`

const Label = styled.label`
  align-self: end;
`

const ColorLabel = styled.label`
  align-self: flex-start;
`

const StyledColorPicker = styled(ChromePicker)`
  width: 100%;
`

const Inputs = ({ values, handleChange, handleColorChange }) => {

  return (
    <Form withBorder={values.withBorder}>
      <Container style={{
        gridTemplateColumns: `115px minmax(100px, 1fr)`
      }}>

        {/* Width */}
        <Label htmlFor="width">Width:</Label>
        <input
          type="number"
          id="width"
          name="width"
          min={1}
          max={960}
          value={values.width}
          onBlur={handleChange}
          onChange={handleChange}
        />
  
        {/* Height */}
        <Label htmlFor="height">Height:</Label>
        <input
          type="number"
          id="height"
          name="height"
          min={1}
          max={435}
          value={values.height}
          onBlur={handleChange}
          onChange={handleChange}
        />
      </Container>

      <h3>Linear Gradient Values</h3>
      <Container>
    
        {/* Angle */}
        <Label htmlFor="angle">Angle:</Label>
        <input
          type="number"
          id="angle"
          name="angle"
          min={-360}
          max={360}
          value={values.angle}
          onBlur={handleChange}
          onChange={handleChange}
        />

        {/* Start color */}
        <ColorLabel htmlFor="startColor">Start Color:</ColorLabel>
        <StyledColorPicker 
            id="startColor"
            color={values.startColor}
            onChange={(color) => handleColorChange(color, "startColor")}
        />
        {/* TODO: add option for color stops */}

        {/* TODO: add option to add more colors */}
  
        {/* End color */}
        <ColorLabel htmlFor="endColor">End Color:</ColorLabel>
        <StyledColorPicker 
            id="endColor"
            color={values.endColor}
            onChange={(color) => handleColorChange(color, "endColor")}
        />
        </Container>
    </Form>
  )
}

export default Inputs
