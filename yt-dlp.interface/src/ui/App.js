import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import './Main-Window/mainWindow.css';
import { useEffect, useState } from 'react';
import getData from './Main-Window/getData/getData.js';
import SearchBar from './Main-Window/searchBar/SearchBar.js';
import VideoTemplate from './Main-Window/VideoTemplate/VideoTemplate.js';
function App() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await getData();
            setVideos(data); // assuming API response has `items`
        }
        fetchData();
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "search-bar-container", children: _jsx(SearchBar, { placeholderText: "search for a video..." }) }), _jsx("div", { className: "results-div", children: videos.map(video => (_jsx(VideoTemplate, { title: video.snippet.title, thumbnail: video.snippet.thumbnails?.high?.url ?? "", channelName: video.snippet.channelTitle, views: video.statistics.viewCount, timePassed: new Date(video.snippet.publishedAt).toLocaleDateString(), channelPic: "https://via.placeholder.com/48" }))) })] }));
}
export default App;
//# sourceMappingURL=App.js.map