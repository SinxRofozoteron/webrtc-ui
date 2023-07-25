import { lighten, alpha, darken } from '@mui/material/styles';

import type { Components, Theme } from '@mui/material/styles';

export const MuiTextField: Components<Theme>['MuiTextField'] = {
  variants: [
    {
      props: { variant: 'outlined', color: 'secondary' },
      style: ({ theme }) => ({
        '& .MuiInputLabel-root': {
          color: theme.palette.secondary.main,
          '&.Mui-disabled': {
            color: lighten(theme.palette.secondary.light, 0.2)
          }
        }
      })
    },
    {
      props: { variant: 'filled', color: 'primary' },
      style: ({ theme }) => ({
        '& .MuiInputBase-root': {
          color: theme.palette.secondary.light,
          backgroundColor: alpha(theme.palette.primary.main, 0.7)
        },
        '& .MuiInputBase-root.Mui-disabled, &:hover .MuiInputBase-root.Mui-disabled': {
          backgroundColor: alpha(theme.palette.primary.main, 0.5)
        },
        '&:hover .MuiInputBase-root': {
          backgroundColor: alpha(theme.palette.primary.light, 0.7)
        },
        '& .MuiInputBase-root.Mui-focused': {
          backgroundColor: alpha(theme.palette.primary.dark, 0.7)
        },
        '& .MuiInputLabel-root': {
          color: theme.palette.secondary.light,
          '&.Mui-focused': {
            color: theme.palette.primary.contrastText
          }
        }
      })
    },
    {
      props: { variant: 'filled', color: 'secondary' },
      style: ({ theme }) => ({
        '& .MuiInputBase-root': {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.secondary.main
        },
        '& .MuiInputBase-root.Mui-error': {
          color: theme.palette.secondary.dark,
          backgroundColor: theme.palette.secondary.light
        },
        '& .MuiInputBase-root.Mui-focused': {
          backgroundColor: theme.palette.secondary.dark
        },
        '& .MuiInputBase-root.Mui-disabled, &:hover .MuiInputBase-root.Mui-disabled': {
          backgroundColor: lighten(theme.palette.secondary.light, 0.1)
        },
        '&:hover .MuiInputBase-root': {
          backgroundColor: theme.palette.secondary.light
        },
        '& .MuiInputLabel-root': {
          color: theme.palette.text.primary,
          '&.Mui-focused': {
            color: theme.palette.text.primary
          },
          '&.Mui-disabled': {
            color: theme.palette.secondary.main
          }
        }
      })
    },
    {
      props: { variant: 'filled', color: 'success' },
      style: ({ theme }) => ({
        '& .MuiInputBase-root': {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.success.main
        },
        '&:hover .MuiInputBase-root': {
          backgroundColor: theme.palette.success.light
        },
        '& .MuiInputBase-root.Mui-focused': {
          backgroundColor: theme.palette.success.dark
        },
        '& .MuiInputBase-root.Mui-disabled, &:hover .MuiInputBase-root.Mui-disabled': {
          backgroundColor: lighten(theme.palette.success.light, 0.1)
        },
        '& .MuiInputLabel-root': {
          color: theme.palette.text.primary,
          '&.Mui-error': {
            color: theme.palette.error.main
          },
          '&.Mui-disabled': {
            color: theme.palette.success.dark
          },
          '&.Mui-focused': {
            '&.Mui-error': {
              color: lighten(theme.palette.error.light, 0.5)
            },
            color: theme.palette.success.contrastText
          }
        }
      })
    },
    {
      props: { variant: 'filled', color: 'error' },
      style: ({ theme }) => ({
        '& .MuiInputBase-root': {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.error.main
        },
        '&:hover .MuiInputBase-root': {
          backgroundColor: theme.palette.error.light
        },
        '& .MuiInputBase-root.Mui-focused': {
          backgroundColor: theme.palette.error.dark
        },
        '& .MuiInputBase-root.Mui-disabled, &:hover .MuiInputBase-root.Mui-disabled': {
          backgroundColor: lighten(theme.palette.error.light, 0.1)
        },
        '& .MuiInputLabel-root': {
          '&.Mui-focused, &.Mui-error': {
            color: theme.palette.background.default
          }
        }
      })
    },
    {
      props: { variant: 'filled', color: 'info' },
      style: ({ theme }) => ({
        '& .MuiInputBase-root': {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.info.main
        },
        '&:hover .MuiInputBase-root': {
          backgroundColor: theme.palette.info.light
        },
        '& .MuiInputBase-root.Mui-focused': {
          backgroundColor: theme.palette.info.dark
        },
        '& .MuiInputBase-root.Mui-disabled, &:hover .MuiInputBase-root.Mui-disabled': {
          backgroundColor: lighten(theme.palette.info.light, 0.1)
        },
        '& .MuiInputLabel-root': {
          color: theme.palette.info.contrastText,
          '&.Mui-disabled': {
            color: theme.palette.info.dark
          },
          '&.Mui-focused': {
            color: theme.palette.info.contrastText
          },
          '&.Mui-error': {
            '&.Mui-focused': {
              color: lighten(theme.palette.error.light, 0.5)
            },
            color: theme.palette.error.dark
          }
        }
      })
    },
    {
      props: { variant: 'filled', color: 'warning' },
      style: ({ theme }) => ({
        '& .MuiInputBase-root': {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.warning.main
        },
        '&:hover .MuiInputBase-root': {
          backgroundColor: theme.palette.warning.light
        },
        '& .MuiInputBase-root.Mui-focused': {
          backgroundColor: theme.palette.warning.dark
        },
        '& .MuiInputBase-root.Mui-disabled, &:hover .MuiInputBase-root.Mui-disabled': {
          backgroundColor: lighten(theme.palette.warning.light, 0.1)
        },
        '& .MuiInputLabel-root': {
          color: theme.palette.warning.contrastText,
          '&.Mui-focused': {
            color: theme.palette.warning.contrastText
          },
          '&.Mui-error': {
            '&.Mui-focused': {
              color: darken(theme.palette.error.dark, 0.2)
            },
            color: theme.palette.error.dark
          }
        }
      })
    },
    {
      props: { variant: 'standard', color: 'secondary' },
      style: ({ theme }) => ({
        '& .MuiInputLabel-root': {
          color: theme.palette.text.primary,
          '&.Mui-focused': {
            color: theme.palette.secondary.main
          }
        }
      })
    }
  ]
};
