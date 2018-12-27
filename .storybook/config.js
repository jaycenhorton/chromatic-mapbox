import { configure } from '@storybook/react';

// 1. You'll need to import the chromatic addon:
import 'storybook-chromatic';

// 2. If you have a global CSS file, import it here:
import '../src/index.css';

// 3. Load a X.story.js file for each of your components/X.js:
const req = require.context('../src/components', true, /\.story\.js$/);
configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
