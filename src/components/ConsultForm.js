import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ConsultForm.css';

export default function ConsultForm() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        note: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(t('consultForm.successMessage'));
        console.log(formData);
        // TODO: gửi API nếu cần
    };

    return (
        <section className="consult-section">
            <div className="consult-form-wrapper">
                <h2>{t('consultForm.title')}</h2>
                <p>{t('consultForm.description')}</p>
                <form className="consult-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder={t('consultForm.placeholders.name')}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder={t('consultForm.placeholders.phone')}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder={t('consultForm.placeholders.email')}
                        onChange={handleChange}
                    />
                    <textarea
                        name="note"
                        placeholder={t('consultForm.placeholders.note')}
                        rows="4"
                        onChange={handleChange}
                    />
                    <button type="submit">{t('consultForm.button')}</button>
                </form>
            </div>
        </section>
    );
}