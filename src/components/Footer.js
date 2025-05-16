import React from 'react';
import './Footer.css';
import mapImage from '../assets/map.png'; // bản đồ dạng ảnh tĩnh
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + thông tin */}
        <div className="footer-section logo-section">
          <div>
            <h3>{t('footer.logoSection.title')}</h3>
            <p>{t('footer.logoSection.description')}</p>
            <p>
              {t('footer.logoSection.email')}: <a href="mailto:vtalki79@gmail.com" className="footer-link">vtalki79@gmail.com</a>
            </p>
            <p>
              {t('footer.logoSection.hotline')}: <a href="tel:+84903806203" className="footer-link">0903806203</a>
            </p>
          </div>
        </div>

        {/* Liên kết nhanh */}
        <div className="footer-section">
          <h4>{t('footer.quickLinks.title')}</h4>
          <ul>
            <li><a href="/">{t('footer.quickLinks.home')}</a></li>
            <li><a href="/courses">{t('footer.quickLinks.courses')}</a></li>
            <li><a href="/contact">{t('footer.quickLinks.contact')}</a></li>
            <li><a href="/login">{t('footer.quickLinks.register')}</a></li>
          </ul>
        </div>

        {/* Mạng xã hội */}
        <div className="footer-section">
          <h4>{t('footer.socialSection.title')}</h4>
          <div className="social-icons">
            {/* Facebook */}
            <div className="icon facebook">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.facebook')}>
                <img src="/assets/facebook.png" alt={t('footer.socialSection.facebook')} className="social-image" />
              </a>
              <span className="tooltip">{t('footer.socialSection.facebook')}</span>
            </div>
            {/* YouTube */}
            <div className="icon youtube">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.youtube')}>
                <img src="/assets/youtube.png" alt={t('footer.socialSection.youtube')} className="social-image" />
              </a>
              <span className="tooltip">{t('footer.socialSection.youtube')}</span>
            </div>
            {/* TikTok */}
            <div className="icon tiktok">
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.tiktok')}>
                <img src="/assets/tiktok.png" alt={t('footer.socialSection.tiktok')} className="social-image" />
              </a>
              <span className="tooltip">{t('footer.socialSection.tiktok')}</span>
            </div>
            {/* Twitter */}
            <div className="icon twitter">
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.twitter')}>
                <img src="/assets/twitter.png" alt={t('footer.socialSection.twitter')} className="social-image" />
              </a>
              <span className="tooltip">{t('footer.socialSection.twitter')}</span>
            </div>
            {/* WhatsApp */}
            <div className="icon whatsapp">
              <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.whatsapp')}>
                <img src="/assets/whatsapp.png" alt={t('footer.socialSection.whatsapp')} className="social-image" />
              </a>
              <span className="tooltip">{t('footer.socialSection.whatsapp')}</span>
            </div>
            {/* Zalo */}
            <div className="icon zalo">
              <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.zalo')}>
                <img src="/assets/zalo.png" alt={t('footer.socialSection.zalo')} className="social-image" />
              </a>
              <span className="tooltip">{t('footer.socialSection.zalo')}</span>
            </div>
            {/* KakaoTalk */}
            <div className="icon talk">
              <a href="https://www.kakaotalk.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.kakaotalk')}>
                <img src="/assets/kakaotalk.png" alt={t('footer.socialSection.kakaotalk')} className="social-image" />
              </a>
              <span className="tooltip">{t('footer.socialSection.kakaotalk')}</span>
            </div>
            {/* Messenger */}
            <div className="icon messenger">
              <a href="https://www.messenger.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialSection.messenger')}>
                <img src="/assets/messenger.png" alt={t('footer.socialSection.messenger')} className="social-image" />
              </a>
              <span className="tooltip">{t('footer.socialSection.messenger')}</span>
            </div>
            {/* Điện thoại */}
            <div className="icon phone">
              <a href="tel:+84903806203" aria-label={t('footer.socialSection.phone')}>
                <img src="/assets/phone.png" alt={t('footer.socialSection.phone')} className="social-image" />
              </a>
              <span className="tooltip">{t('footer.socialSection.phone')}</span>
            </div>
          </div>
        </div>

        {/* Hình ảnh bản đồ */}
        <div className="footer-section map-section">
          <h4>{t('footer.mapSection.title')}</h4>
          <a
            href="https://www.google.com/maps/place/VTALKI+-+Vietmamese+language+academy+%EB%B2%A0%ED%8A%B8%EB%82%A8%EC%96%B4+%ED%95%99%EC%9B%90/@10.7309118,106.7045527,17z/data=!4m15!1m8!3m7!1s0x31752f913d3375ed:0xfd3db91f890681c5!2zNzkgTMOqIFbEg24gVGhpw6ptLCBUw6JuIFBob25gLCBRdeG6rW4gNywgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!3b1!8m2!3d10.7309118!4d106.7071276!16s%2Fg%2F11gyy1q4rm!3m5!1s0x317525a9fd595dc3:0x9bf5b61317230ae6!8m2!3d10.7308836!4d106.7071465!16s%2Fg%2F11n8k6thx6?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Xem bản đồ VTalki Center"
          >
            <img src={mapImage} alt="Bản đồ VTalki Center tại 79 Lê Văn Thiêm, Tân Phong, Quận 7, TP.HCM" className="map-image" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        {t('footer.copyright', { year: currentYear })}
      </div>
    </footer>
  );
}