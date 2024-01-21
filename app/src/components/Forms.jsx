import React from "react"
import PropTypes from "prop-types"
import Form from "./Form"

const Forms = ({ forms }) => (
  <div data-testid="forms">
    {forms.map(({ id, question, options, type }) => (
      <Form key={id} id={id} title={question} options={options} type={type} />
    ))}
  </div>
)

Forms.propTypes = {
  forms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      question: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          text: PropTypes.string,
        })
      ),
      type: PropTypes.string,
    })
  ),
}

Forms.defaultProps = {
  forms: [],
}

export default Forms
