import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo-01.png';
import './Header.css';
import FloatingButtons from './FloatingButtons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const { t, i18n } = useTranslation();

  const handleNavClick = () => setIsOpen(false);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="top-header">
        <p>
          VTalki Vietnamese - Korean - English Center |
          <a href="mailto:vtalki79@gmail.com" rel="noopener noreferrer">vtalki79@gmail.com</a> |
          <a href="tel:+84903806203">0903 806 203</a>
        </p>
      </div>

      <div className="container">
        <div className="logo">
          <Link to="/" onClick={handleNavClick}>
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>

        <div className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">☰</div>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={handleNavClick}>{t("home")}</Link>

          {/* Self-study courses */}
          <div
            className="nav-item has-dropdown"
            onMouseEnter={() => setHoveredMenu('self-study')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <Link to="/self-study" onClick={handleNavClick}>{t("courses")}</Link>
            <div className={`dropdown-menu ${hoveredMenu === 'self-study' ? 'show' : ''}`}>
              <Link to="/self-study/vietnamese" onClick={handleNavClick}>{t("vietnamese")}</Link>
              <Link to="/self-study/korean" onClick={handleNavClick}>{t("korean")}</Link>
              <Link to="/self-study/english" onClick={handleNavClick}>{t("english")}</Link>
            </div>
          </div>

          {/* Teacher Training */}
          <div
            className="nav-item has-dropdown"
            onMouseEnter={() => setHoveredMenu('teachers')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <Link to="/teacher-training" onClick={handleNavClick}>{t("teacher_training")}</Link>
            <div className={`dropdown-menu ${hoveredMenu === 'teachers' ? 'show' : ''}`}>
              <Link to="/teacher-training/programs" onClick={handleNavClick}>{t("all_teachers")}</Link>
            </div>
          </div>

          {/* About */}
          <div
            className="nav-item has-dropdown"
            onMouseEnter={() => setHoveredMenu('about')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <Link to="/about" onClick={handleNavClick}>{t("about")}</Link>
            <div className={`dropdown-menu ${hoveredMenu === 'about' ? 'show' : ''}`}>
              <Link to="/about-overview" onClick={handleNavClick}>{t("overview")}</Link>
            </div>
          </div>

          {/* News */}
          <div
            className="nav-item has-dropdown"
            onMouseEnter={() => setHoveredMenu('news')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <Link to="/news" onClick={handleNavClick}>{t("new")}</Link>
            <div className={`dropdown-menu ${hoveredMenu === 'news' ? 'show' : ''}`}>
              <Link to="/news/blogs" onClick={handleNavClick}>{t("blog")}</Link>
            </div>
          </div>

          {/* Contact */}
          <div
            className="nav-item has-dropdown"
            onMouseEnter={() => setHoveredMenu('contact')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <Link to="/contact" onClick={handleNavClick}>{t("contact")}</Link>
            <div className={`dropdown-menu ${hoveredMenu === 'contact' ? 'show' : ''}`}>
              <Link to="/contact/form" onClick={handleNavClick}>{t("contact_form")}</Link>
              <Link to="/contact/info" onClick={handleNavClick}>{t("contact_info")}</Link>
            </div>
          </div>

          {/* Language Selector */}
          <div className="lang-select-wrapper">
            <select className="lang-select" onChange={changeLanguage} value={i18n.language}>
              <option value="vi">
                <img src="/assets/langue/vn.png" alt="VN Flag" className="flag-icon" /> VN
              </option>
              <option value="en">
                <img src="/assets/langue/us.jpg" alt="US Flag" className="flag-icon" /> EN
              </option>
              <option value="ko">
                <img src="/assets/langue/ko.png" alt="KR Flag" className="flag-icon" /> KO
              </option>
            </select>
          </div>
        </nav>

        {/* Di chuyển FloatingButtons ra ngoài nav-links */}
        <FloatingButtons />
      </div>
    </header>
  );
}