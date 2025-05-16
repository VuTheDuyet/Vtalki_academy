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

const NewsSection = () => {
    const { t } = useTranslation();

    return (
        <section className="news-section">
            <div className="news-list">
                {newsSlugs.map((slug) => (
                    <Link className="news-link" to={`/news/${slug}`} key={slug}>
                        <div className="news-item">
                            <img
                                src="/assets/map.png"
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