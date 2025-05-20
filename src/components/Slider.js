import React, { useState, useEffect } from 'react';
import './Slider.css';

const images = [
    '/assets/slide/slide1.png',
    '/assets/slide/slide2.png',
    '/assets/slide/slide3.png',
    '/assets/slide/slide4.png'
];

export default function Slider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="slider">
            <img src={images[current]} alt={`Slide ${current}`} className="slider-image" />
        </div>
    );
}