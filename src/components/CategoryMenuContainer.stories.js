import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CategoryMenuContainer from '../components/CategoryMenuContainer'
import CategoryMenuItem from '../components/CategoryMenuItem'

const areas = ['Living Room', 'Kitchen', 'Bath', 'Nursery', 'Car']

storiesOf('CategoryMenuContainer', module)
  .add('Container', () => 
    <CategoryMenuContainer isOpen={true} areas={areas}/>  
  )

