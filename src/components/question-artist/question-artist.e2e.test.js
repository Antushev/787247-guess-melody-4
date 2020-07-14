import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {questionArtist} from '../../utils/questions-test.js';

import QuestionArtist from './question-artist.jsx';

configure({adapter: new Adapter()});

describe(`QuestionArtistComponent`, () => {
  it(`Change input value`, () => {
    const onAnswer = jest.fn();
    const userAnswer = {
      artist: `Паша`,
      picture: `https://focus.ua/storage/pub/images/2017/2615387.jpg`
    };

    const screen = shallow(
        <QuestionArtist
          question={questionArtist}
          onAnswer={onAnswer}
        />
    );

    const answerInputs = screen.find(`input`);
    const answerOne = answerInputs.at(0);

    answerOne.simulate(`change`, {preventDefault() {}});

    expect(onAnswer).toHaveBeenCalledTimes(1);

    expect(onAnswer.mock.calls[0][0]).toMatchObject(questionArtist);
    expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
  });
});
