# react-kata-scaffolding
Basic setup of React for purpose of performing katas.  Includes setup for React, NodeJS: Babel, Mocha, and Jest

# Contents
#### Configured for:
 - **React**
 - **Babel 7**
 - **Mocha**
 - **Jest** (_coming soon_)
 - **eslint** - using airbnb's
   - for a list of latest airbnb plugins that need to be installed, run this: `npm info "eslint-config-airbnb@latest" peerDependencies`
 - **jsdom**

This doesn't create anything else such as webpack because you'll be running everything from your tests.

# Tests

To run from command-line: yarn mocha-test
- `yarn test-mocha`

    ![example of running tests with mocha](https://github.com/dschinkel/nodejs-kata-scaffolding/raw/master/images/console-run-tests.png)

- `yarn test-jest` - _comming soon_

### IntelliJ GUI Test runner Config

#### mocha
For IntelliJ or WebStorm, if running the test GUI runner, set "Mocha Options" to the following: `-r @babel/register -r src/test/test.config.js --recursive src/test -w`

![example of running tests with mocha](https://github.com/dschinkel/nodejs-kata-scaffolding/raw/master/images/intellij-mocha-test-configuration.png)

![example of running tests with mocha](https://github.com/dschinkel/nodejs-kata-scaffolding/raw/master/images/intellij-mocha-test-gui-run.png)

### jest
_coming soon_
