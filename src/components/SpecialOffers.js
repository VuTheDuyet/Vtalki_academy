import React from 'react';
import { useTranslation } from 'react-i18next';
import './SpecialOffers.css';

function SpecialOffers() {
    const { t } = useTranslation();
    const offers = t('specialOffers.offers', { returnObjects: true });

    // List of image paths for each offer
    const offerImages = [
        '/assets/map.png', // Image for "Free Consultation & Trial Lesson"
        '/assets/map.png',    // Image for "Exclusive Course Materials"
        '/assets/map.png',     // Image for "Invite Friends, Get 20% Off"
    ];

    return (
        <section className="special-offers">
            <h2>{t('specialOffers.title')}</h2>
            <div className="offers-grid">
                {offers.map((offer, index) => (
                    <div key={index} className="offer-card">
                        <div className="offer-image">
                            <img
                                src={offerImages[index] || '/assets/fallback.png'} // Fallback image if index is out of range
                                alt={offer.title}
                            />
                        </div>
                        <h3>{offer.title}</h3>
                        <p>{offer.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SpecialOffers;