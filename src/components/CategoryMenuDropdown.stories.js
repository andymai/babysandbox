import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CategoryMenuDropdown from '../components/CategoryMenuDropdown'

storiesOf('CategoryMenuDropdown', module)
  .add('Dropdown', () => <CategoryMenuDropdown label='Categories' onClick={action('clicked')}/>)
