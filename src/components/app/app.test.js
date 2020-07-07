import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const errorCount = 3;

describe(`AppComponent`, () => {
  it(`Snapshot AppComponent`, () => {
    const tree = renderer.create(<App errorCount={errorCount} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
