import React from "react"
import styled from "styled-components"

const Form = styled.form`
  grid-row: span 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 5px;
  background-color: #424C56;
  color: #fffafa;
  font-size: 1rem;
  margin-bottom: 0;
  overflow-y: scroll;

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
  grid-template-columns: 115px minmax(100px, 1fr) 50px;
  grid-gap: 15px;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 15px;
  border-bottom: 1px solid #fffafa;
`

const Label = styled.label`
  align-self: end;
`

const BorderRadiusPlaygroundInputs = ({ values, handleChange }) => {

  return (
    <Form>
      <Container>

        {/* Width */}
        <Label htmlFor="width">Width:</Label>
        <input
          type="number"
          id="width"
          name="width"
          value={values.width}
          onBlur={handleChange}
          onChange={handleChange}
        />
  
        <label htmlFor="widthUnit">
          <select
            name="widthUnit"
            id="widthUnit"
            value={values.widthUnit}
            onBlur={handleChange}
            onChange={handleChange}
          >
            <option value="px">px</option>
            <option value="%">%</option>
            <option value="em">em</option>
            <option value="rem">rem</option>
          </select>
        </label>
  
        {/* Height */}
        <Label htmlFor="height">Height:</Label>
        <input
          type="number"
          id="height"
          name="height"
          value={values.height}
          onBlur={handleChange}
          onChange={handleChange}
        />
  
        <label htmlFor="heightUnit">
          <select
            name="heightUnit"
            id="heightUnit"
            value={values.heightUnit}
            onBlur={handleChange}
            onChange={handleChange}
          >
            <option value="px">px</option>
            <option value="%">%</option>
            <option value="em">em</option>
            <option value="rem">rem</option>
          </select>
        </label>
      </Container>

      <h3>Horizontal Border Radius</h3>
      <Container>
    
        {/* Top Left */}
        <Label htmlFor="horTopLeft">Top Left:</Label>
        <input
          type="number"
          id="horTopLeft"
          name="horTopLeft"
          value={values.horTopLeft}
          onBlur={handleChange}
          onChange={handleChange}
        />
  
        <label htmlFor="horTopLeftUnit">
          <select
            name="horTopLeftUnit"
            id="horTopLeftUnit"
            value={values.horTopLeftUnit}
            onBlur={handleChange}
            onChange={handleChange}
          >
            <option value="px">px</option>
            <option value="%">%</option>
            <option value="em">em</option>
            <option value="rem">rem</option>
          </select>
        </label>
  
        {/* Top Right */}
        <Label htmlFor="horTopRight">Top Right:</Label>
        <input
          type="number"
          id="horTopRight"
          name="horTopRight"
          value={values.horTopRight}
          onBlur={handleChange}
          onChange={handleChange}
        />
  
        <label htmlFor="horTopRightUnit">
          <select
            name="horTopRightUnit"
            id="horTopRightUnit"
            value={values.horTopRightUnit}
            onBlur={handleChange}
            onChange={handleChange}
          >
            <option value="px">px</option>
            <option value="%">%</option>
            <option value="em">em</option>
            <option value="rem">rem</option>
          </select>
        </label>
  
        {/* Bottom Right */}
        <Label htmlFor="horBottomRight">Bottom Right:</Label>
        <input
          type="number"
          id="horBottomRight"
          name="horBottomRight"
          value={values.horBottomRight}
          onBlur={handleChange}
          onChange={handleChange}
        />
  
        <label htmlFor="horBottomRightUnit">
          <select
            name="horBottomRightUnit"
            id="horBottomRightUnit"
            value={values.horBottomRightUnit}
            onBlur={handleChange}
            onChange={handleChange}
          >
            <option value="px">px</option>
            <option value="%">%</option>
            <option value="em">em</option>
            <option value="rem">rem</option>
          </select>
        </label>
        
        {/* Bottom Left */}
        <Label htmlFor="horBottomLeft">Bottom Left:</Label>
        <input
          type="number"
          id="horBottomLeft"
          name="horBottomLeft"
          value={values.horBottomLeft}
          onBlur={handleChange}
          onChange={handleChange}
        />
  
        <label htmlFor="horBottomLeftUnit">
          <select
            name="horBottomLeftUnit"
            id="horBottomLeftUnit"
            value={values.horBottomLeftUnit}
            onBlur={handleChange}
            onChange={handleChange}
          >
            <option value="px">px</option>
            <option value="%">%</option>
            <option value="em">em</option>
            <option value="rem">rem</option>
          </select>
        </label>
      </Container>

      <h3>Vertical Border Radius</h3>
      <Container style={{
        borderBottom: `none`,
        paddingBottom: `0`
      }}>

        {/* Top Left */}
        <Label htmlFor="verTopLeft">Top Left:</Label>
        <input
          type="number"
          id="verTopLeft"
          name="verTopLeft"
          value={values.verTopLeft}
          onBlur={handleChange}
          onChange={handleChange}
        />
  
        <label htmlFor="verTopLeftUnit">
          <select
            name="verTopLeftUnit"
            id="verTopLeftUnit"
            value={values.verTopLeftUnit}
            onBlur={handleChange}
            onChange={handleChange}
          >
            <option value="px">px</option>
            <option value="%">%</option>
            <option value="em">em</option>
            <option value="rem">rem</option>
          </select>
        </label>
  
        {/* Top Right */}
        <Label htmlFor="verTopRight">Top Right:</Label>
        <input
          type="number"
          id="verTopRight"
          name="verTopRight"
          value={values.verTopRight}
          onBlur={handleChange}
          onChange={handleChange}
        />
  
        <label htmlFor="verTopRightUnit">
          <select
            name="verTopRightUnit"
            id="verTopRightUnit"
            value={values.verTopRightUnit}
            onBlur={handleChange}
            onChange={handleChange}
          >
            <option value="px">px</option>
            <option value="%">%</option>
            <option value="em">em</option>
            <option value="rem">rem</option>
          </select>
        </label>
  
        {/* Bottom Right */}
        <Label htmlFor="verBottomRight">Bottom Right:</Label>
        <input
          type="number"
          id="verBottomRight"
          name="verBottomRight"
          value={values.verBottomRight}
          onBlur={handleChange}
          onChange={handleChange}
        />
  
        <label htmlFor="verBottomRightUnit">
          <select
            name="verBottomRightUnit"
            id="verBottomRightUnit"
            value={values.verBottomRightUnit}
            onBlur={handleChange}
            onChange={handleChange}
          >
            <option value="px">px</option>
            <option value="%">%</option>
            <option value="em">em</option>
            <option value="rem">rem</option>
          </select>
        </label>

        {/* Bottom Left */}
        <Label htmlFor="verBottomLeft">Bottom Left:</Label>
        <input
          type="number"
          id="verBottomLeft"
          name="verBottomLeft"
          value={values.verBottomLeft}
          onBlur={handleChange}
          onChange={handleChange}
        />
  
        <label htmlFor="verBottomLeftUnit">
          <select
            name="verBottomLeftUnit"
            id="verBottomLeftUnit"
            value={values.verBottomLeftUnit}
            onBlur={handleChange}
            onChange={handleChange}
          >
            <option value="px">px</option>
            <option value="%">%</option>
            <option value="em">em</option>
            <option value="rem">rem</option>
          </select>
        </label>
      </Container>
    </Form>
  )
}

export default BorderRadiusPlaygroundInputs
