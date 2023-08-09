import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { type ReactNode } from 'react';
import * as React from 'react';

import { ICON_CONTAINER_CLASS } from './constants';
import { LabelContainer } from './LabelContainer';
import { IconContainer } from './IconContainer';

import type { ButtonProps } from '../Button';

type ButtonInsideProps = {
  open: boolean;
  children: ReactNode;
  label: string;
  color?: ButtonProps['color'];
};

export const ButtonInside = ({ open, children, label, color }: ButtonInsideProps) => {
  return (
    <>
      <IconContainer className={ICON_CONTAINER_CLASS} color={color}>
        {children}
      </IconContainer>
      <LabelContainer open={open} color={color}>
        <Collapse in={open} orientation="horizontal">
          <Typography noWrap>{label}</Typography>
        </Collapse>
      </LabelContainer>
    </>
  );
};
