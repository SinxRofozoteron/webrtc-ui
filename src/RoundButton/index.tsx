import { useState } from 'react';

import { ButtonInside } from './ButtonInside';
import { CustomButton } from './CustomButton';

import type { ReactNode } from 'react';
import type { ButtonProps } from '@mui/material/Button';

export type RoundButtonProps = {
  label: string;
  icon: ReactNode;
} & ButtonProps;

const RoundButton = ({ label, icon, ...buttonProps }: RoundButtonProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  return (
    <CustomButton
      {...buttonProps}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <ButtonInside open={open} label={label}>
        {icon}
      </ButtonInside>
    </CustomButton>
  );
};

export default RoundButton;
