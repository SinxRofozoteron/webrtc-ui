import * as React from 'react';

import AppWrapper from '../src/AppProvider';
import { theme } from '../src/AppProvider/theme';
import { styled } from '../src/styles';

import type { Preview } from '@storybook/react';

const StoryLayout = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const preview: Preview = {
  decorators: [
    Story => (
      <AppWrapper>
        <StoryLayout>
          <Story />
        </StoryLayout>
      </AppWrapper>
    )
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'default',
      values: [
        { name: 'default', value: theme.palette.background.default },
        { name: 'paper', value: theme.palette.background.paper }
      ]
    }
  }
};

export default preview;
