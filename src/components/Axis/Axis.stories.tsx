import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Axis } from './Axis';

export default {
  title: 'Axis',
  component: Axis,
} as Meta;

const Template: Story<ComponentProps<typeof Axis>> = (args) => (
  <Axis {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};