import React from "react"
import PropTypes from "prop-types"

const Input = 
  ({    // Changed: destructure properties from "props"
    id, 
    label, 
    placeholder, 
    value, 
    onChange 
  }) => {
  return (
    <div>
      <label htmlFor={id}> 
        {label}
      </label>
      <input 
        value={value} // Added value
        onChange={onChange} // Added onChange
        id={id} 
        placeholder={placeholder}  
      />
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired, // Added prop-type
  onChange: PropTypes.func.isRequired,
}

export default Input