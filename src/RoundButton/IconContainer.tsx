import { styled } from '../styles';

export const IconContainer = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  height: '4rem',
  width: '4rem',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  zIndex: 1,
  [theme.breakpoints.up('sm')]: {
    height: '5rem',
    width: '5rem'
  }
}));
