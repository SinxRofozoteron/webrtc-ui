import LoginIcon from '@mui/icons-material/Login';
import * as React from 'react';

import RoundButton from './index';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RoundButton> = {
  component: RoundButton,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text'
    },
    onFocusVisible: {
      control: false
    }
  },
  parameters: {
    controls: {
      include: ['color', 'label']
    }
  }
};

export default meta;

type Story = StoryObj<typeof RoundButton>;

export const Primary: Story = {
  render: args => <RoundButton {...args} icon={<LoginIcon />} />,
  args: {
    color: 'primary',
    label: 'Round Button'
  }
};
