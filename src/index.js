import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const ERROR_COUNT = 10;

const init = () => {
  const settings = {
    errorCount: ERROR_COUNT,
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
      />,
      document.querySelector(`#root`)
  );
};

init();
