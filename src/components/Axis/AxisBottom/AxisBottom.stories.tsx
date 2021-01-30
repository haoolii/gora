import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { AxisBottom } from './AxisBottom';
import * as d3 from 'd3';

export default {
  title: 'AxisBottom',
  component: AxisBottom,
} as Meta;

const Template: Story<ComponentProps<typeof AxisBottom>> = (args) => (
  <svg width={800 + 60} height={600 + 60} >
    <g transform="translate(30, 30)">
      <AxisBottom {...args} />
    </g>
  </svg>
);

export const Primary = Template.bind({});
Primary.args = {
  width: 800,
  height: 600,
  scale: d3.scaleTime().domain([new Date(2021, 0, 29), new Date(2021, 11, 31)]).range([0, 800]).nice(),
};