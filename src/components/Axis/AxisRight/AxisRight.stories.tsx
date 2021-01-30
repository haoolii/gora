import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { AxisRight } from './AxisRight';
import * as d3 from 'd3';

export default {
  title: 'AxisRight',
  component: AxisRight,
} as Meta;

const Template: Story<ComponentProps<typeof AxisRight>> = (args) => (
  <svg width={800 + 60} height={600 + 60} >
    <g transform="translate(30, 30)">
      <AxisRight {...args} />
    </g>
  </svg>
);

export const Primary = Template.bind({});
Primary.args = {
  scale: d3.scaleTime().domain([new Date(2021, 0, 29), new Date(2021, 11, 31)]).range([0, 600]).nice(),
};