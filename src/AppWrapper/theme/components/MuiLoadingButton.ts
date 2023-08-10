import type { CSSInterpolation } from '@mui/styled-engine';

export const MuiLoadingButton = {
  defaultProps: {
    variant: 'outlined',
    color: 'primary'
  },
  styleOverrides: {
    // @ts-expect-error
    root: ({ ownerState, theme }) => {
      let addonStyle: CSSInterpolation = {};

      if (ownerState.loading && ['outlined', 'text'].includes(ownerState.variant)) {
        addonStyle = {
          ...addonStyle,
          '&.MuiLoadingButton-loading': {
            backgroundColor: 'transparent',
            borderColor: theme.palette[ownerState.color!].main
          },
          '& .MuiLoadingButton-loadingIndicator': {
            color: theme.palette[ownerState.color!].main
          }
        };
      }

      if (ownerState.loading && ownerState.variant === 'contained') {
        addonStyle = {
          ...addonStyle,
          '&.MuiLoadingButton-loading': {
            backgroundColor: theme.palette[ownerState.color!].main
          },
          '& .MuiLoadingButton-loadingIndicator': {
            color: theme.palette[ownerState.color!].contrastText
          }
        };
      }
      return addonStyle;
    }
  }
};
