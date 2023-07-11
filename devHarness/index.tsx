import { createRoot } from 'react-dom/client';
import React from 'react';

import { AppWrapper } from '../src';

const root = createRoot(document.getElementById('root')!);

root.render(<AppWrapper>Hello</AppWrapper>);
