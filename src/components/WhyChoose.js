import React from 'react';
import './WhyChoose.css';
import { useTranslation } from 'react-i18next';

const icons = [
    "/assets/whychose/7582783.png",
    "/assets/whychose/7582783.png",
    "/assets/whychose/7582783.png",
    "/assets/whychose/7582783.png",
    "/assets/whychose/7582783.png",
    "/assets/whychose/7582783.png",
    "/assets/whychose/7582783.png",
    "/assets/whychose/7582783.png"
];

export default function WhyChoose() {
    const { t } = useTranslation();

    return (
        <div className="why-choose">
            <h2>{t('why_choose.title', { brand: 'VTALKI' })}</h2>
            <div className="features">
                {icons.map((icon, index) => (
                    <div className="feature" key={index}>
                        <img src={icon} alt={t(`why_choose.${index + 1}.title`)} />
                        <h3>{t(`why_choose.${index + 1}.title`)}</h3>
                        <p>{t(`why_choose.${index + 1}.desc`)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
