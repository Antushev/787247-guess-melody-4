import React from 'react';
import renderer from 'react-test-renderer';

import {questionArtist} from '../../mocks-test/questions-test.js';

import QuestionArtist from './question-artist.jsx';

describe(`QuestionArtist`, () => {
  it(`QuestionArtistSnapshot`, () => {
    const tree = renderer.create(<QuestionArtist
      question={questionArtist}
      onAnswer={() => {}}
      renderAudioPlayer={() => {}}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


