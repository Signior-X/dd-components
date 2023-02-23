// stories/ToggleSwitch.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from "../src";

const meta: Meta = {
  title: 'Input/Toggle Switch',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    enabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};