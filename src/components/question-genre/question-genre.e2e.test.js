import React from 'react';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {questionGenre} from '../../mocks-test/questions-test.js';

import QuestionGenre from './question-genre';

configure({adapter: new Adapter()});

describe(`QuestionGenreComponent`, () => {
  it(`When user answers genre question form is not sent`, () => {
    const onAnswer = jest.fn();
    const genreQuestion = shallow(<QuestionGenre
      question={questionGenre}
      onAnswer={onAnswer}
      renderAudioPlayer={() => {}}
    />);

    const form = genreQuestion.find(`form`);
    const formSendPrevention = jest.fn();
    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });

  it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
    const onAnswer = jest.fn((...args) => [...args]);
    const userAnswer = [true, false, false, false];

    const genreQuestion = mount(<QuestionGenre
      question={questionGenre}
      onAnswer={() => onAnswer(questionGenre, userAnswer)}
      renderAudioPlayer={() => {}}
    />);

    const form = genreQuestion.find(`form`);
    const input = genreQuestion.find(`input`).at(1);

    input.simulate(`change`, {target: {checked: true}});
    form.simulate(`submit`, {preventDefault() {}});

    expect(onAnswer).toHaveBeenCalledTimes(1);

    expect(onAnswer.mock.calls[0][0]).toMatchObject(questionGenre);
    expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
  });
});
