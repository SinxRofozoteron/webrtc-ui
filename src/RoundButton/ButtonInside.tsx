import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { type ReactNode } from 'react';

import { ICON_CONTAINER_CLASS } from './constants';
import { LabelContainer } from './LabelContainer';
import { IconContainer } from './IconContainer';

type ButtonInsideProps = {
  open: boolean;
  children: ReactNode;
  label: string;
};

export const ButtonInside = ({ open, children, label }: ButtonInsideProps) => {
  return (
    <>
      <IconContainer className={ICON_CONTAINER_CLASS}>{children}</IconContainer>
      <LabelContainer open={open}>
        <Collapse in={open} orientation="horizontal">
          <Typography color="text.primary" noWrap>
            {label}
          </Typography>
        </Collapse>
      </LabelContainer>
    </>
  );
};
