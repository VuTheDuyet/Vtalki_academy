import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './FormContact.css';

const FormContact = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        number: '',
        gmail: '',
        note: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            const response = await fetch('https://6780d4f685151f714b08157f.mockapi.io/category', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

            const result = await response.json();
            console.log('Form sent successfully:', result);
            setMessage(t('form.contact.submitSuccess'));
            setFormData({
                name: '',
                number: '',
                gmail: '',
                note: ''
            });
        } catch (error) {
            console.error('Error sending form:', error.message);
            setMessage(t('form.contact.submitError'));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="form-contact-container" role="region" aria-label={t('form.contact.ariaLabel')}>
            <h2 className="form-title">{t('form.contact.title')}</h2>
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                    <label htmlFor="name">{t('form.contact.fullName')}</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('form.contact.fullNamePlaceholder')}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="gmail">{t('form.contact.email')}</label>
                    <input
                        type="email"
                        id="gmail"
                        name="gmail"
                        value={formData.gmail}
                        onChange={handleChange}
                        placeholder={t('form.contact.emailPlaceholder')}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="number">{t('form.contact.phone')}</label>
                    <input
                        type="tel"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        placeholder={t('form.contact.phonePlaceholder')}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="note">{t('form.contact.message')}</label>
                    <textarea
                        id="note"
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        placeholder={t('form.contact.messagePlaceholder')}
                    />
                </div>

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? t('form.contact.submitting') : t('form.contact.submit')}
                </button>

                {message && <p className="form-message" aria-live="polite">{message}</p>}
            </form>
        </div>
    );
};

export default FormContact;
