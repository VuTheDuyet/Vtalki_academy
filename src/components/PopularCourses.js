import React from 'react';
import './PopularCourses.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const PopularCourses = () => {
    const { t } = useTranslation();
    const navigate = useNavigate(); // Initialize useNavigate

    const courses = [
        // {
        //     img: '/assets/courses/vietnamese_korean.jpg',
        //     alt: t('coursess.vietnamese_korean_alt'),
        //     title: t('coursess.vietnamese_korean_title'),
        //     desc: t('coursess.vietnamese_korean_desc'),
        //     url: 'self-study/vietnamese',
        // },
        {
            img: '/assets/courses/vietnamese_foreigner.jpg',
            alt: t('coursess.vietnamese_foreigner_alt'),
            title: t('coursess.vietnamese_foreigner_title'),
            desc: t('coursess.vietnamese_foreigner_desc'),
            url: 'self-study/vietnamese',
        },
        {
            img: '/assets/courses/korean_vietnamese.jpg',
            alt: t('coursess.korean_vietnamese_alt'),
            title: t('coursess.korean_vietnamese_title'),
            desc: t('coursess.korean_vietnamese_desc'),
            url: 'self-study/korean',
        },
    ];

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
                {courses.map((course, index) => (
                    <div className="course-card" key={index}>
                        <img src={course.img} alt={course.alt} />
                        <h3>{course.title}</h3>
                        <p>{course.desc}</p>
                        <button onClick={() => navigate(`/${course.url}`)}>
                            {t('coursess.view_button')}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularCourses;