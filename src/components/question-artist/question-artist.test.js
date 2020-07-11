import React from 'React';
import renderer from 'react-test-renderer';
import QuestionArtist from './question-artist.jsx';

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


describe(`QuestionArtist`, () => {
  it(`QuestionArtistSnapshot`, () => {
    const tree = renderer.create(<QuestionArtist
      question={question}
      onAnswer={() => {}}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


