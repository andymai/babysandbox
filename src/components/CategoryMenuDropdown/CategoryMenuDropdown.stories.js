import React from 'react';
import { storiesOf } from '@storybook/react';

import CategoryMenuDropdown from '../CategoryMenuDropdown';

storiesOf('CategoryMenuDropdown', module)
  .add('Dropdown', () => <CategoryMenuDropdown label='Categories' />)
