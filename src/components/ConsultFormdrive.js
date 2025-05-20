import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ConsultForm.css';

export default function ConsultFormdrive() {
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

        if (!formData.name || !formData.number || !formData.gmail) {
            setMessage(t('form.contact.validationError') || 'Please fill all required fields.');
            setIsSubmitting(false);
            return;
        }

        try {
            const formUrl = 'https://docs.google.com/forms/u/0/d/1RnH4bkqPdf_Jiuvs3y9WlrwLsXcvU8AH4gzLWZW7noQ/formResponse'; // Xác minh URL
            const formDataToSubmit = new FormData();
            formDataToSubmit.append('entry.19006276', formData.name); // Họ và tên
            formDataToSubmit.append('entry.1509237520', formData.gmail); // Gmail
            formDataToSubmit.append('entry.1806997878', formData.number); // Số điện thoại
            formDataToSubmit.append('entry.732243153', formData.note || ''); // Tin nhắn (không bắt buộc)

            const response = await fetch(formUrl, {
                method: 'POST',
                body: formDataToSubmit,
                mode: 'no-cors', // Sử dụng no-cors để tránh lỗi CORS
            });

            // Vì no-cors không cho đọc phản hồi, kiểm tra dựa trên việc gửi không lỗi
            setMessage(t('form.contact.submitSuccess') || 'Form submitted successfully!');
            setFormData({
                name: '',
                number: '',
                gmail: '',
                note: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error.message);
            setMessage(t('form.contact.submitError') || 'Failed to submit form. Please try again or check the form URL.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="consult-section">
            <div className="consult-form-wrapper">
                <h2>{t('consultForm.title') || 'Consultation Form'}</h2>
                <p>{t('consultForm.description') || 'Fill out the form to get in touch with us.'}</p>
                <form className="consult-form" onSubmit={handleSubmit} noValidate>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('consultForm.placeholders.name') || 'Your Name'}
                        required
                    />
                    <input
                        type="tel"
                        id="number"
                        name="number"
                        placeholder={t('consultForm.placeholders.phone') || 'Phone Number'}
                        value={formData.number}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        id="gmail"
                        name="gmail"
                        value={formData.gmail}
                        placeholder={t('consultForm.placeholders.email') || 'Email Address'}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        id="note"
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        placeholder={t('consultForm.placeholders.note') || 'Your Message'}
                    />
                    <button type="submit" className="submit-button" disabled={isSubmitting}>
                        {isSubmitting ? t('consultForm.submitting') || 'Submitting...' : t('consultForm.button') || 'Submit'}
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