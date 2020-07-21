import React from 'react';
import renderer from 'react-test-renderer';

import {questionGenre} from '../../mocks-test/questions-test.js';

import QuestionGenre from './question-genre';

describe(`QuestionArtistComponent`, () => {
  it(`QuestionArtistSnapshot`, () => {
    const tree = renderer.create(<QuestionGenre
      question={questionGenre}
      onAnswer={() => {}}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
