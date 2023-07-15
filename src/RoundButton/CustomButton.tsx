import { styled } from '../styles';
import Button from '../Button';
import { ICON_CONTAINER_CLASS } from './constants';
import { getColor } from './utils';

export const CustomButton = styled(Button)(({ theme, ...props }) => {
  return {
    display: 'inline-flex',
    position: 'relative',
    borderRadius: '4rem',
    padding: 0,
    cursor: 'pointer',
    zIndex: '2',
    border: 'none',
    backgroundColor: getColor(props.color, 'main', theme),
    boxShadow:
      '0px 3px 5px -1px rgba(0,0,0,0.2),\
      0px 6px 10px 0px rgba(0,0,0,0.14),\
      0px 1px 18px 0px rgba(0,0,0,0.12)',
    '&:hover': {
      [`& .${ICON_CONTAINER_CLASS}`]: {
        backgroundColor: getColor(props.color, 'dark', theme)
      },
      backgroundColor: getColor(props.color, 'main', theme)
    },
    '&:disabled': {
      [`& .${ICON_CONTAINER_CLASS}`]: {
        backgroundColor: getColor(props.color, 'light', theme)
      }
    }
  };
}) as typeof Button;
