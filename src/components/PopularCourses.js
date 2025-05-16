import React from 'react';
import './PopularCourses.css';
import { useTranslation } from 'react-i18next';

const PopularCourses = () => {
    const { t } = useTranslation();

    return (
        <section className="courses-section">
            <p className="section-description">
                {t('coursess.description')}
                <strong>{t('coursess.languages')}</strong>,
                {t('coursess.specialized_desc')}
                <strong>{t('coursess.specialized')}</strong>.
                {t('coursess.suitable')}
            </p>

            <div className="courses-grid">
                <div className="course-card">
                    <img src="/assets/courses/online.jpg" alt={t('coursess.online_alt')} />
                    <h3>{t('coursess.online_title')}</h3>
                    <p>{t('coursess.online_desc')}</p>
                    <button>{t('coursess.view_button')}</button>
                </div>
                <div className="course-card">
                    <img src="/assets/courses/offline.jpg" alt={t('coursess.offline_alt')} />
                    <h3>{t('coursess.offline_title')}</h3>
                    <p>{t('coursess.offline_desc')}</p>
                    <button>{t('coursess.view_button')}</button>
                </div>
                <div className="course-card">
                    <img src="/assets/courses/gruop.png" alt={t('coursess.group_alt')} />
                    <h3>{t('coursess.group_title')}</h3>
                    <p>{t('coursess.group_desc')}</p>
                    <button>{t('coursess.view_button')}</button>
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;