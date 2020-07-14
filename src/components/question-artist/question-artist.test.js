import React from 'React';
import renderer from 'react-test-renderer';

import {questionArtist} from '../../utils/questions-test.js';

import QuestionArtist from './question-artist.jsx';

describe(`QuestionArtist`, () => {
  it(`QuestionArtistSnapshot`, () => {
    const tree = renderer.create(<QuestionArtist
      question={questionArtist}
      onAnswer={() => {}}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


