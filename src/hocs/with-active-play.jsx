import React, {PureComponent} from 'react';
import AudioPlayer from '../components/audio-player/audio-player.jsx';

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: -1
      };
    }

    render() {
      const {activePlayerId} = this.state;

      return <Component
        {...this.props}
        renderAudioPlayer={(src, id) => {
          return (
            <AudioPlayer
              src={src}
              isPlaying={id === activePlayerId}
              handleButtonPlayerClick={() => {
                this.setState({
                  activePlayerId: activePlayerId === id ? -1 : id
                });
              }}
            />
          );
        }}
      />;
    }
  }

  WithActivePlayer.propsType = {};

  return WithActivePlayer;
};

export {withActivePlayer};
