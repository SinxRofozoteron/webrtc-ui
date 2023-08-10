import LoadingButton from './index';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LoadingButton> = {
  component: LoadingButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description:
        'Component look. \nPossible options: "outlined", "contained", "text".',
      table: {
        defaultValue: {
          summary: '"outlined"'
        }
      },
      control: 'select',
      options: ['outlined', 'contained', 'text']
    },
    color: {
      description:
        'Color scheme of the component.\nPossible options: ' +
        '"primary", "secondary", "success", "error", "info", "warning".',
      control: 'select',
      table: {
        defaultValue: {
          summary: '"primary"'
        }
      },
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
    disabled: {
      description: 'Controls disabled state of the component.',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    loading: {
      description: 'Controls loading state of the component.',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: false
        }
      }
    }
  },
  args: {
    disabled: false,
    loading: true
  }
};

export default meta;

type Story = StoryObj<typeof LoadingButton>;

/**
 * Primary color with the outlined variant.
 * Meant to be used with the default background color.
 * */
export const PrimaryOutlined: Story = {
  args: {
    children: 'Loading Button',
    color: 'primary',
    variant: 'outlined'
  }
};

/**
 * Secondary color with the outlined variant.
 * Meant to be used with the paper background color.
 * */
export const SecondaryOutlined: Story = {
  args: {
    children: 'Loading Button',
    color: 'secondary',
    variant: 'outlined'
  },
  parameters: {
    backgrounds: {
      default: 'paper'
    }
  }
};

/**Success color with the outlined variant.*/
export const SuccessOutlined: Story = {
  args: {
    children: 'Loading Button',
    color: 'success',
    variant: 'outlined'
  }
};

/**Error color with the outlined variant.*/
export const ErrorOutlined: Story = {
  args: {
    children: 'Loading Button',
    color: 'error',
    variant: 'outlined'
  }
};

/**Info color with the outlined variant.*/
export const InfoOutlined: Story = {
  args: {
    children: 'Loading Button',
    color: 'info',
    variant: 'outlined'
  }
};

/**Warning color with the outlined variant.*/
export const WarningOutlined: Story = {
  args: {
    children: 'Loading Button',
    color: 'warning',
    variant: 'outlined'
  }
};

/**
 * Primary color with the contained variant.
 * Meant to be used with the default background color.
 * */
export const PrimaryContained: Story = {
  args: {
    children: 'Loading Button',
    color: 'primary',
    variant: 'contained'
  }
};

/**
 * Secondary color with the contained variant.
 * Meant to be used with the paper background color.
 * */
export const SecondaryContained: Story = {
  args: {
    children: 'Loading Button',
    color: 'secondary',
    variant: 'outlined'
  },
  parameters: {
    backgrounds: {
      default: 'paper'
    }
  }
};

/**
 * Primary color with the text variant.
 * Meant to be used with the default background color.
 * */
export const PrimaryTextVariant: Story = {
  args: {
    children: 'Loading Button',
    color: 'primary',
    variant: 'text'
  }
};

/**
 * Secondary color with the text variant.
 * Meant to be used with the paper background color.
 * */
export const SecondaryTextVariant: Story = {
  args: {
    children: 'Loading Button',
    color: 'secondary',
    variant: 'text'
  },
  parameters: {
    backgrounds: {
      default: 'paper'
    }
  }
};
