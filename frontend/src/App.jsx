import  { useState } from 'react';
import UploadVideo from './components/UploadVideo';
import VideoPlayer from './components/VideoPlayer';
import './styles/App.css';

function App() {
  const [videoSource, setVideoSource] = useState('');

  const handleVideoSourceUpdate = (source) => {
    setVideoSource(source);
  };

  return (
    <div className="App">
      <h1>Live Video Streaming</h1>
      <UploadVideo onVideoSourceUpdate={handleVideoSourceUpdate} />
      <VideoPlayer source={videoSource} />
    </div>
  );
}

export default App;
