import { configure } from '@storybook/react';
import 'storybook-chromatic';

const req = require.context('../src/stories', true, /\.story\.js$/);
configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
