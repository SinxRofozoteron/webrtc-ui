import * as React from 'react';

import AppWrapper from '../src/AppWrapper';
import { theme } from '../src/AppWrapper/theme';

import type { Preview } from '@storybook/react';

console.log('HERE');

const preview: Preview = {
  decorators: [
    Story => (
      <AppWrapper locale="en" messages={{}}>
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
