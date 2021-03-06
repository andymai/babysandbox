import React from 'react'
import PropTypes from 'prop-types'
import './CategoryMenuDropdown.sass'
import CategoryMenuContainer from '../CategoryMenuContainer'
import CategoryMenuContainerWithMotion from '../CategoryMenuContainerWithMotion/CategoryMenuContainerWithMotion';

export default class CategoryMenuDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  toggleMenu() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    return (
      <div>
        <div className='CategoryMenuDropdown' onClick={this.toggleMenu}>
          {this.props.label}
          <svg className='chevron-down' xmlns="http://www.w3.org/2000/svg" width="9" height="6"   viewBox="0 0 9 6">
            <polyline fill="none" points="119.769 15.097 123.8 19.128 128 15.097" transform="translate(-119 -14)"/>
          </svg>
        </div>
        { this.props.withMotion ? <CategoryMenuContainerWithMotion springParams={this.props.springParams} isOpen={this.state.isOpen}/> : <CategoryMenuContainer isOpen={this.state.isOpen}/> }
      </div>
    )
  }
}