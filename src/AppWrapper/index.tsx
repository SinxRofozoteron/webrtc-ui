import { ThemeProvider } from '@mui/material/styles';
import { IntlProvider } from 'react-intl';
import * as React from 'react';

import { theme } from './theme';

import type { MessageFormatElement } from 'react-intl';

type AppWrapperProps = {
  children: React.ReactNode;
  messages: Record<string, string> | Record<string, MessageFormatElement[]>;
  locale: string;
  defaultLocale?: string;
};

const AppWrapper = ({ children, messages, locale, defaultLocale }: AppWrapperProps) => {
  return (
    <IntlProvider messages={messages} locale={locale} defaultLocale={defaultLocale}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </IntlProvider>
  );
};

export default AppWrapper;
