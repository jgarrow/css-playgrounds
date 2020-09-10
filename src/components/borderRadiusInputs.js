import React, { useState } from "react"

const BorderRadiusPlaygroundInputs = ({ values, handleChange }) => {

  return (
    <form>
      {/* Width */}
      <label htmlFor="width">Width:</label>
      <input
        type="number"
        id="width"
        name="width"
        value={values.width}
        onBlur={handleChange}
        onChange={handleChange}
      />

      <label htmlFor="widthUnit">Width Unit: </label>
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

      {/* Height */}
      <label htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        name="height"
        value={values.height}
        onBlur={handleChange}
        onChange={handleChange}
      />

      <label htmlFor="heightUnit">Height Unit: </label>
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

      {/* Horizontal Border Radius */}
      <h3>Horizontal Border Radius</h3>

      {/* Top Left */}
      <label htmlFor="horTopLeft">Top Left:</label>
      <input
        type="number"
        id="horTopLeft"
        name="horTopLeft"
        value={values.horTopLeft}
        onBlur={handleChange}
        onChange={handleChange}
      />

      <label htmlFor="horTopLeftUnit">Top Left Unit: </label>
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

      {/* Top Right */}
      <label htmlFor="horTopRight">Top Right:</label>
      <input
        type="number"
        id="horTopRight"
        name="horTopRight"
        value={values.horTopRight}
        onBlur={handleChange}
        onChange={handleChange}
      />

      <label htmlFor="horTopRightUnit">Top Right Unit: </label>
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

      {/* Bottom Right */}
      <label htmlFor="horBottomRight">Bottom Right:</label>
      <input
        type="number"
        id="horBottomRight"
        name="horBottomRight"
        value={values.horBottomRight}
        onBlur={handleChange}
        onChange={handleChange}
      />

      <label htmlFor="horBottomRightUnit">Bottom Right Unit: </label>
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
      {/* Bottom Left */}
      <label htmlFor="horBottomLeft">Bottom Left:</label>
      <input
        type="number"
        id="horBottomLeft"
        name="horBottomLeft"
        value={values.horBottomLeft}
        onBlur={handleChange}
        onChange={handleChange}
      />

      <label htmlFor="horBottomLeftUnit">Bottom Left Unit: </label>
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

      {/* Vertical Border Radius */}
      <h3>Vertical Border Radius</h3>

      {/* Top Left */}
      <label htmlFor="verTopLeft">Top Left:</label>
      <input
        type="number"
        id="verTopLeft"
        name="verTopLeft"
        value={values.verTopLeft}
        onBlur={handleChange}
        onChange={handleChange}
      />

      <label htmlFor="verTopLeftUnit">Top Left Unit: </label>
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

      {/* Top Right */}
      <label htmlFor="verTopRight">Top Right:</label>
      <input
        type="number"
        id="verTopRight"
        name="verTopRight"
        value={values.verTopRight}
        onBlur={handleChange}
        onChange={handleChange}
      />

      <label htmlFor="verTopRightUnit">Top Right Unit: </label>
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

      {/* Bottom Right */}
      <label htmlFor="verBottomRight">Bottom Right:</label>
      <input
        type="number"
        id="verBottomRight"
        name="verBottomRight"
        value={values.verBottomRight}
        onBlur={handleChange}
        onChange={handleChange}
      />

      <label htmlFor="verBottomRightUnit">Bottom Right Unit: </label>
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
      {/* Bottom Left */}
      <label htmlFor="verBottomLeft">Bottom Left:</label>
      <input
        type="number"
        id="verBottomLeft"
        name="verBottomLeft"
        value={values.verBottomLeft}
        onBlur={handleChange}
        onChange={handleChange}
      />

      <label htmlFor="verBottomLeftUnit">Bottom Left Unit: </label>
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
    </form>
  )
}

export default BorderRadiusPlaygroundInputs
