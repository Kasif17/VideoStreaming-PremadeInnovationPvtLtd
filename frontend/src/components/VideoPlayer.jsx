import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import '../styles/VideoPlayer.css';

function VideoPlayer({ source }) {
  const playerRef = useRef(null);

  const handleFullscreen = () => {
    if (playerRef.current) {
      if (playerRef.current.requestFullscreen) {
        playerRef.current.requestFullscreen();
      } else if (playerRef.current.mozRequestFullScreen) { // Firefox
        playerRef.current.mozRequestFullScreen();
      } else if (playerRef.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
        playerRef.current.webkitRequestFullscreen();
      } else if (playerRef.current.msRequestFullscreen) { // IE/Edge
        playerRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="video-player" ref={playerRef}>
      <ReactPlayer
        url={source}
        controls
        width="100%"
        height="100%"
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload', // Disable download button
            },
          },
        }}
      />
      <button className="fullscreen-btn" onClick={handleFullscreen}>
        Fullscreen
      </button>
    </div>
  );
}

export default VideoPlayer;
