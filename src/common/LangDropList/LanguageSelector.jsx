// src/LanguageSelector.js
import './style.scss';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English', flag: 'uk-flag.png' },
  { code: 'bg', name: 'Български', flag: 'bulgarian-flag.png' },
  { code: 'es', name: 'Español', flag: 'spanish-flag.png' }
];

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(languages.find(lang => lang.code === i18n.language));
  const [isListVisible, setIsListVisible] = useState(false);

  useEffect(() => {
    setSelectedLanguage(languages.find(lang => lang.code === i18n.language));
  }, [i18n.language]);

  const handleLanguages = (event) => {
    const language = languages.find(lang => lang.code === event.target.value);
    setSelectedLanguage(language);
    i18n.changeLanguage(language.code);
    setIsListVisible(false);
  };

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <div className={`language-selector ${isListVisible ? 'active' : ''}`}>
      <div className='selected-language' onClick={toggleListVisibility}>
        <img
          src={`src/assets/images/icons/flags/${selectedLanguage.flag}`}
          alt={selectedLanguage.name}
          className="flag-icon"
        />
        <div className='arrow-drop-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2c2c2c">
            <path d="M480-360 280-560h400L480-360Z" />
          </svg>
        </div>
      </div>

      {isListVisible && (
        <div className='languages-list'>
          <h6>{t('nav.selectLanguage')}</h6>
          {languages.map((lang) => (
            <div key={lang.code} className='lang-section mt-4'>
              <img src={`src/assets/images/icons/flags/${lang.flag}`} alt={lang.name} />
              <button onClick={handleLanguages} value={lang.code}>{lang.name}</button>
              {selectedLanguage.code === lang.code && (
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1d003f">
                  <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                </svg>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;