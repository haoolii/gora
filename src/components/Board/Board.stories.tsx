import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Board } from './Board';

export default {
  title: 'Board',
  component: Board,
} as Meta;

const Template: Story<ComponentProps<typeof Board>> = (args) => (
  <Board {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};