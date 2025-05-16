// import React, { useState } from 'react';
import './TikTokEmbed.css';

const TikTokEmbed = ({ videoId, thumbnail }) => {
    // const [hovered, setHovered] = useState(false);

    return (
        <div
        // className="tiktok-embed-wrapper"
        // onMouseEnter={() => setHovered(true)}
        // onMouseLeave={() => setHovered(false)}
        >
            {/* {hovered ? (
                <iframe
                    src={`https://www.tiktok.com/embed/${videoId}`}
                    width="325"
                    height="575"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            ) : (
                <img src={thumbnail} alt="TikTok thumbnail" className="tiktok-thumbnail" />
            )} */}
        </div>
    );
};

export default TikTokEmbed;
