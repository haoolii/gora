import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Stage } from './Stage';

export default {
  title: 'Stage',
  component: Stage,
} as Meta;

const Template: Story<ComponentProps<typeof Stage>> = (args) => (
  <Stage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};