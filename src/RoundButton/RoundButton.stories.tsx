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
    color: {
      defaultValue: 'primary',
      control: 'select',
      options: [
        'primary',
        'secondary',
        'inherit',
        'success',
        'error',
        'info',
        'warning'
      ]
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

/**Primary color. Meant to be used with the default background color.*/
export const Primary: Story = {
  render: args => <RoundButton {...args} icon={<LoginIcon />} />,
  args: {
    color: 'primary',
    label: 'Round Button'
  }
};

/**Secondary color. Meant to be used with the paper background color.*/
export const Secondary: Story = {
  render: args => <RoundButton {...args} icon={<LoginIcon />} />,
  args: {
    color: 'secondary',
    label: 'Round Button'
  },
  parameters: {
    backgrounds: {
      default: 'paper'
    }
  }
};

/**Success color.*/
export const Success: Story = {
  render: args => <RoundButton {...args} icon={<LoginIcon />} />,
  args: {
    color: 'success',
    label: 'Success Button'
  }
};

/**Error color.*/
export const Error: Story = {
  render: args => <RoundButton {...args} icon={<LoginIcon />} />,
  args: {
    color: 'error',
    label: 'Error Button'
  }
};

/**Info color.*/
export const Info: Story = {
  render: args => <RoundButton {...args} icon={<LoginIcon />} />,
  args: {
    color: 'info',
    label: 'Info Button'
  }
};

/**Warning color.*/
export const Warning: Story = {
  render: args => <RoundButton {...args} icon={<LoginIcon />} />,
  args: {
    color: 'warning',
    label: 'Warning Button'
  }
};
