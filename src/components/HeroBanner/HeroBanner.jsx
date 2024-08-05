import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
library.add(faCalendarAlt, faUserPlus);
import bannerImage from '../../assets/images/hero-banner/hero-banner-image2.jpg';
import { useTranslation } from 'react-i18next';
import './style.scss';

function HeroBanner() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true); // Always show the cursor initially
  const [isVisible, setIsVisible] = useState(false); // Set initial state to false
  const { t } = useTranslation();
  const textToType = t('banner.bannerText');

  const bannerRef = useRef(null);

  useEffect(() => {
    // Set up fade-in effect
    const fadeInTimeout = setTimeout(() => {
      setIsVisible(true); // Set isVisible to true after 1.8 seconds
    }, 1000);

    // Set up typing animation after fade-in effect
    const typingTimeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < textToType.length) {
          setTypedText(textToType.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
          setShowCursor(false); // Stop cursor blinking when typing is complete
          setTimeout(() => setShowCursor(true), 500); // Restart cursor blinking
        }
      }, 90); // Adjust typing speed here
    }, 1000); // Start typing after text fade-in

    return () => {
      clearTimeout(fadeInTimeout);
      clearTimeout(typingTimeout);
    };
  }, [textToType]);

  return (
    <>
      <div className="container hero-banner-container mt-4">
        <div className='row d-flex align-items-stretch'>
          <div className={`col-lg-6 col-12 hero-content order-2 d-flex flex-column justify-content-center`}>
          <h1>{typedText}<span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>&#8203;</span></h1>
            <div className={`float-in ${isVisible ? 'visible': ''}`} ref={bannerRef}>
              <p>{t('banner.bannerDescription')}</p>
              <form action="" method='GET'>
                <div className='row'>
                  <div className='col-12'>
                    <div className="form-group">
                      <input type="text" name="destinationName" id="destinationName" required placeholder=" " />
                      <label htmlFor="destinationName">{t('banner.destinationLabel')}</label>
                    </div>
                  </div>
                  <div className='col-lg-4 col-12 d-flex justify-content-center align-items-center'>
                    <div className='form-group date-button'>
                      <div className="icon-label">
                        <FontAwesomeIcon icon="calendar-alt" />
                      </div>
                      <h5>{t('banner.fromLabel')}</h5>
                      <input type="date" name="birthday" required placeholder=" " />
                    </div>
                  </div>
                  <div className='col-lg-4 col-12 d-flex justify-content-center align-items-center'>
                    <div className='form-group date-button'>
                      <div className="icon-label">
                        <FontAwesomeIcon icon="calendar-alt" />
                      </div>
                      <h5>{t('banner.toLabel')}</h5>
                      <input type="date" name="birthday" required placeholder=" " />
                    </div>
                  </div>
                  <div className='col-lg-4 col-12 d-flex justify-content-center align-items-center'>
                    <div className='form-group date-button'>
                      <div className="icon-label">
                        <FontAwesomeIcon icon={faUserPlus} />
                      </div>
                      <h5>{t('banner.guestsLabel')}</h5>
                    </div>
                  </div>
                </div>
                <input className="col-lg-4" type="submit" value={t('banner.searchButton')} />
              </form>
            </div>
          </div>
          <div className='col-lg-6 col-12 d-flex justify-content-center align-items-center order-lg-2 order-1'>
            <div className={`hero-image h-100 float-in ${isVisible ? 'visible': ''}`} ref={bannerRef}>
              <img src={bannerImage} alt="" className="img-fluid h-100" />
            </div>
          </div>
        </div>
      </div>

      <div className={`d-flex flex-column justify-content-center align-items-center float-in ${isVisible ? 'visible' : ''}`}>
      </div>
    </>
  );
}

export default HeroBanner;