import React from 'react';
import renderer from 'react-test-renderer';
import QuestionGenre from './question-genre'

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


describe(`QuestionArtistComponent`, () => {
  it(`QuestionArtistSnapshot`, () => {
    const tree = renderer.create(<QuestionGenre
      question={question}
      onAnswer={() => {}}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
