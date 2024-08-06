import React, { useState } from 'react';
import LanguageSelector from '../common/LangDropList/LanguageSelector';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#" onClick={closeSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2c2c2c"><path d="M256-227.69 227.69-256l224-224-224-224L256-732.31l224 224 224-224L732.31-704l-224 224 224 224L704-227.69l-224-224-224 224Z"/></svg></a></li>
          <li><Link to="/" onClick={closeSidebar}>{t('nav.home')}</Link></li>
          <li><Link to="/explore" onClick={closeSidebar}>{t('nav.explore')}</Link></li>
          <li><Link to="/about" onClick={closeSidebar}>{t('nav.about')}</Link></li>
          <li><Link to="/offers" onClick={closeSidebar}>{t('nav.offers')}</Link></li>
          <li><Link to="/signin" onClick={closeSidebar}>{t('nav.signin')}</Link></li>
        </ul>
      </div>
      <div className="main-menu">
        <ul>
          <li><Link to="/" className="hide-on-sm">{t('nav.home')}</Link></li>
          <li><Link to="/explore" className="hide-on-sm">{t('nav.explore')}</Link></li>
          <li><Link to="/about" className="hide-on-sm">{t('nav.about')}</Link></li>
          <li><Link to="/offers" className="hide-on-sm">{t('nav.offers')}</Link></li>
          <li><Link to="/signin" className="hide-on-sm">{t('nav.signin')}</Link></li>
          <li><a href="#" onClick={toggleSidebar} className="d-md-none d-block"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2c2c2c"><path d="M160-269.23v-40h640v40H160ZM160-460v-40h640v40H160Zm0-190.77v-40h640v40H160Z"/></svg></a></li>
        </ul>
      </div>
      <LanguageSelector />
    </nav>
  );
}

export default Header;