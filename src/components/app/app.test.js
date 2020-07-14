import React from 'react';
import renderer from 'react-test-renderer';

import {questions} from '../../utils/questions-test.js';

import App from './app.jsx';

const errorCount = 3;

describe(`AppComponent`, () => {
  it(`Snapshot AppComponent`, () => {
    const tree = renderer.create(<App
      questions={questions}
      errorCount={errorCount}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
