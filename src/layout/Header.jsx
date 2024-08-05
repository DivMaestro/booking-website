import React, { useState } from 'react';
import LanguageSelector from '../common/LangDropList/LanguageSelector';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Add this line

function Header() {
  const { t, i18n } = useTranslation(); // Initialize useTranslation hook

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
          <li><a href="#home">{t('nav.home')}</a></li> {/* Use t function for translation */}
          <li><a href="#explore">{t('nav.explore')}</a></li> {/* Use t function for translation */}
          <li><a href="#about">{t('nav.about')}</a></li> {/* Use t function for translation */}
          <li><a href="#offers">{t('nav.offers')}</a></li> {/* Use t function for translation */}
          <li><a href="#signin">{t('nav.signin')}</a></li> {/* Use t function for translation */}
        </ul>
      </div>
      <div className='main-menu'>
        <ul>
          <li><a href="#home" className='hide-on-sm'>{t('nav.home')}</a></li> {/* Use t function for translation */}
          <li><a href="#explore" className='hide-on-sm'>{t('nav.explore')}</a></li> {/* Use t function for translation */}
          <li><a href="#about" className='hide-on-sm'>{t('nav.about')}</a></li> {/* Use t function for translation */}
          <li><a href="#offers" className='hide-on-sm'>{t('nav.offers')}</a></li> {/* Use t function for translation */}
          <li><a href="#signin" className='hide-on-sm'>{t('nav.signin')}</a></li> {/* Use t function for translation */}
          <li><a href="#" onClick={toggleSidebar} className='d-md-none d-block'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2c2c2c"><path d="M160-269.23v-40h640v40H160ZM160-460v-40h640v40H160Zm0-190.77v-40h640v40H160Z"/></svg></a></li>
        </ul>
      </div>
      <LanguageSelector />
    </nav>
  );
}

export default Header;