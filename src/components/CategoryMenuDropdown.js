import React from 'react'
import PropTypes from 'prop-types'
import './CategoryMenuDropdown.scss'

const CategoryMenuDropdown = (props) => {
  return (
    <div className='CategoryMenuDropdown'>
      {props.label}
    </div>
  )
}

CategoryMenuDropdown.propTypes = {
  label: PropTypes.string.isRequired
}

export default CategoryMenuDropdown

