import type { CSSInterpolation, Components, Theme } from '@mui/material/styles';

export const MuiFab: Components<Theme>['MuiFab'] = {
  defaultProps: {
    color: 'primary'
  },
  styleOverrides: {
    sizeMedium: ({ ownerState }) => {
      const addonStyles: CSSInterpolation = {};

      if (ownerState.variant === 'extended') {
        addonStyles.width = 'auto';
      }

      return {
        height: '4rem',
        width: '4rem',
        ...addonStyles
      };
    },
    sizeSmall: ({ ownerState }) => {
      const addonStyles: CSSInterpolation = {};

      if (ownerState.variant === 'extended') {
        addonStyles.width = 'auto';
      }

      return {
        height: '3rem',
        width: '3rem',
        ...addonStyles
      };
    },
    root: ({ ownerState, theme }) => {
      const addonStyle: CSSInterpolation = {};
      if (ownerState.color !== 'inherit' && ownerState.color !== 'default') {
        addonStyle['&.Mui-disabled'] = {
          opacity: 0.7,
          backgroundColor: theme.palette[ownerState.color!].light,
          color: theme.palette.text.primary
        };
      }
      if (ownerState.variant === 'extended') {
        addonStyle.width = 'auto';
        addonStyle.borderRadius = '5rem';
      }
      return {
        height: '5rem',
        width: '5rem',
        ...addonStyle
      };
    }
  }
};
