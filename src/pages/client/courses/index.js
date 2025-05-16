import React from 'react';
import './Courses.css'; // File CSS riêng
import { useTranslation } from 'react-i18next';
import CoursesVietnamese from './vietnamese'; // Import component Tiếng Việt
import KoreanCourse from './korean'; // Import component Tiếng Hàn
import EnglishCourse from './english'; // Import component Tiếng Anh

function Courses() {
    const { t } = useTranslation();

    return (
        <div className="all-courses-container">
            <h1>{t('allCourses.title')}</h1>

            {/* Khóa học Tiếng Việt */}
            <CoursesVietnamese />

            {/* Khóa học Tiếng Hàn */}
            <KoreanCourse />

            {/* Khóa học Tiếng Anh */}
            <EnglishCourse />
        </div>
    );
}

export default Courses;