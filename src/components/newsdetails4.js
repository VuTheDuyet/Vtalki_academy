import React from 'react';
import { Helmet } from 'react-helmet';
import './NewsDetails.css';
import { useTranslation } from 'react-i18next';

export default function NewsDetails4() {
    const { t } = useTranslation();
    const slug = 'nguoi-han-hoc-tieng-viet-kinh-doanhh';

    // Hàm render HTML an toàn
    const renderHTML = (html) => ({ __html: html });

    return (
        <div className="news-detail-container max-w-4xl mx-auto p-6">
            <Helmet>
                <title>{t(`news.${slug}.helmet.title`)}</title>
                <meta name="description" content={t(`news.${slug}.helmet.description`)} />
                <meta name="keywords" content={t(`news.${slug}.helmet.keywords`)} />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content={t(`news.${slug}.helmet.og_title`)} />
                <meta property="og:description" content={t(`news.${slug}.helmet.og_description`)} />
                <meta property="og:image" content={t(`news.${slug}.helmet.og_image`)} />
                <meta property="og:url" content={t(`news.${slug}.helmet.og_url`)} />
            </Helmet>

            <article className="bg-white shadow-lg rounded-lg p-8">
                <header>
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        {t(`news.${slug}.title`)}
                    </h1>
                    <p className="text-gray-600 mb-6">{t(`news.${slug}.published_date`)}</p>
                    <img
                        src="/assets/map.png"
                        alt={t(`news.${slug}.content.section1.image_alt`)}
                        className="w-full h-auto rounded-lg mb-6"
                    />
                </header>

                <section className="prose prose-lg max-w-none">
                    <h2>{t(`news.${slug}.content.section1.title`)}</h2>
                    <p dangerouslySetInnerHTML={renderHTML(t(`news.${slug}.content.section1.text1`))} />
                    <p dangerouslySetInnerHTML={renderHTML(t(`news.${slug}.content.section1.text2`))} />
                    <img
                        src="/assets/map.png"
                        alt={t(`news.${slug}.content.section1.image_alt2`)}
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <h2>{t(`news.${slug}.content.section2.title`)}</h2>
                    <p dangerouslySetInnerHTML={renderHTML(t(`news.${slug}.content.section2.text1`))} />
                    <ul className="list-disc pl-6 mb-6">
                        {t(`news.${slug}.content.section2.list1`, { returnObjects: true }).map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={renderHTML(item)} />
                        ))}
                    </ul>
                    <img
                        src="/assets/map.png"
                        alt={t(`news.${slug}.content.section2.image_alt`)}
                        className="w-full h-auto rounded-lg my-6"
                    />
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                        <span dangerouslySetInnerHTML={renderHTML(t(`news.${slug}.content.section2.quote`))} />
                    </blockquote>

                    <h2>{t(`news.${slug}.content.section3.title`)}</h2>
                    <p dangerouslySetInnerHTML={renderHTML(t(`news.${slug}.content.section3.text1`))} />
                    <ul className="list-disc pl-6 mb-6">
                        {t(`news.${slug}.content.section3.list1`, { returnObjects: true }).map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={renderHTML(item)} />
                        ))}
                    </ul>
                    <p dangerouslySetInnerHTML={renderHTML(t(`news.${slug}.content.section3.text2`))} />
                    <img
                        src="/assets/map.png"
                        alt={t(`news.${slug}.content.section3.image_alt`)}
                        className="w-full h-auto rounded-lg my-6"
                    />

                    <h2>{t(`news.${slug}.content.section4.title`)}</h2>
                    <p dangerouslySetInnerHTML={renderHTML(t(`news.${slug}.content.section4.text1`))} />
                    <ul className="list-disc pl-6 mb-6">
                        {t(`news.${slug}.content.section4.list1`, { returnObjects: true }).map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={renderHTML(item)} />
                        ))}
                    </ul>

                    <h3>{t(`news.${slug}.content.section5.title`)}</h3>
                    <p dangerouslySetInnerHTML={renderHTML(t(`news.${slug}.content.section5.text1`))} />
                    <ul className="list-disc pl-6 mb-6">
                        {t(`news.${slug}.content.section5.list1`, { returnObjects: true }).map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={renderHTML(item)} />
                        ))}
                    </ul>

                    <p className="text-center">
                        <a
                            href="https://vtalki.com/register"
                            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
                        >
                            {t(`news.${slug}.content.section5.register`)}
                        </a>
                    </p>
                </section>

                <footer className="mt-8">
                    <p
                        className="text-gray-600"
                        dangerouslySetInnerHTML={renderHTML(t(`news.${slug}.content.footer.text1`))}
                    />
                    <p
                        className="text-gray-600 font-semibold mt-2"
                        dangerouslySetInnerHTML={renderHTML(t(`news.${slug}.content.footer.text2`))}
                    />
                </footer>
            </article>
        </div>
    );
}