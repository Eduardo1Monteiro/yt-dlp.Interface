import './Main-Window/mainWindow.css';
import { useEffect, useState } from 'react';
import getData from './Main-Window/getData/getData.js';
import SearchBar from './Main-Window/searchBar/SearchBar.js';
import VideoTemplate from './Main-Window/VideoTemplate/VideoTemplate.js';

function App() {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setVideos(data); // assuming API response has `items`
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="search-bar-container">
        <SearchBar placeholderText="search for a video..." />
      </div>
      <div className="results-div">
        {videos.map(video => (
          <VideoTemplate
            title={video.snippet.title}
            thumbnail={video.snippet.thumbnails?.high?.url ?? ""}
            channelName={video.snippet.channelTitle}
            views={video.statistics.viewCount}
            timePassed={new Date(video.snippet.publishedAt).toLocaleDateString()}
            channelPic={"https://via.placeholder.com/48"} // temp fallback
          />
        ))}
      </div>
    </>
  )
}

export default App
