import React, { useEffect, useState } from 'react';
import './Popup.css';

export default function Popup() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 1000); // hiển thị sau 1 giây
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-btn" onClick={() => setShow(false)}>×</button>
                <h2>🎉 Ưu đãi đặc biệt!</h2>
                <p>Đăng ký ngay để nhận học thử miễn phí và giảm giá 20% cho khóa đầu tiên.</p>
                <button className="popup-cta">Đăng ký ngay</button>
            </div>
        </div>
    );
}
