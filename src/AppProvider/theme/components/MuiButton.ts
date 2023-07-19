import type { Components, Theme } from '@mui/material/styles';

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    variant: 'outlined',
    color: 'primary'
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      if (ownerState.color !== 'inherit') {
        return {
          '&.Mui-disabled': {
            opacity: 0.7,
            backgroundColor: theme.palette[ownerState.color!].light,
            color: theme.palette.text.primary
          }
        };
      }
      return {};
    }
  }
};
