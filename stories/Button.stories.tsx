// stories/ToggleSwitch.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from "../src";

const meta: Meta = {
  title: 'Buttons',
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

const Template: Story<ButtonProps> = (args) => <Button className='btn' {...args}> Button Primary </Button>;

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};

const Template2: Story<ButtonProps> = (args) => <Button className='btn btn-sm' {...args}> btn-sm </Button>;
export const Small = Template2.bind({});
