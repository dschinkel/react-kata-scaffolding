import React from 'react';
import 'chai/register-expect';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
Enzyme.configure({ disableLifecycleMethods: true });

const dom = require('jsdom'),
  { JSDOM } = dom

global.window = new JSDOM(`<!doctype html><html><body></body></html>`).window
global.document = global.window.document;

export { React, shallow };

