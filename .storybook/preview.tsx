import * as React from 'react';

import AppWrapper from '../src/AppProvider';
import { theme } from '../src/AppProvider/theme';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [
    Story => (
      <AppWrapper>
        <Story />
      </AppWrapper>
    )
  ],
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    backgrounds: {
      default: 'default',
      values: [
        { name: 'default', value: theme.palette.background.default },
        { name: 'paper', value: theme.palette.background.paper }
      ]
    },
    layout: 'centered'
  }
};

export default preview;
