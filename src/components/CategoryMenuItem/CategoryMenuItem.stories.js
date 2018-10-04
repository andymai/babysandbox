import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CategoryMenuItem from '../CategoryMenuItem'

storiesOf('CategoryMenuItem', module)
  .add('Menu Item', () => <CategoryMenuItem label='Strollers' onClick={action('clicked')}/>)
