import React from "react"
import PropTypes from "prop-types"

const Option = ({ id, children, checked, handleSelectedOptions, type }) => (
  <div id={id} data-testid="option">
    <label>
      <input
        type={type}
        value={id}
        onChange={handleSelectedOptions}
        checked={checked}
      />
      {children}
    </label>
  </div>
)

Option.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.any,
  checked: PropTypes.bool,
  handleSelectedOptions: PropTypes.func,
  type: PropTypes.string,
}

Option.defaultProps = {
  children: null,
  checked: false,
  handleSelectedOptions: null,
  type: "radio",
}

export default Option
