import TextField from './index';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextField> = {
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      value: false,
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
      defaultValue: 'primary',
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
      defaultValue: false,
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
    disabled: false
  }
};

export default meta;

type Story = StoryObj<typeof TextField>;

/** Primary color. Meant to be used with the default background color. */
export const Primary: Story = {
  args: {
    color: 'primary',
    label: 'Primary Text Field'
  }
};

/**Secondary color. Meant to be used with the paper background color.*/
export const Secondary: Story = {
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

/**Success color.*/
export const Success: Story = {
  args: {
    color: 'success',
    label: 'Success Text Field'
  }
};

/**Error color.*/
export const Error: Story = {
  args: {
    color: 'error',
    label: 'Error Text Field'
  }
};

/**Info color.*/
export const Info: Story = {
  args: {
    color: 'info',
    label: 'Info Text Field'
  }
};

/**Warning color.*/
export const Warning: Story = {
  args: {
    color: 'warning',
    label: 'Warning Text Field'
  }
};

/** Text Field in disabled state.
 *  When color is set to "primary" meant to be used with the default background color.
 */
export const DisabledPrimary: Story = {
  args: {
    color: 'primary',
    label: 'Disabled Text Field',
    disabled: true
  }
};

/** Text Field in disabled state.
 *  When color is set to "secondary" meant to be used with the paper background color.
 */
export const DisabledSecondary: Story = {
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
