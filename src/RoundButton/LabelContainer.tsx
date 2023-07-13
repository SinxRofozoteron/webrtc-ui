import { styled } from '../styles';

export const LabelContainer = styled('div', {
  shouldForwardProp: prop => prop !== 'open'
})<{ open: boolean }>(({ theme, ...props }) => ({
  width: props.open ? 'auto' : '0px',
  height: '4rem',
  paddingLeft: props.open ? '2.5rem' : '0px',
  flexWrap: 'nowrap',
  position: 'relative',
  borderRadius: '0 4rem 4rem 0',
  left: '-2rem',
  display: 'inline-flex',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard
  }),
  [theme.breakpoints.up('sm')]: {
    height: '5rem',
    paddingLeft: props.open ? '3rem' : '0px',
    borderRadius: '0 5rem 5rem 0',
    left: '-2.5rem'
  }
}));
