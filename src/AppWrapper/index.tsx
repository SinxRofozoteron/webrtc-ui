import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';

import { theme } from './theme';

type AppWrapperProps = {
  children: React.ReactNode;
};

const AppWrapper = ({ children }: AppWrapperProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppWrapper;
