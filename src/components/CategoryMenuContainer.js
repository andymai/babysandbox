import React from 'react'
import PropTypes from 'prop-types'
import CategoryMenuItem from './CategoryMenuItem'
import './CategoryMenuContainer.sass'

const CategoryMenuContainer = (props) => {

  const areas =props.areas.map((item, index) => {
    return <li key={index} onClick={props.onClick}>{item}</li>
  })

  return (
    <div className='CategoryMenu__container' style={props.isOpen ? {visibility: 'visible'} : null }>
      <ul className='CategoryMenu__areas'>
        {areas}
      </ul>
      <div className='CategoryMenu__items'>
        <CategoryMenuItem label='Strollers'/>
        <CategoryMenuItem label='Car Seats'/>
        <CategoryMenuItem label='Carriers'/>
        <CategoryMenuItem label='Baby Monitors'/>
        <CategoryMenuItem label='Nursing'/>
        <CategoryMenuItem label='Diapers'/>
        <CategoryMenuItem label='Bath'/>
        <CategoryMenuItem label='Clothing'/>
        <CategoryMenuItem label='Play'/>
        <CategoryMenuItem label='Storage'/>
        <CategoryMenuItem label='Health'/>
        <CategoryMenuItem label='For Mom'/>
        <CategoryMenuItem label='Gift Cards'/>
        <CategoryMenuItem label='Keepsakes'/>
        <CategoryMenuItem label='More'/>
      </div>
    </div>
  )
}

CategoryMenuContainer.propTypes = {
  areas: PropTypes.array.isRequired
}

export default CategoryMenuContainer

