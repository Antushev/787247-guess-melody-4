import React from 'react';
import ReactDOM from 'react-dom';

import {questions} from './mocks/questions.js';
import {gameSettings} from './mocks/game-settings.js';

import App from './components/app/app.jsx';

const init = () => {
  const {errorCount} = gameSettings;

  ReactDOM.render(
      <App
        errorCount={errorCount}
        questions={questions}
      />,
      document.querySelector(`#root`)
  );
};

init();
