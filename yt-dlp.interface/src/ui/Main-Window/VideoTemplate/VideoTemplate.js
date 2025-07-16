import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './VideoTemplate.css';
function VideoTemplate(props) {
    return (_jsxs("div", { className: "video-container", children: [_jsx("div", { className: "thumbnail-container", children: _jsx("img", { src: props.thumbnail }) }), _jsxs("div", { className: "meta-info-container", children: [_jsx("div", { className: "channel-pic", children: _jsx("img", { src: props.channelPic }) }), _jsxs("div", { className: "text-info-container", children: [_jsx("p", { className: "title", children: props.title }), _jsx("p", { className: "channel-name", children: props.channelName }), _jsxs("p", { className: "video-stats", children: [props.views, " | ", props.timePassed] })] })] })] }));
}
export default VideoTemplate;
//# sourceMappingURL=VideoTemplate.js.map