import { useRef, useState } from 'react';
import * as React from 'react';

import MenuItem from '../MenuItem';
import Button from '../Button';
import Menu from './index';

import type { PopoverProps } from '@mui/material/Popover';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Menu> = {
  component: Menu,
  tags: ['autodocs'],
  argTypes: {
    sx: {
      control: 'object',
      description:
        'The system prop that allows defining system overrides' +
        ' as well as additional CSS styles.'
    },
    anchorOrigin: {
      table: {
        defaultValue: {
          summary: "{ vertical: 'top', horizontal: 'left' }",
          detail:
            "This is the point on the anchor where the popover's" +
            'anchorEl will attach to. \nThis is not used when the anchorReference' +
            " is 'anchorPosition'." +
            '\nOptions:' +
            '\n vertical: [top, center, bottom];' +
            '\n horizontal: [left, center, right].'
        }
      },
      defaultValue: { vertical: 'top', horizontal: 'left' },
      description:
        "This is the point on the popover which will attach to the anchor's origin.",
      control: 'object',
      type: {
        name: 'object',
        required: false,
        value: {
          vertical: {
            name: 'enum',
            value: ['top', 'center', 'bottom']
          },
          horizontal: {
            name: 'enum',
            value: ['left', 'center', 'right']
          }
        }
      }
    },
    transformOrigin: {
      table: {
        defaultValue: {
          summary: "{ vertical: 'top', horizontal: 'left' }",
          detail:
            'Options: \n vertical: [top, center, bottom, x(px)]\n' +
            ' horizontal: [left, center, right, x(px)]'
        }
      },
      defaultValue: { vertical: 'top', horizontal: 'left' },
      description:
        "This is the point on the popover which will attach to the anchor's origin.",
      control: 'object',
      type: {
        name: 'object',
        required: false,
        value: {
          vertical: {
            name: 'enum',
            value: ['top', 'center', 'bottom']
          },
          horizontal: {
            name: 'enum',
            value: ['left', 'center', 'right']
          }
        }
      }
    },
    onClose: {
      action: 'onClose'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const SimpleMenu: Story = {
  render: ({ onClose, transformOrigin, anchorOrigin, sx }) => {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose: PopoverProps['onClose'] = (e, reason) => {
      if (onClose) {
        onClose(e, reason);
      }

      setOpen(false);
    };

    return (
      <>
        <Button ref={buttonRef} onClick={handleOpen}>
          {open ? 'Close Menu' : 'Open Menu'}
        </Button>
        <Menu
          open={open}
          onClose={handleClose}
          anchorEl={buttonRef.current}
          transformOrigin={transformOrigin}
          anchorOrigin={anchorOrigin}
          sx={sx}>
          <MenuItem>One</MenuItem>
          <MenuItem>Two</MenuItem>
        </Menu>
      </>
    );
  },
  args: {
    transformOrigin: { vertical: 'top', horizontal: 'left' },
    anchorOrigin: { vertical: 'top', horizontal: 'left' },
    sx: {
      minWidth: '100px'
    }
  }
};
