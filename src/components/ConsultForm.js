import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ConsultForm.css';

export default function ConsultForm() {
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
        <section className="consult-section">
            <div className="consult-form-wrapper">
                <h2>{t('consultForm.title')}</h2>
                <p>{t('consultForm.description')}</p>
                <form className="consult-form" onSubmit={handleSubmit} noValidate>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('consultForm.placeholders.name')}
                        required
                    />
                    <input
                        type="tel"
                        id="number"
                        name="number"
                        placeholder={t('consultForm.placeholders.phone')}
                        value={formData.number}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        id="gmail"
                        name="gmail"
                        value={formData.gmail}
                        placeholder={t('consultForm.placeholders.email')}
                        onChange={handleChange}
                        required
                    />
                    <textarea

                        id="note"
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        placeholder={t('consultForm.placeholders.note')}
                    />
                    <button type="submit" className="submit-button" disabled={isSubmitting}>
                        {isSubmitting ? t('consultForm.submitting') : t('consultForm.button')}
                    </button>

                    {message && (
                        <p className="form-message" aria-live="polite">
                            {message}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}