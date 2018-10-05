import React from 'react';
import YouTube from 'react-youtube';

class Video extends React.Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { autoplay: 1 }
        };

        return (
            <div>
                <YouTube
                    videoId="Yy25p3gTMZw"
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