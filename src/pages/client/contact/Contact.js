import React from 'react';
import './Contact.css'; // File CSS riêng
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Contact() {
    const { t } = useTranslation();

    // Dữ liệu JSON-LD cho SEO
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "VTalki - Vietnamese Language Academy",
        "description": t('contacts.description'),
        "url": "https://vtalki.com/contact",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+84903806203",
            "contactType": "Customer Service",
            "email": "vtalki79@gmail.com",
            "areaServed": "VN"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "79 Lê Văn Thiêm, P. Tân Phong",
            "addressLocality": "Quận 7",
            "addressRegion": "TP. Hồ Chí Minh",
            "addressCountry": "VN"
        }
    };

    // Cấu hình Google Maps
    const mapContainerStyle = {
        width: '100%',
        height: '400px',
    };
    const center = {
        lat: 10.730946, // Tọa độ ví dụ cho 79 Lê Văn Thiêm, Quận 7 (cần điều chỉnh chính xác)
        lng: 106.707159,
    };
    const position = {
        lat: 10.730946,
        lng: 106.707159,
    };

    return (
        <div className="contact-container">
            {/* Thêm meta tags với react-helmet */}
            <Helmet>
                <title>{t('contacts.seo.title')}</title>
                <meta name="description" content={t('contacts.seo.description')} />
                <meta name="keywords" content={t('contacts.seo.keywords')} />
                <meta property="og:title" content={t('contacts.seo.ogTitle')} />
                <meta property="og:description" content={t('contacts.seo.ogDescription')} />
                <meta property="og:url" content="https://vtalki.com/contact" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://vtalki.com/assets/vtalki-contacts.jpg" /> {/* Thay bằng URL hình ảnh thực tế */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            {/* Hình ảnh tiêu đề */}
            <div className="header-image">
                <img src="../assets/acdemy.png" alt={t('englishCourse.title')} className="course-header-img" />
            </div>
            <h1 className="contact-title">{t('contacts.title')}</h1>

            {/* Thông tin liên hệ */}
            <section className="contact-info" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                <h2 className="section-title">{t('contacts.info.title')}</h2>
                <ul className="contact-list">
                    <li itemProp="name">{t('contacts.info.centerName')}</li>
                    <li itemProp="address">{t('contacts.info.address')}</li>
                    <li itemProp="telephone">
                        <a href="tel:+84903806203">{t('contacts.info.hotline')}</a></li>
                    <li itemProp="email">
                        <a href="mailto:vtalki79@gmail.com" >{t('contacts.info.email')}</a></li>
                    <li itemProp="url">{t('contacts.info.website')}</li>
                </ul>
            </section>

            {/* Google Maps */}
            <section className="map-section">
                <h2 className="section-title">{t('contacts.map.title')}</h2>
                <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE'}>
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={15}
                    >
                        <Marker position={position} />
                    </GoogleMap>
                </LoadScript>
            </section>

            {/* Mạng xã hội */}
            <div className="footer-section">
                <h4>{t('footer.socialSection.title')}</h4>
                <div className="social-icons">
                    {/* Facebook */}
                    <div className="icon facebook">
                        <a href="https://www.facebook.com/profile.php?id=61574526651721" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.facebook')}>
                            <img src="/assets/facebook.png" alt={t('footer.socialSection.facebook')} className="social-image" />
                        </a>
                        <span className="tooltip">{t('footer.socialSection.facebook')}</span>
                    </div>
                    {/* YouTube */}
                    {/* <div className="icon youtube">
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.youtube')}>
                            <img src="/assets/youtube.png" alt={t('footer.socialSection.youtube')} className="social-image" />
                        </a>
                        <span className="tooltip">{t('footer.socialSection.youtube')}</span>
                    </div> */}
                    {/* TikTok
                    <div className="icon tiktok">
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.tiktok')}>
                            <img src="/assets/tiktok.png" alt={t('footer.socialSection.tiktok')} className="social-image" />
                        </a>
                        <span className="tooltip">{t('footer.socialSection.tiktok')}</span>
                    </div> */}
                    {/* Twitter */}
                    {/* <div className="icon twitter">
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.twitter')}>
                            <img src="/assets/twitter.png" alt={t('footer.socialSection.twitter')} className="social-image" />
                        </a>
                        <span className="tooltip">{t('footer.socialSection.twitter')}</span>
                    </div> */}
                    {/* WhatsApp */}
                    {/* <div className="icon whatsapp">
                        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.whatsapp')}>
                            <img src="/assets/whatsapp.png" alt={t('footer.socialSection.whatsapp')} className="social-image" />
                        </a>
                        <span className="tooltip">{t('footer.socialSection.whatsapp')}</span>
                    </div> */}
                    {/* Zalo */}
                    <div className="icon zalo">
                        <a href="https://zalo.me/0903806203" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.zalo')}>
                            <img src="/assets/zalo.png" alt={t('footer.socialSection.zalo')} className="social-image" />
                        </a>
                        <span className="tooltip">{t('footer.socialSection.zalo')}</span>
                    </div>
                    {/* KakaoTalk */}
                    <div className="icon talk">
                        <a href="https://open.kakao.com/o/sNmcJDfg" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.kakaotalk')}>
                            <img src="/assets/kakaotalk.png" alt={t('footer.socialSection.kakaotalk')} className="social-image" />
                        </a>
                        <span className="tooltip">{t('footer.socialSection.kakaotalk')}</span>
                    </div>
                    {/* Messenger */}
                    <div className="icon messenger">
                        <a href="https://www.facebook.com/messages/t/599658926564607" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.messenger')}>
                            <img src="/assets/messenger.png" alt={t('footer.socialSection.messenger')} className="social-image" />
                        </a>
                        <span className="tooltip">{t('footer.socialSection.messenger')}</span>
                    </div>
                    {/* Điện thoại */}
                    <div className="icon phone">
                        <a href="tel:+84903806203" aria-label={t('footer.socialSection.phone')}>
                            <img src="/assets/phone.png" alt={t('footer.socialSection.phone')} className="social-image" />
                        </a>
                        <span className="tooltip">{t('footer.socialSection.phone')}</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;