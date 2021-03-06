import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import CategoryMenuItem from '../CategoryMenuItem'
import './CategoryMenuContainer.sass'

const CategoryMenuContainer = (props) => {

  const areas = ['Living Room', 'Kitchen', 'Bath', 'Nursery', 'Car']

  const areasList = areas.map((item, index) => {
    return <li key={index} onClick={props.onClick}>{item}</li>
  })

  return (
    <CSSTransition
      classNames="CategoryMenu__container"
      timeout={{
        enter: 0,
        exit: 0
      }}
      in={props.isOpen}
    >
      <div className='CategoryMenu__container' style={props.isOpen ? {visibility: 'visible'} : null }>
        <ul className='CategoryMenu__areas'>
          {areasList}
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
    </CSSTransition>
  )
}

CategoryMenuContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired
}

export default CategoryMenuContainer