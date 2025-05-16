import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from '../locales/en/translation.json'
import translationVI from '../locales/vi/translation.json'
import translationKO from '../locales/ko/translation.json'

const resources = {
    en: { translation: translationEN },
    vi: { translation: translationVI },
    ko: { translation: translationKO },

};

i18next.use(initReactI18next).init({
    lng: 'en', // if you're using a language detector, do not define the lng option
    debug: true,
    resources
})
