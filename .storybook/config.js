import { configure } from '@storybook/react';
import 'storybook-chromatic';

// Manually defining some functions to make chromatic work (fails if excluded)
if (!window.URL.createObjectURL) {
  Object.defineProperty(window.URL, 'createObjectURL', { value: () => {} });
}
// Manually defining some functions to make chromatic work (warns if the above is included whilst the following is excluded)
if (!window.URL.revokeObjectURL) {
  Object.defineProperty(window.URL, 'revokeObjectURL', { value: () => {} });
}

const req = require.context('../src/stories', true, /\.story\.js$/);
configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
