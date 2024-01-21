import React, { useState } from "react"
import PropTypes from "prop-types"
import Options from "./Options"

const Form = ({ id, title, options, type }) => {
  const [selectedOptions, setSelectedOptions] = useState([])

  const typeMapping = {
    single: {
      handler: ({ target: { value: selectedOptionId } }) => {
        setSelectedOptions([selectedOptionId])
      },
      type: "radio",
    },
    multiple: {
      handler: ({ target: { value: selectedOptionId } }) => {
        setSelectedOptions((prev) => {
          if (prev.includes(selectedOptionId)) {
            return prev.filter((optionId) => optionId !== selectedOptionId)
          } else {
            return [...prev, selectedOptionId]
          }
        })
      },
      type: "checkbox",
    },
  }

  return (
    <div data-testid="form">
      <h3>{title}</h3>
      {typeMapping[type] ? (
        <form>
          <Options
            type={typeMapping[type].type}
            options={options}
            selectedOptions={selectedOptions}
            handleSelectedOptions={typeMapping[type].handler}
          />
        </form>
      ) : (
        `Component <Form type={${type}}/> prop "type" with a value of ${type} is not found.`
      )}
    </div>
  )
}

Form.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string,
    })
  ),
  type: PropTypes.string,
}

Form.defaultProps = {
  title: "",
  options: [],
  type: "",
}

export default Form
