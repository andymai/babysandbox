import React from 'react'
import PropTypes from 'prop-types'
import { Motion, spring, presets } from 'react-motion';
import CategoryMenuItem from '../CategoryMenuItem'
import './CategoryMenuContainerWithMotion.sass'

const CategoryMenuContainerWithMotion = (props) => {

  const areas = ['Living Room', 'Kitchen', 'Bath', 'Nursery', 'Car']

  const areasList = areas.map((item, index) => {
    return <li key={index} onClick={props.onClick}>{item}</li>
  })

  const defaultStyle = {
    opacity: spring(0),
    y: spring(-2)
  }

  const style = props.isOpen ?
    {
      y: spring(0, props.springParams ),
      opacity: spring(1),
      zIndex: spring(1)
    } : {
      y: spring(-2),
      opacity: spring(0),
      zIndex: spring(-1)
    }

  return (
    <Motion style={style}>
      {({y, opacity, zIndex}) =>
        <div className='CategoryMenu__container__withMotion' style={{
          opacity: `${opacity}`,
          zIndex: `${zIndex}`,
          transform: `translate3d(0, ${y}em, 0)`,
        }}>
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
      }
    </Motion>
  )
}

CategoryMenuContainerWithMotion.propTypes = {
  isOpen: PropTypes.bool.isRequired
}

export default CategoryMenuContainerWithMotion