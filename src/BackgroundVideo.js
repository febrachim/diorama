import React from 'react';
import Video from 'react-html5video';
import Poster from './images/video-poster.jpg'; 
import VideoSrc from './videos/dock.mp4';

export default class BackgroundVideo extends React.Component {
  render() {
    return (
      <div className="video-wrapper">
        <div className="dot-wrapper"></div>
        <Video autoPlay loop muted
            poster={Poster}
            onCanPlayThrough={() => {
                // Do stuff 
            }}>
            <source src={VideoSrc} type="video/webm" />
        </Video>
      </div>
      );
  }
}