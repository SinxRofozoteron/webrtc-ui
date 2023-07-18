import Button from './index';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      defaultValue: 'outlined',
      control: 'select',
      options: ['outlined', 'contained', 'text']
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
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

/**Primary color. Meant to be used with the default background color.*/
export const Primary: Story = {
  args: {
    children: 'Button',
    color: 'primary',
    variant: 'outlined'
  }
};

/**Secondary color. Meant to be used with the paper background color.*/
export const Secondary: Story = {
  args: {
    children: 'Button',
    color: 'secondary',
    variant: 'contained'
  },
  parameters: {
    backgrounds: {
      default: 'paper'
    }
  }
};

/**Success color.*/
export const Success: Story = {
  args: {
    children: 'Button',
    color: 'success',
    variant: 'contained'
  }
};

/**Error color.*/
export const Error: Story = {
  args: {
    children: 'Button',
    color: 'error',
    variant: 'contained'
  }
};

/**Info color.*/
export const Info: Story = {
  args: {
    children: 'Button',
    color: 'info',
    variant: 'contained'
  }
};

/**Warning color.*/
export const Warning: Story = {
  args: {
    children: 'Button',
    color: 'warning',
    variant: 'contained'
  }
};
