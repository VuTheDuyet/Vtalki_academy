import React from 'react';
import Slider from '../../components/Slider';
import './Home.css'; // tạo file này để style riêng cho trang 
import Popup from '../../components/Popup'; // điều chỉnh đường dẫn nếu cần
import ConsultForm from '../../components/ConsultForm';
import WhyChoose from '../../components/WhyChoose';
import PopularCourses from '../../components/PopularCourses';
import NewsSection from '../../components/NewsSection';
import TeachersSection from '../../components/TeachersSection';
import SpecialOffers from '../../components/SpecialOffers';
import { useTranslation } from 'react-i18next';
// import Learningroadmap from '../../components/Learningroadmap';


export default function Home() {
    const { t } = useTranslation(); // Khởi tạo hàm t
    return (
        <>
            <Popup />
            <Slider />

            <section className="vtalki-reasons">
                <WhyChoose />
            </section>

            <section className="vtalki-method">
                <h1>{t("Vtalki's courses")}</h1>
                <PopularCourses />
            </section>
            {/* 
            <section className="vtalki-roadmap">
                <h1>Không lo lạc đường – VTalki đã có lộ trình cho bạn</h1>
                <p>Lộ trình rõ ràng từ cơ bản đến nâng cao, hỗ trợ xuyên suốt quá trình học.</p>
                <Learningroadmap></Learningroadmap>
            </section> */}

            <section className="vtalki-teachers">
                <h1>{t('teacher_team_heading')}</h1>
                <TeachersSection />
            </section>

            <section className="vtalki-offers">
                <h1>{t('free_trial_offer')}</h1>
                <SpecialOffers />
            </section>

            <section className="vtalki-call">
                <h1>{t('join_cta')}</h1>
                <ConsultForm />
                {/* <button className="enroll-button">{t('enroll_now')}</button> */}
            </section>

            <section className="vtalki-news">
                <h1>{t('news_articles')}</h1>
                <NewsSection />
            </section>
        </>
    );
}
