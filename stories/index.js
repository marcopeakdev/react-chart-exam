import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import BarChart from '../src/components/bar-chart'
import Tooltip from '../src/components/tooltip'

storiesOf('Welcome', module)
  .add('BarChart', () => (
    <BarChart />
  ))
  .add('Tooltip', () => (
    <Tooltip>test</Tooltip>
  ));

