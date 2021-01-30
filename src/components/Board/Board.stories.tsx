import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Board } from './Board';
import { AxisLeft, AxisTop } from '../Axis';
import * as d3 from 'd3';

export default {
  title: 'Board',
  component: Board,
} as Meta;

const Template: Story<ComponentProps<typeof Board>> = (args) => (
  <Board {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  xAxis: AxisTop,
  yAxis: AxisLeft,
  xScale: d3.scaleTime().domain([new Date(2021, 0, 29), new Date(2021, 11, 31)]).range([0, 800]).nice(),
  yScale: d3.scaleBand().domain(['STAGE1', 'STAGE2', 'STAGE3', 'STAGE4']).range([600, 0])
};