import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import BarChart from '../src/components/bar-chart'
import Tooltip from '../src/components/tooltip'
import Container from '../src/components/container'

const stories = storiesOf('Storybook Knobs', module);
stories.addDecorator(withKnobs);

stories
  .add('BarChart', () => (
    <BarChart onTooltipFire={console.log} />
  ))
  .add('Tooltip', () => {
    const props = {
      opacity: number('opacity', 1),
      top: number('top', 100),
      left: number('left', 100)
    }
    return (
      <Tooltip {...props}>test</Tooltip>
    )
  })
  .add('Container', () => (
    <Container />
  ));

