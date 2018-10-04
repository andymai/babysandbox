import React from 'react';
import { storiesOf } from '@storybook/react';

import CategoryMenuContainer from '../CategoryMenuContainer'

storiesOf('CategoryMenuContainer', module)
  .add('Container', () => <CategoryMenuContainer isOpen={true} />)

