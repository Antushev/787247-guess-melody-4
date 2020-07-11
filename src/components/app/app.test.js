import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const errorCount = 3;

const questions = [
  {
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
  },
  {
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
  }
];

describe(`AppComponent`, () => {
  it(`Snapshot AppComponent`, () => {
    const tree = renderer.create(<App
      questions={questions}
      errorCount={errorCount}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
