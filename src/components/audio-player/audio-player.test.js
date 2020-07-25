import React, {PureComponent} from 'react';
import renderer from 'react-test-renderer';

import {questionGenre} from '../../mocks-test/questions-test.js';

import AudioPlayer from './audio-player.jsx';

describe(`AudioPlayerComponent`, () => {
  it(`AudioPlayerComponentSnapshot`, () => {
    const tree = renderer
      .create(
          <AudioPlayer
            src={questionGenre.answers[0].src}
            isPlaying={true}
            hanldeButtonPlayerClick={() => {}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

