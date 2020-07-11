import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import QuestionGenre from './question-genre';

configure({adapter: new Adapter()});

const question = {
  type: `genre`,
  genre: `rep`,
  answers: [
    {
      genre: `rep`,
      src: `https://music.yandex.ru/album/10798364/track/66306611`
    },
    {
      genre: `rock`,
      src: `https://music.yandex.ru/album/10798364/track/66306611`
    },
    {
      genre: `hip-hop`,
      src: `https://music.yandex.ru/album/10798364/track/66306611`
    },
    {
      genre: `pop`,
      src: `https://music.yandex.ru/album/10798364/track/66306611`
    }
  ]
};

describe(`QuestionGenreComponent`, () => {
  it(`When user answers genre question form is not sent`, () => {
    const onAnswer = jest.fn();
    const genreQuestion = shallow(<QuestionGenre
      question={question}
      onAnswer={onAnswer}
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
    const userAnswer = [false, false, false, true];

    const genreQuestion = shallow(<QuestionGenre
      onAnswer={onAnswer}
      question={question}
    />);

    const form = genreQuestion.find(`form`);
    const inputTwo = genreQuestion.find(`input`).at(3);

    inputTwo.simulate(`change`, {target: {checked: true}});
    form.simulate(`submit`, {
      preventDefault() {
      }
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);

    expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
    expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);

    expect(
        genreQuestion.find(`input`).map((it) => it.prop(`checked`))
    ).toEqual(userAnswer);
  });
});
