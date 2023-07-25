import TextField from './index';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextField> = {
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'standard']
    },
    disabled: {
      control: 'boolean'
    },
    onChange: {
      action: 'onChange',
      description: 'Event. Fires on value change.'
    },
    color: {
      description:
        'Color scheme of the component.\nPossible options: ' +
        '"primary", "secondary", "success", "error", "info", "warning".',
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
      table: {
        defaultValue: {
          summary: '"primary"'
        }
      }
    },
    label: {
      control: 'text',
      description: 'Label for the text field.'
    },
    error: {
      description: 'Controls whether component is displayed in error state.',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    }
  },
  args: {
    error: false,
    color: 'primary',
    disabled: false,
    variant: 'outlined'
  }
};

export default meta;

type Story = StoryObj<typeof TextField>;

/** Outlined TextField with primary color.
 * Meant to be used with the default background color.
 */
export const OutlinedPrimary: Story = {
  args: {
    color: 'primary',
    label: 'Primary Text Field'
  }
};

/** Outlined TextField with secondary color.
 * Meant to be used with the paper background color.
 */
export const OutlinedSecondary: Story = {
  args: {
    color: 'secondary',
    label: 'Secondary Text Field'
  },
  parameters: {
    backgrounds: {
      default: 'paper'
    }
  }
};

/** Outlined TextField with success color.*/
export const OutlinedSuccess: Story = {
  args: {
    color: 'success',
    label: 'Success Text Field'
  }
};

/** Outlined TextField with error color.*/
export const OutlinedError: Story = {
  args: {
    color: 'error',
    label: 'Error Text Field'
  }
};

/** Outlined TextField with info color.*/
export const OutlinedInfo: Story = {
  args: {
    color: 'info',
    label: 'Info Text Field'
  }
};

/** Outlined TextField with warning color.*/
export const OutlinedWarning: Story = {
  args: {
    color: 'warning',
    label: 'Warning Text Field'
  }
};

/** Outlined TextField in disabled state.
 *  When color is set to "primary" meant to be used with the default background color.
 */
export const OutlinedDisabledPrimary: Story = {
  args: {
    color: 'primary',
    label: 'Disabled Text Field',
    disabled: true
  }
};

/** Outlined TextField in disabled state.
 *  When color is set to "secondary" meant to be used with the paper background color.
 */
export const OutlinedDisabledSecondary: Story = {
  args: {
    color: 'secondary',
    label: 'Disabled Text Field',
    disabled: true
  },
  parameters: {
    backgrounds: {
      default: 'paper'
    }
  }
};

/** Filled TextField with primary color.
 * Meant to be used with the default background color.
 */
export const FilledPrimary: Story = {
  args: {
    color: 'primary',
    label: 'Primary Text Field',
    variant: 'filled'
  }
};

/** Filled TextField with secondary color.
 * Meant to be used with the paper background color.
 */
export const FilledSecondary: Story = {
  args: {
    color: 'secondary',
    label: 'Primary Text Field',
    variant: 'filled'
  },
  parameters: {
    backgrounds: {
      default: 'paper'
    }
  }
};
