import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import CategoryMenuDropdown from '../CategoryMenuDropdown';

const stories = storiesOf('CategoryMenuDropdown', module)
stories.addDecorator(withKnobs);

stories.add('with CSSTransition', () => <CategoryMenuDropdown label='Categories' />)

stories.add('with React-Motion', () => {
  const stiffness = number('Stiffness', 500, {range: true, min: 50, max: 1000, step: 10})
  const damping = number('Damping', 15, {range: true, min: 0, max: 100, step: 1})
  const springParams = {
    stiffness: stiffness,
    damping: damping
  }
    return (
      <CategoryMenuDropdown 
        label='Categories' 
        withMotion={true} 
        springParams={springParams}
      />
    )
  })