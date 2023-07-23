import type { Components, Theme, CSSInterpolation } from '@mui/material/styles';

export const MuiFormLabel: Components<Theme>['MuiFormLabel'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      let addonStyles: CSSInterpolation = {};

      if (ownerState.color === 'secondary') {
        addonStyles = {
          color: theme.palette.secondary.main
        };
      }

      return addonStyles;
    }
  }
};
