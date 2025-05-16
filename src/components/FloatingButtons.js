import React from 'react';
import './FloatingButtons.css';

export default function FloatingButtons() {
    return (
        <div className="floating-buttons">
            <a href="https://www.facebook.com/messages/t/599658926564607" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icons/messenger-icon.png" alt="Messenger" />
            </a>
            <a href="https://zalo.me/0903806203" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icons/zalo-icon.png" alt="Zalo" />
            </a>
            <a href="tel:+84903806203">
                <img src="/assets/icons/phone-icon.png" alt="Phone" className="hotline-icon" /> {/* Thêm class cho hotline */}
            </a>
            <a href="https://open.kakao.com/o/sNmcJDfg" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icons/kakaokalk-icon.png" alt="KakaoTalk" />
            </a>
            <a
                href="https://www.google.com/maps/place/VTALKI+-+Vietmamese+language+academy+%EB%B2%A0%ED%8A%B8%EB%82%A8%EC%96%B4+%ED%95%99%EC%9B%90/@10.7309118,106.7045527,17z/data=!4m15!1m8!3m7!1s0x31752f913d3375ed:0xfd3db91f890681c5!2zNzkgTMOqIFbEg24gVGhpw6ptLCBUw6JuIFBob25gLCBRdeG6rW4gNywgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!3b1!8m2!3d10.7309118!4d106.7071276!16s%2Fg%2F11gyy1q4rm!3m5!1s0x317525a9fd595dc3:0x9bf5b61317230ae6!8m2!3d10.7308836!4d106.7071465!16s%2Fg%2F11n8k6thx6?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="/assets/icons/googlemaps-icon.png" alt="Google Maps" />
            </a>
        </div>
    );
}