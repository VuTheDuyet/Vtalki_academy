import React, { useState } from 'react';
import './VideoHover.css';

const VideoHover = ({ thumbnail, videoUrl }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="video-hover-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? (
                <iframe
                    className="video-iframe"
                    src={`${videoUrl}?autoplay=1&mute=1`}
                    title="YouTube video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            ) : (
                <img src={thumbnail} alt="Video thumbnail" className="video-thumbnail" />
            )}
        </div>
    );
};

export default VideoHover;
