import React from 'react'
import PropTypes from 'prop-types'
import './CategoryMenuItem.sass'

const CategoryMenuItem = (props) => {
  return (
    <div className='CategoryMenuItem'>
      <svg className='CategoryMenuItem__icon' xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
        <circle cx="75" cy="37" r="18" fill-rule="evenodd" transform="translate(-57 -19)"/>
      </svg>
      <span className='CategoryMenuItem__label'>{props.label}</span>
    </div>
  )
}

CategoryMenuItem.propTypes = {
  label: PropTypes.string.isRequired
}

export default CategoryMenuItem

