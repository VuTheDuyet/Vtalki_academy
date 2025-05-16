import React from 'react';
import './Vietnamese.css'; // File CSS riêng
import { useTranslation } from 'react-i18next';

function CoursesVietnamese() {
    const { t } = useTranslation();

    const courses = [
        { name: t('coursesVietnamese.courses.communication'), id: 'communication' },
        { name: t('coursesVietnamese.courses.business'), id: 'business' },
        { name: t('coursesVietnamese.courses.kids'), id: 'kids' },
        { name: t('coursesVietnamese.courses.exam'), id: 'exam' },
    ];

    return (
        <div className="courses-container">
            {/* Hình ảnh tiêu đề */}
            <div className="header-image">
                <img src="../assets/slide1.png" alt={t('coursesVietnamese.title')} className="course-header-img" />
            </div>

            <h2>{t('coursesVietnamese.title')}</h2>

            {/* Danh sách các khóa học */}
            <div className="courses-list">
                {courses.map((course) => (
                    <div key={course.id} className="course-card">
                        <h3>{course.name}</h3>
                        <p>
                            {t('coursesVietnamese.description', { skill: course.name.toLowerCase() })}
                        </p>
                        {/* Hình thức học */}
                        <div className="learning-formats">
                            <h3>{t('coursesVietnamese.learningFormatsTitle')}</h3>
                            <ul>
                                {t('coursesVietnamese.learningFormats', { returnObjects: true }).map(
                                    (format, index) => (
                                        <li key={index}>{format}</li>
                                    )
                                )}
                            </ul>
                        </div>
                        <button className="register-button">
                            {t('coursesVietnamese.registerButton')}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CoursesVietnamese;