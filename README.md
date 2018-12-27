# Notes:

- To reproduce the bug, see branch: `master`
- To reproduce temporary patch to get chromatic working, run on branch: `fix-chromatic` or [see here](https://github.com/jaycenhorton/chromatic-mapbox/pull/1)

# Reproduce chromatic bug

`yarn run chromatic`

## Initial Error Output (as seen on branch: master)

### Output:

```
> yarn run chromatic

yarn run v1.12.3
$ ./node_modules/.bin/chromatic test --app-code='jxfm5y5n8z'
Chromatic Tester: Detected 'storybook' script, running with inferred options:
    --script-name=storybook --storybook-port=9009
  Override any of the above if they were inferred incorrectly.

Chromatic Tester: Starting storybook
Chromatic Tester: Started storybook at http://localhost:9009/iframe.html
Chromatic Tester: Opening tunnel to Chromatic capture servers
Chromatic Tester: Uploading and verifying build (this may take a few minutes depending on your connection)

Your app logged the following to the error console:
=========================
TypeError: window.URL.createObjectURL is not a function
    at define (https://hulhdnsgek.tunnel.chromaticqa.com/vendors~main.1bce5037a401d4df902f.bundle.js:25132:37)
    at https://hulhdnsgek.tunnel.chromaticqa.com/vendors~main.1bce5037a401d4df902f.bundle.js:25141:1
    at push../node_modules/mapbox-gl/dist/mapbox-gl.js.r (https://hulhdnsgek.tunnel.chromaticqa.com/vendors~main.1bce5037a401d4df902f.bundle.js:25112:26)
    at Object../node_modules/mapbox-gl/dist/mapbox-gl.js (https://hulhdnsgek.tunnel.chromaticqa.com/vendors~main.1bce5037a401d4df902f.bundle.js:25114:2)
    at __webpack_require__ (https://hulhdnsgek.tunnel.chromaticqa.com/runtime~main.1bce5037a401d4df902f.bundle.js:782:30)
    at fn (https://hulhdnsgek.tunnel.chromaticqa.com/runtime~main.1bce5037a401d4df902f.bundle.js:150:20)
    at Object../node_modules/react-map-gl/dist/es5/utils/mapboxgl.browser.js (https://hulhdnsgek.tunnel.chromaticqa.com/vendors~main.1bce5037a401d4df902f.bundle.js:53185:40)
    at __webpack_require__ (https://hulhdnsgek.tunnel.chromaticqa.com/runtime~main.1bce5037a401d4df902f.bundle.js:782:30)
    at fn (https://hulhdnsgek.tunnel.chromaticqa.com/runtime~main.1bce5037a401d4df902f.bundle.js:150:20)
    at Object../node_modules/react-map-gl/dist/es5/components/static-map.js (https://hulhdnsgek.tunnel.chromaticqa.com/vendors~main.1bce5037a401d4df902f.bundle.js:50503:40)

=========================
This may lead to some stories not working right or getting detected by Chromatic
We suggest you fix the errors, but we will continue anyway..

**Chromatic build failed. Please note the session id: 'f6e60177-fd07-4eb3-ad90-e50a0454cb6a' and contact support@hichroma.com -or- open a support ticket at https://chromaticqa.com**

Error: Cannot run a build with no stories. Please add some stories!
    at /home/ubuntu/dev/tmp/chromatic-mapbox/node_modules/storybook-chromatic/dist/tester.js:1:9363
    at tryCatch (/home/ubuntu/dev/tmp/chromatic-mapbox/node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js:62:40)
    at Generator.invoke [as _invoke] (/home/ubuntu/dev/tmp/chromatic-mapbox/node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js:296:22)
    at Generator.prototype.(anonymous function) [as next] (/home/ubuntu/dev/tmp/chromatic-mapbox/node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js:114:21)
    at step (/home/ubuntu/dev/tmp/chromatic-mapbox/node_modules/babel-runtime/helpers/asyncToGenerator.js:17:30)
    at /home/ubuntu/dev/tmp/chromatic-mapbox/node_modules/babel-runtime/helpers/asyncToGenerator.js:28:13
    at <anonymous>
    at process._tickCallback (internal/process/next_tick.js:118:7)

error Command failed with exit code 255.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

## After manually defining createObjectURL in config.js (as seen on branch: fix-chromatic)

### Include the following lines in `config.js` (see the branch called `fix-chromatic`)

```js
// Manually defining some functions to make chromatic work (fails if excluded)
if (!window.URL.createObjectURL) {
  Object.defineProperty(window.URL, 'createObjectURL', { value: () => {} });
}
```

### Output:

```
> yarn run chromatic

yarn run v1.12.3
$ ./node_modules/.bin/chromatic test --app-code='jxfm5y5n8z'
Chromatic Tester: Detected 'storybook' script, running with inferred options:
    --script-name=storybook --storybook-port=9009
  Override any of the above if they were inferred incorrectly.

Chromatic Tester: Starting storybook
Chromatic Tester: Started storybook at http://localhost:9009/iframe.html
Chromatic Tester: Opening tunnel to Chromatic capture servers
Chromatic Tester: Uploading and verifying build (this may take a few minutes depending on your connection)

Your app logged the following to the error console:
=========================
{ Error: Uncaught [TypeError: URL.revokeObjectURL is not a function]
    at reportException (/home/ubuntu/dev/tmp/chromatic-mapbox/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:66:24)
    at invokeEventListeners (/home/ubuntu/dev/tmp/chromatic-mapbox/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:209:9)
    at HTMLUnknownElementImpl._dispatch (/home/ubuntu/dev/tmp/chromatic-mapbox/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:119:9)
    at HTMLUnknownElementImpl.dispatchEvent (/home/ubuntu/dev/tmp/chromatic-mapbox/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:82:17)
    at HTMLUnknownElementImpl.dispatchEvent (/home/ubuntu/dev/tmp/chromatic-mapbox/node_modules/jsdom/lib/jsdom/living/nodes/HTMLElement-impl.js:30:27)
    at HTMLUnknownElement.dispatchEvent (/home/ubuntu/dev/tmp/chromatic-mapbox/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:157:21)
    at Object.invokeGuardedCallbackDev (https://cphjddubmb.tunnel.chromaticqa.com/vendors~main.dbdcd81e776de40558bc.bundle.js:28958:16)
    at invokeGuardedCallback (https://cphjddubmb.tunnel.chromaticqa.com/vendors~main.dbdcd81e776de40558bc.bundle.js:29015:31)
    at commitRoot (https://cphjddubmb.tunnel.chromaticqa.com/vendors~main.dbdcd81e776de40558bc.bundle.js:46547:7)
    at completeRoot (https://cphjddubmb.tunnel.chromaticqa.com/vendors~main.dbdcd81e776de40558bc.bundle.js:47999:3)
  detail: TypeError: URL.revokeObjectURL is not a function
    at https://cphjddubmb.tunnel.chromaticqa.com/vendors~main.dbdcd81e776de40558bc.bundle.js:25054:1015
    at Object.e [as supported] (https://cphjddubmb.tunnel.chromaticqa.com/vendors~main.dbdcd81e776de40558bc.bundle.js:25054:1036)
    at Function.supported (https://cphjddubmb.tunnel.chromaticqa.com/vendors~main.dbdcd81e776de40558bc.bundle.js:50714:53)
    at StaticMap.componentDidMount (https://cphjddubmb.tunnel.chromaticqa.com/vendors~main.dbdcd81e776de40558bc.bundle.js:50550:22)
    at commitLifeCycles (https://cphjddubmb.tunnel.chromaticqa.com/vendors~main.dbdcd81e776de40558bc.bundle.js:44986:22)
    at commitAllLifeCycles (https://cphjddubmb.tunnel.chromaticqa.com/vendors~main.dbdcd81e776de40558bc.bundle.js:46351:7)
    at HTMLUnknownElement.callCallback (https://cphjddubmb.tunnel.chromaticqa.com/vendors~main.dbdcd81e776de40558bc.bundle.js:28908:14)
    at invokeEventListeners (/home/ubuntu/dev/tmp/chromatic-mapbox/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:193:27)
    at HTMLUnknownElementImpl._dispatch (/home/ubuntu/dev/tmp/chromatic-mapbox/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:119:9)
    at HTMLUnknownElementImpl.dispatchEvent (/home/ubuntu/dev/tmp/chromatic-mapbox/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:82:17),
  type: 'unhandled exception' }
The above error occurred in the <StaticMap> component:
    in StaticMap (created by InteractiveMap)
    in div (created by InteractiveMap)
    in InteractiveMap (at Map.js:17)
    in Map (at Map.story.js:6)

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://fb.me/react-error-boundaries to learn more about error boundaries.
TypeError: URL.revokeObjectURL is not a function
    at https://cphjddubmb.tunnel.chromaticqa.com/vendors~main.dbdcd81e776de40558bc.bundle.js:25054:1015
    at Object.e [as supported] (https://cphjddubmb.tunnel.chromaticqa.com/vendors~main.dbdcd81e776de40558bc.bundle.js:25054:1036)
    at Function.supported (https://cphjddubmb.tunnel.chromaticqa.com/vendors~main.dbdcd81e776de40558bc.bundle.js:50714:53)
    at StaticMap.componentDidMount (https://cphjddubmb.tunnel.chromaticqa.com/vendors~main.dbdcd81e776de40558bc.bundle.js:50550:22)
    at commitLifeCycles (https://cphjddubmb.tunnel.chromaticqa.com/vendors~main.dbdcd81e776de40558bc.bundle.js:44986:22)
    at commitAllLifeCycles (https://cphjddubmb.tunnel.chromaticqa.com/vendors~main.dbdcd81e776de40558bc.bundle.js:46351:7)
    at HTMLUnknownElement.callCallback (https://cphjddubmb.tunnel.chromaticqa.com/vendors~main.dbdcd81e776de40558bc.bundle.js:28908:14)
    at invokeEventListeners (/home/ubuntu/dev/tmp/chromatic-mapbox/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:193:27)
    at HTMLUnknownElementImpl._dispatch (/home/ubuntu/dev/tmp/chromatic-mapbox/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:119:9)
    at HTMLUnknownElementImpl.dispatchEvent (/home/ubuntu/dev/tmp/chromatic-mapbox/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:82:17)

=========================
This may lead to some stories not working right or getting detected by Chromatic
We suggest you fix the errors, but we will continue anyway..

Chromatic Tester: Found 1 story
Chromatic Tester: Started Build 2 (1 component, 1 story, 1 snapshot).

View it online at https://www.chromaticqa.com/build?appId=5c25373725ead30024796930&number=2.
Chromatic Tester: 1/1 snapshot remain to test. (0 changes, 0 errors)
Chromatic Tester: Build 2 passed! View it online at https://www.chromaticqa.com/build?appId=5c25373725ead30024796930&number=2.
Done in 17.78s.

```

### Then, include this additional line to remove the warning:

```js
// Manually defining some functions to make chromatic work (warns if the above is included whilst the following is excluded)
if (!window.URL.revokeObjectURL) {
  Object.defineProperty(window.URL, 'revokeObjectURL', { value: () => {} });
}
```

### Output:

```
> yarn run chromatic

yarn run v1.12.3
$ ./node_modules/.bin/chromatic test --app-code='jxfm5y5n8z'
Chromatic Tester: Detected 'storybook' script, running with inferred options:
    --script-name=storybook --storybook-port=9009
  Override any of the above if they were inferred incorrectly.

Chromatic Tester: Starting storybook
Chromatic Tester: Started storybook at http://localhost:9009/iframe.html
Chromatic Tester: Opening tunnel to Chromatic capture servers
Chromatic Tester: Uploading and verifying build (this may take a few minutes depending on your connection)
Chromatic Tester: Found 1 story
Chromatic Tester: Started Build 3 (1 component, 1 story, 1 snapshot).

View it online at https://www.chromaticqa.com/build?appId=5c25373725ead30024796930&number=3.
Chromatic Tester: 1/1 snapshot remain to test. (0 changes, 0 errors)
Chromatic Tester: Build 3 passed! View it online at https://www.chromaticqa.com/build?appId=5c25373725ead30024796930&number=3.
Done in 21.50s.

```
