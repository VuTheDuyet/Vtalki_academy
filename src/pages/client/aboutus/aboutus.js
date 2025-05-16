import React from 'react';
import './AboutUs.css'; // File CSS riêng
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet'; // Sử dụng react-helmet cho SEO

function AboutUs() {
    const { t } = useTranslation();
    // const currentLang = i18n.language; // Lấy ngôn ngữ hiện tại

    // Dữ liệu JSON-LD cho SEO
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "VTalki - Vietnamese Language Academy",
        "description": t('aboutUs.introduction.description'),
        "url": "https://vtalki.com/about",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "79 Lê Văn Thiêm, P. Tân Phong",
            "addressLocality": "Quận 7",
            "addressRegion": "TP. Hồ Chí Minh",
            "addressCountry": "VN"
        },
        "telephone": "+84903806203",
        "email": "vtalki79@gmail.com"
    };

    return (
        <div className="about-container">
            {/* Thêm meta tags với react-helmet */}
            <Helmet>
                <title>{t('aboutUs.seo.title')}</title>
                <meta name="description" content={t('aboutUs.seo.description')} />
                <meta name="keywords" content={t('aboutUs.seo.keywords')} />
                <meta property="og:title" content={t('aboutUs.seo.ogTitle')} />
                <meta property="og:description" content={t('aboutUs.seo.ogDescription')} />
                <meta property="og:url" content="https://vtalki.com/about" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://vtalki.com/assets/vtalki-logo.jpg" /> {/* Thay bằng URL hình ảnh thực tế */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>

            <h1 className="about-title">{t('aboutUs.title')}</h1>
            {/* Hình ảnh tiêu đề */}
            <div className="header-image">
                <img src="../assets/slide3.png" alt={t('englishCourse.title')} className="course-header-img" />
            </div>


            {/* Giới thiệu */}
            <section className="about-section" itemProp="about" itemScope itemType="https://schema.org/AboutPage">
                <h2 className="section-title">{t('aboutUs.introduction.title')}</h2>
                <p itemProp="description">{t('aboutUs.introduction.description')}</p>
            </section>

            {/* Đội ngũ giảng viên */}
            <section className="about-section" itemProp="employee" itemScope itemType="https://schema.org/Organization">
                <h2 className="section-title">{t('aboutUs.ourTeam.title')}</h2>
                <ul className="section-list">
                    <li itemProp="member">{t('aboutUs.ourTeam.item1')}</li>
                    <li itemProp="member">{t('aboutUs.ourTeam.item2')}</li>
                    <li itemProp="member">{t('aboutUs.ourTeam.item3')}</li>
                </ul>
            </section>

            {/* Chương trình học */}
            <section className="about-section" itemProp="educationalProgram" itemScope itemType="https://schema.org/EducationalOccupationalProgram">
                <h2 className="section-title">{t('aboutUs.programs.title')}</h2>
                <p itemProp="description">{t('aboutUs.programs.description')}</p>
            </section>
            {/* Hình ảnh tiêu đề */}
            <div className="header-image">
                <img src="../assets/slide3.png" alt={t('englishCourse.title')} className="course-header-img" />
            </div>

            {/* Học viên quốc tế */}
            <section className="about-section" itemProp="audience" itemScope itemType="https://schema.org/Audience">
                <h2 className="section-title">{t('aboutUs.internationalStudents.title')}</h2>
                <ul className="section-list">
                    <li itemProp="audienceType">{t('aboutUs.internationalStudents.item1')}</li>
                    <li itemProp="audienceType">{t('aboutUs.internationalStudents.item2')}</li>
                    <li itemProp="audienceType">{t('aboutUs.internationalStudents.item3')}</li>
                </ul>
            </section>

            {/* Thông tin liên hệ */}
            <section className="about-section" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                <h2 className="section-title">{t('aboutUs.contact.title')}</h2>
                <ul className="section-list">
                    <li itemProp="name">{t('aboutUs.contact.centerName')}</li>
                    <li itemProp="address">{t('aboutUs.contact.address')}</li>
                    <li itemProp="telephone">{t('aboutUs.contact.hotline')}</li>
                    <li itemProp="email">{t('aboutUs.contact.email')}</li>
                    <li itemProp="url">{t('aboutUs.contact.website')}</li>
                </ul>
            </section>
            {/* Mạng xã hội */}
            <div className="footer-section about-section">
                <h2 className="section-title">{t('footer.socialSection.title')}</h2>
                <div className="social-icons">
                    {/* Facebook */}
                    <div className="icon facebook">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.facebook')}>
                            <img src="/assets/facebook.png" alt={t('footer.socialSection.facebook')} className="social-image" />
                        </a>
                        <span className="tooltip">{t('footer.socialSection.facebook')}</span>
                    </div>
                    {/* YouTube */}
                    <div className="icon youtube">
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.youtube')}>
                            <img src="/assets/youtube.png" alt={t('footer.socialSection.youtube')} className="social-image" />
                        </a>
                        <span className="tooltip">{t('footer.socialSection.youtube')}</span>
                    </div>
                    {/* TikTok */}
                    <div className="icon tiktok">
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.tiktok')}>
                            <img src="/assets/tiktok.png" alt={t('footer.socialSection.tiktok')} className="social-image" />
                        </a>
                        <span className="tooltip">{t('footer.socialSection.tiktok')}</span>
                    </div>
                    {/* Twitter */}
                    <div className="icon twitter">
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.twitter')}>
                            <img src="/assets/twitter.png" alt={t('footer.socialSection.twitter')} className="social-image" />
                        </a>
                        <span className="tooltip">{t('footer.socialSection.twitter')}</span>
                    </div>
                    {/* WhatsApp */}
                    <div className="icon whatsapp">
                        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.whatsapp')}>
                            <img src="/assets/whatsapp.png" alt={t('footer.socialSection.whatsapp')} className="social-image" />
                        </a>
                        <span className="tooltip">{t('footer.socialSection.whatsapp')}</span>
                    </div>
                    {/* Zalo */}
                    <div className="icon zalo">
                        <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.zalo')}>
                            <img src="/assets/zalo.png" alt={t('footer.socialSection.zalo')} className="social-image" />
                        </a>
                        <span className="tooltip">{t('footer.socialSection.zalo')}</span>
                    </div>
                    {/* KakaoTalk */}
                    <div className="icon talk">
                        <a href="https://www.kakaotalk.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.kakaotalk')}>
                            <img src="/assets/kakaotalk.png" alt={t('footer.socialSection.kakaotalk')} className="social-image" />
                        </a>
                        <span className="tooltip">{t('footer.socialSection.kakaotalk')}</span>
                    </div>
                    {/* Messenger */}
                    <div className="icon messenger">
                        <a href="https://www.messenger.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.messenger')}>
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

export default AboutUs;