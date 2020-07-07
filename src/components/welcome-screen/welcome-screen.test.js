import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

const errorCount = 3;

describe(`WelcomeScreenComponent`, () => {
  it(`Snapshot WelcomeScreenComponent`, () => {
    const tree = renderer.create(<WelcomeScreen errorCount={errorCount} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
