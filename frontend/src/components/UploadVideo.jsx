import  { useState } from 'react';
import axios from 'axios';
import '../styles/UploadVideo.css';

function UploadVideo({ onVideoSourceUpdate }) {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('video', file);

    try {
      const response = await axios.post('http://localhost:5000/api/streams/upload', formData);
      onVideoSourceUpdate(`http://localhost:5000/${response.data.filePath}`);
      setResponseMessage('File uploaded successfully.');
    } catch (error) {
      setResponseMessage('Error uploading file.');
    }
  };

  const submitUrl = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/streams/stream-url', { url });
      onVideoSourceUpdate(url);
      setResponseMessage('URL submitted successfully.');
    } catch (error) {
      setResponseMessage('Error submitting URL.');
    }
  };

  return (
    <div className="upload-video">
      <h2>Upload Video</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload File</button>

      <h2>Submit Video URL</h2>
      <input type="text" placeholder="Enter video URL" value={url} onChange={handleUrlChange} />
      <button onClick={submitUrl}>Submit URL</button>

      <p>{responseMessage}</p>
    </div>
  );
}

export default UploadVideo;
