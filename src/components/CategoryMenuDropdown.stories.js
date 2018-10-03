import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CategoryMenuDropdown from '../components/CategoryMenuDropdown'

storiesOf('CategoryMenuDropdown', module)
  .add('with text', () => <CategoryMenuDropdown onClick={action('clicked')}>Categories</CategoryMenuDropdown>)
