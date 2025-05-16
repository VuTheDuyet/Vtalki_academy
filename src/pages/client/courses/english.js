import React from 'react';
import './English.css'; // File CSS riêng
import { useTranslation } from 'react-i18next';

function EnglishCourse() {
    const { t } = useTranslation();

    const courses = [
        { name: t('englishCourse.courses.beginner'), id: 'beginner' },
        { name: t('englishCourse.courses.communication'), id: 'communication' },
        { name: t('englishCourse.courses.business'), id: 'business' },
        { name: t('englishCourse.courses.toeic'), id: 'toeic' },
    ];

    const learningFormats = [
        t('englishCourse.learningFormats.online1_1'),
        t('englishCourse.learningFormats.offline1_1'),
    ];

    return (
        <div className="courses-container">
            {/* Hình ảnh tiêu đề */}
            <div className="header-image">
                <img src="../assets/slide3.png" alt={t('englishCourse.title')} className="course-header-img" />
            </div>

            <h2>{t('englishCourse.title')}</h2>

            {/* Danh sách các khóa học */}
            <div className="courses-list">
                {courses.map((course) => (
                    <div key={course.id} className="course-card">
                        <h3>{course.name}</h3>
                        <p>
                            {t('englishCourse.description', { skill: course.name.toLowerCase() })}
                        </p>
                        {/* Hình thức học */}
                        <div className="learning-formats">
                            <h3>{t('englishCourse.learningFormatsTitle')}</h3>
                            <ul>
                                {learningFormats.map((format, index) => (
                                    <li key={index}>{format}</li>
                                ))}
                            </ul>
                        </div>
                        <button className="register-button">{t('englishCourse.registerButton')}</button>
                    </div>
                ))}
            </div>


        </div>
    );
}

export default EnglishCourse;