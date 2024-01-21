import React from "react"
import PropTypes from "prop-types"
import Option from "./Option"

const Options = ({ options, selectedOptions, handleSelectedOptions, type }) => {
  return (
    <div data-testid="options">
      {options.map(({ id, text }) => (
        <Option
          key={id}
          id={id}
          handleSelectedOptions={handleSelectedOptions}
          checked={selectedOptions.includes(id)}
          type={type}
        >
          {text}
        </Option>
      ))}
    </div>
  )
}

Options.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string,
    })
  ),
  selectedOptions: PropTypes.arrayOf(PropTypes.string),
  handleSelectedOptions: PropTypes.func,
  type: PropTypes.string,
}

Options.defaultProps = {
  options: [],
  selectedOptions: [],
  handleSelectedOptions: null,
  type: "radio",
}

export default Options
