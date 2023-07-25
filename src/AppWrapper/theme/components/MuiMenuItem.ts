import type { Components, Theme } from '@mui/material/styles';

export const MuiMenuItem: Components<Theme>['MuiMenuItem'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ':hover': {
        backgroundColor: theme.palette.primary.light
      }
    })
  }
};
