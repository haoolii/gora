import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Gantt } from './Gantt';

export default {
  title: 'Gantt',
  component: Gantt,
} as Meta;

const Template: Story<ComponentProps<typeof Gantt>> = (args) => (
  <Gantt {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};