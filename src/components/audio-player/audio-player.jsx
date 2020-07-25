import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = React.createRef();

    this.state = {
      isPlaying: this.props.isPlaying,
      isLoading: false,
      progress: 0
    };
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this._audioRef.current;

    audio.src = src;

    audio.oncanplaythrough = () => {
      this.setState({
        isLoading: false
      });
    };

    audio.onplay = () => {
      this.setState({
        isPlaying: true
      });
    };

    audio.onpause = () => {
      this.setState({
        isPlaying: false
      });
    };

    // audio.ontimeupdate = () => this.setState({
    //   progress: audio.currentTime
    // });
  }

  render() {
    const {handleButtonPlayerClick} = this.props;
    const {isPlaying, isLoading} = this.state;

    return (
      <React.Fragment>
        <button
          className={`track__button ${isPlaying ? `track__button--pause` : `track__button--play`}`}
          type="button"
          disabled={isLoading}
          onClick={() => {
            this.setState((prevState) => {
              return {isPlaying: !prevState.isPlaying};
            });
            handleButtonPlayerClick();
          }}
        />
        <div className="track__status">
          <audio ref={this._audioRef}/>
        </div>
      </React.Fragment>
    );
  }

  componentDidUpdate() {
    const {isPlaying} = this.state;
    const audio = this._audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  componentWillUnmount() {
    const audio = this._audioRef.current;

    audio.src = ``;
    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  handleButtonPlayerClick: PropTypes.func.isRequired
};
