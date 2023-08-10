import { MuiFab } from './MuiFab';
import { MuiButton } from './MuiButton';
import { MuiMenuItem } from './MuiMenuItem';
import { MuiOutlinedInput } from './MuiOutlinedInput';
import { MuiTextField } from './MuiTextField';
import { MuiInput } from './MuiInput';
import { MuiLoadingButton } from './MuiLoadingButton';

import type { Components, Theme } from '@mui/material/styles';

export const components: Components<Theme> & {
  MuiLoadingButton: typeof MuiLoadingButton;
} = {
  MuiFab,
  MuiButton,
  MuiMenuItem,
  MuiOutlinedInput,
  MuiTextField,
  MuiInput,
  MuiLoadingButton
};
