import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import QuestionArtist from './question-artist.jsx';

configure({adapter: new Adapter()});

const question = {
  type: `artist`,
  answers: [
    {
      artist: `Паша`,
      picture: `https://focus.ua/storage/pub/images/2017/2615387.jpg`
    },
    {
      artist: `Лена`,
      picture: `https://focus.ua/storage/pub/images/2017/2615387.jpg`
    },
    {
      artist: `Жора`,
      picture: `https://focus.ua/storage/pub/images/2017/2615387.jpg`
    },
  ],
  song: {
    artist: `Лена`,
    src: `https://music.yandex.ru/album/10798364/track/66306611`
  }
};

describe(`QuestionArtistComponent`, () => {
  it(`Change input value`, () => {
    const onAnswer = jest.fn();
    const userAnswer = {
      artist: `Паша`,
      picture: `https://focus.ua/storage/pub/images/2017/2615387.jpg`
    };

    const screen = shallow(
        <QuestionArtist
          question={question}
          onAnswer={onAnswer}
        />
    );

    const answerInputs = screen.find(`input`);
    const answerOne = answerInputs.at(0);

    answerOne.simulate(`change`, {preventDefault() {}});

    expect(onAnswer).toHaveBeenCalledTimes(1);

    expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
    expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
  });
});
