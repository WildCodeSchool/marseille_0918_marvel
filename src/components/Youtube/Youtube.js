import React from 'react';
import YouTube from 'react-youtube';
import './Youtube.scss'

class Video extends React.Component {
    render() {
        const opts = {
            height: '250px',
            width: '100%',
            playerVars: { autoplay: 1 }
        };

        return (
            <div className ="youtube">
                <YouTube
                    videoId="WDkg3h8PCVU"
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.stopVideo();
    }
}

export default Video;