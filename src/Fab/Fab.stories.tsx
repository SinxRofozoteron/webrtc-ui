import SettingsIcon from '@mui/icons-material/Settings';
import * as React from 'react';

import Fab from './index';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Fab> = {
  component: Fab,
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
    },
    variant: {
      defaultValue: 'circular',
      control: 'select',
      options: ['circular', 'extended']
    },
    size: {
      defaultValue: 'large',
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    disabled: {
      defaultValue: false,
      control: 'boolean'
    }
  },
  parameters: {
    controls: {
      include: ['color', 'variant', 'size', 'disabled']
    }
  }
};

export default meta;

type Story = StoryObj<typeof Fab>;

const renderFunc: Story['render'] = args => (
  <Fab {...args}>
    <SettingsIcon />
  </Fab>
);

/**Primary color. Meant to be used with the default background color.*/
export const PrimaryColor: Story = {
  render: renderFunc,
  args: {
    color: 'primary',
    variant: 'circular'
  }
};

/**Secondary color. Meant to be used with the paper background color.*/
export const SecondaryColor: Story = {
  render: renderFunc,
  args: {
    color: 'secondary',
    variant: 'circular',
    size: 'large'
  },
  parameters: {
    backgrounds: {
      default: 'paper'
    }
  }
};

/**Success color.*/
export const SuccessColor: Story = {
  render: renderFunc,
  args: {
    color: 'success',
    variant: 'circular',
    size: 'large'
  }
};

/**Error color.*/
export const ErrorColor: Story = {
  render: renderFunc,
  args: {
    color: 'error',
    variant: 'circular',
    size: 'large'
  }
};

/**Info color.*/
export const InfoColor: Story = {
  render: renderFunc,
  args: {
    color: 'info',
    variant: 'circular',
    size: 'large'
  }
};

/**Warning color.*/
export const WarningColor: Story = {
  render: renderFunc,
  args: {
    color: 'warning',
    variant: 'circular',
    size: 'large'
  }
};

/**Disabled.*/
export const Disabled: Story = {
  render: renderFunc,
  args: {
    color: 'primary',
    variant: 'circular',
    size: 'large',
    disabled: true
  }
};

/**Extended variant.*/
export const ExtendedVariant: Story = {
  render: args => (
    <Fab {...args}>
      <SettingsIcon sx={{ mr: 1 }} />
      Extended Variant
    </Fab>
  ),
  args: {
    color: 'primary',
    variant: 'extended',
    size: 'large'
  }
};
