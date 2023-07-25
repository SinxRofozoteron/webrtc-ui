import type { Components, Theme, CSSInterpolation } from '@mui/material/styles';

export const MuiInput: Components<Theme>['MuiInput'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      if (ownerState.color === 'secondary') {
        return { color: theme.palette.text.primary };
      } else {
        return { color: theme.palette.text.secondary };
      }
    },
    underline: ({ ownerState, theme }) => {
      let addonStyles: CSSInterpolation = {};

      if (ownerState.color) {
        addonStyles = {
          '&:before': {
            borderBottomColor: theme.palette[ownerState.color].main
          }
        };
      }

      return addonStyles;
    }
  }
};
