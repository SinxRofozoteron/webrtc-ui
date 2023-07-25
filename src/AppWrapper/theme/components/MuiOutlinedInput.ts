import { lighten } from '@mui/system/colorManipulator';

import type { Components, Theme, CSSInterpolation } from '@mui/material/styles';

export const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      let addonStyles: CSSInterpolation = {};

      if (ownerState.color) {
        addonStyles = {
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette[ownerState.color].main
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette[ownerState.color].light
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette[ownerState.color].dark
          },
          '&.Mui-disabled': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: lighten(theme.palette[ownerState.color].light, 0.2)
            }
          },
          color:
            theme.palette[ownerState.color][
              ownerState.color === 'primary' ? 'light' : 'dark'
            ]
        };
      }

      return addonStyles;
    }
  }
};
