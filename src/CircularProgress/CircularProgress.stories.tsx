import CircularProgress from './index';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CircularProgress> = {
  component: CircularProgress,
  tags: ['autodocs'],
  argTypes: {
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

type Story = StoryObj<typeof CircularProgress>;

/**Primary color. Meant to be used with darker background color.*/
export const Primary: Story = {
  args: {
    color: 'primary'
  }
};

/**Secondary color. Meant to be used with lighter background color.*/
export const Secondary: Story = {
  args: {
    color: 'secondary'
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
    color: 'success'
  }
};

/**Error color.*/
export const Error: Story = {
  args: {
    color: 'error'
  }
};

/**Info color.*/
export const Info: Story = {
  args: {
    color: 'info'
  }
};

/**Warning color.*/
export const Warning: Story = {
  args: {
    color: 'warning'
  }
};
