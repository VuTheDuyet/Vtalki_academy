import React, { useState } from 'react';
import './Korean.css'; // File CSS riêng
import { useTranslation } from 'react-i18next';
import ConsultForm from '../../../components/ConsultForm';


function KoreanCourse() {
    const { t } = useTranslation();

    const courses = [
        { name: t('koreanCourse.courses.communication'), id: 'communication', teacher: t('koreanCourse.teacher.native') },
        { name: t('koreanCourse.courses.beginner'), id: 'beginner', teacher: t('koreanCourse.teacher.bilingual') },
        { name: t('koreanCourse.courses.intermediate'), id: 'intermediate', teacher: t('koreanCourse.teacher.bilingual') },
    ];
    const [showConsultForm, setShowConsultForm] = useState(false);

    const handleOpenForm = () => setShowConsultForm(true);
    const handleCloseForm = () => setShowConsultForm(false);
    const learningFormats = [
        t('koreanCourse.learningFormats.group3_5'),
        t('koreanCourse.learningFormats.group10'),
    ];

    return (
        <div className="courses-container">
            {/* Hình ảnh tiêu đề (giả định) */}
            <div className="header-image">
                <img src="../assets/slide2.png" alt={t('koreanCourse.title')} className="course-header-img" />
            </div>

            <h2>{t('koreanCourse.title')}</h2>

            {/* Danh sách các khóa học */}
            <div className="courses-list">
                {courses.map((course) => (
                    <div key={course.id} className="course-card">
                        <h3>{course.name}</h3>
                        <p>
                            {t('koreanCourse.description', { skill: course.name.toLowerCase(), teacher: course.teacher })}
                        </p>
                        {/* Hình thức học */}
                        <div className="learning-formats">
                            <h3>{t('koreanCourse.learningFormatsTitle')}</h3>
                            <ul>
                                {learningFormats.map((format, index) => (
                                    <li key={index}>{format}</li>
                                ))}
                            </ul>
                        </div>
                        <button className="register-button" onClick={handleOpenForm}>
                            {t('coursesVietnamese.registerButton')}
                        </button>
                    </div>
                ))}
            </div>

            {/* Popup Consult Form */}
            {showConsultForm && (
                <div className="consult-form-popup">
                    <div className="popup-overlay" onClick={handleCloseForm}></div>
                    <div className="popup-content">
                        <button className="close-button" onClick={handleCloseForm}>×</button>
                        <ConsultForm />
                    </div>
                </div>
            )}
        </div>
    );
}

export default KoreanCourse;