import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CategoryMenuContainer from '../components/CategoryMenuContainer'
import CategoryMenuItem from '../components/CategoryMenuItem'

const areas = ['Living Room', 'Kitchen', 'Bath', 'Nursery', 'Car']

storiesOf('CategoryMenuContainer', module)
  .add('Container', () => 
    <CategoryMenuContainer areas={areas}>
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
    </CategoryMenuContainer>
  )

