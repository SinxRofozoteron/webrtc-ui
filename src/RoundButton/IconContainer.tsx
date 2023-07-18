import { styled } from '../styles';
import { getColor } from './utils';

import type { ButtonProps } from '../Button';

type IconContainerProps = {
  color: ButtonProps['color'];
};

export const IconContainer = styled('div')<IconContainerProps>(
  ({ theme, ...props }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    height: '4rem',
    width: '4rem',
    backgroundColor: getColor(props.color, 'main', theme),
    color:
      props.color === 'primary'
        ? theme.palette.text.primary
        : theme.palette.text.secondary,
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      height: '5rem',
      width: '5rem'
    }
  })
);
