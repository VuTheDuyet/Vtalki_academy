import React from 'react';
import './NewsSection.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const newsSlugs = [
    'han-quoc-tang-nhu-cau-lao-dong',
    'nguoi-nuoc-ngoai-hoc-tieng-viet-tphcm',
    'nguoi-han-hoc-tieng-viet-kinh-doanh',
    'vtalki-ra-mat-app-hoc-tieng-han-viet',
];
const images = [
    '/assets/new/n1.webp',
    '/assets/new/n2.jpg',
    '/assets/new/n3.webp',
    '/assets/new/n4.webp',
];

const NewsSection = () => {
    const { t } = useTranslation();

    return (
        <section className="news-section">
            <div className="news-list">
                {newsSlugs.map((slug, index) => (
                    <Link className="news-link" to={`/news/${slug}`} key={slug}>
                        <div className="news-item">
                            <img
                                src={images[index]} // Use corresponding image from images array
                                alt={t(`news.${slug}.title`)}
                                className="news-image"
                                loading="lazy"
                            />
                            <h3 className="news-item-title">{t(`news.${slug}.title`)}</h3>
                            <p className="news-description">{t(`news.${slug}.description`)}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default NewsSection;