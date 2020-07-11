import React, {PureComponent} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {GameType} from '../../const.js';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import QuestionArtist from '../question-artist/question-artist.jsx';
import QuestionGenre from '../question-genre/question-genre.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1
    };
  }

  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this._renderGameScreen()}
          </Route>
          <Route exact path='/artist'>
            <QuestionArtist
              question={questions[0]}
              onAnswer={() => {}}/>
          </Route>
          <Route exact path='/genre'>
            <QuestionGenre
              question={questions[1]}
              onAnswer={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderGameScreen() {
    const {questions, errorCount} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return <WelcomeScreen
        errorCount={errorCount}
        onWelcomeButtonClick={() => {
          this.setState({
            step: 0
          });
        }}
      />;
    }

    if (question) {
      const question = questions[step];

      switch (question.type) {
        case GameType.ARTIST:
          return (
            <QuestionArtist
              question={question}
              onAnswer={() => {
                this.setState((prevState) => ({
                  step: prevState.step + 1
                }));
              }}
            />
          );
        case GameType.GENRE:
          return (
            <QuestionGenre
              question={question}
              onAnswer={() => {
                this.setState((prevState) => ({
                  step: prevState.step + 1
                }));
              }}
            />
          );
      }
    }

    return null;
  }
}

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
