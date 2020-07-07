import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const errorCount = 4;

describe(`WelcomeScreenComponentE2E`, () => {
  it(`Click button start game`, () => {
    const onWelcomeButtonClick = jest.fn();

    const welcomeScreen = shallow(
        <WelcomeScreen
          onWelcomeButtonClick={onWelcomeButtonClick}
          errorCount={errorCount}
        />
    );

    const buttonStartGame = welcomeScreen.find(`.welcome__button`);

    buttonStartGame.simulate(`click`);

    expect(onWelcomeButtonClick).toHaveBeenCalledTimes(1);
  });
});
