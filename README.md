# Reproduce chromatic bug

`yarn run chromatic`

## Error output:

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
