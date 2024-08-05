import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlaceOfWorship } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import image1 from '../../assets/images/city-images/global/Dubai.webp';
import image2 from '../../assets/images/city-images/global/Paris.webp';
import image3 from '../../assets/images/city-images/global/Santorini.webp';
import image4 from '../../assets/images/city-images/global/Rome.webp';
import image5 from '../../assets/images/city-images/global/New York.webp';
import image6 from '../../assets/images/city-images/global/Istanbul.webp';
import image7 from '../../assets/images/city-images/global/London.webp';
import image8 from '../../assets/images/city-images/global/Barcelona.webp';
import image9 from '../../assets/images/city-images/global/Tokyo.webp';
import image10 from '../../assets/images/city-images/global/Rio de Janeiro.webp';
import image11 from '../../assets/images/city-images/global/Sydney.webp';
import image12 from '../../assets/images/city-images/global/Reykjavik.webp';
import image13 from '../../assets/images/city-images/global/Prague.webp';
import image14 from '../../assets/images/city-images/global/Cape Town.webp';
import image15 from '../../assets/images/city-images/global/Kyoto.webp';
import image16 from '../../assets/images/city-images/global/Bangkok.webp';
import image17 from '../../assets/images/city-images/global/Los Angeles.webp';
import image18 from '../../assets/images/city-images/global/Machu Picchu.webp';
import image19 from '../../assets/images/city-images/global/Amsterdam.webp';
import image20 from '../../assets/images/city-images/global/Bali.webp';

const GlobalDestinations = () => {
    const { t } = useTranslation();
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    const [activeDot, setActiveDot] = useState(0);
    const containerRef = useRef(null);
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const categories = [
        { name: t('globalDestinations.categories.dubai'), image: image1, hotelCounts: 3000, attractionCounts: 180 },
        { name: t('globalDestinations.categories.paris'), image: image2, hotelCounts: 3000, attractionCounts: 180 },
        { name: t('globalDestinations.categories.santorini'), image: image3, hotelCounts: 3000, attractionCounts: 180 },
        { name: t('globalDestinations.categories.rome'), image: image4, hotelCounts: 3000, attractionCounts: 180 },
        { name: t('globalDestinations.categories.newYork'), image: image5, hotelCounts: 3000, attractionCounts: 180 },
        { name: t('globalDestinations.categories.istanbul'), image: image6, hotelCounts: 3000, attractionCounts: 180 },
        { name: t('globalDestinations.categories.london'), image: image7, hotelCounts: 3000, attractionCounts: 180 },
        { name: t('globalDestinations.categories.barcelona'), image: image8, hotelCounts: 3000, attractionCounts: 180 },
        { name: t('globalDestinations.categories.tokyo'), image: image9, hotelCounts: 3000, attractionCounts: 180 },
        { name: t('globalDestinations.categories.rioDeJaneiro'), image: image10, hotelCounts: 3000, attractionCounts: 180 },
        { name: t('globalDestinations.categories.sydney'), image: image11, hotelCounts: 3000, attractionCounts: 180 },
        { name: t('globalDestinations.categories.reykjavik'), image: image12, hotelCounts: 3000, attractionCounts: 180 },
        { name: t('globalDestinations.categories.prague'), image: image13, hotelCounts: 3000, attractionCounts: 180 },
        { name: t('globalDestinations.categories.capeTown'), image: image14, hotelCounts: 3000, attractionCounts: 180 },
        { name: t('globalDestinations.categories.kyoto'), image: image15, hotelCounts: 3000, attractionCounts: 180 },
        { name: t('globalDestinations.categories.bangkok'), image: image16, hotelCounts: 3000, attractionCounts: 180 },
        { name: t('globalDestinations.categories.losAngeles'), image: image17, hotelCounts: 3000, attractionCounts: 180 },
        { name: t('globalDestinations.categories.machuPicchu'), image: image18, hotelCounts: 3000, attractionCounts: 180 },
        { name: t('globalDestinations.categories.amsterdam'), image: image19, hotelCounts: 3000, attractionCounts: 180 },
        { name: t('globalDestinations.categories.bali'), image: image20, hotelCounts: 3000, attractionCounts: 180 }
    ];

    const getItemsPerPage = () => {
        if (window.innerWidth >= 992) {
            return 4;
        } else if (window.innerWidth >= 768) {
            return 3;
        } else if (window.innerWidth >= 576) {
            return 2;
        } else {
            return 1;
        }
    };

    const navigateToPreviousCategory = () => {
        const itemsPerPage = getItemsPerPage();
        const newIndex = (currentCategoryIndex - itemsPerPage + categories.length) % categories.length;
        setCurrentCategoryIndex(newIndex);
        setActiveDot(Math.floor(newIndex / itemsPerPage));
        scrollToCategory(newIndex);
    };

    const navigateToNextCategory = () => {
        const itemsPerPage = getItemsPerPage();
        const newIndex = (currentCategoryIndex + itemsPerPage) % categories.length;
        setCurrentCategoryIndex(newIndex);
        setActiveDot(Math.floor(newIndex / itemsPerPage));
        scrollToCategory(newIndex);
    };

    const disableNextButton = () => {
        const itemsPerPage = getItemsPerPage();
        return currentCategoryIndex >= categories.length - itemsPerPage;
    };

    const disablePreviousButton = () => {
        return currentCategoryIndex === 0;
    };

    const scrollToCategory = (index) => {
        const container = containerRef.current;
        if (container) {
            const itemsPerPage = getItemsPerPage();
            const containerWidth = container.offsetWidth;
            const targetLeft = index * (containerWidth / itemsPerPage);
            const scrollOptions = {
                left: targetLeft,
                behavior: 'smooth'
            };
            container.scrollTo(scrollOptions);
        }
    };

    const getPagesCount = () => {
        const itemsPerPage = getItemsPerPage();
        return Math.ceil(categories.length / itemsPerPage);
    };

    useEffect(() => {
        const handleResize = () => {
            setActiveDot(Math.floor(currentCategoryIndex / getItemsPerPage()));
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [currentCategoryIndex]);

    const checkResponsive = () => {
        if (window.innerWidth >= 992) {
            return 0.5;
        }   
        else {
            return 0.05;
        }
    };

    return (
        <div className='container mt-2 mb-2'>
            <h2>{t('globalDestinations.title')}</h2>
            <p>{t('globalDestinations.description')}</p>
            <div className='mt-4 mb-4 position-relative'>
                <div ref={containerRef} className="row d-flex flex-nowrap overflow-x-hidden residence-cards">
                    {categories.map((category, index) => (
                        <div key={index} className={`col-lg-3 col-md-4 col-sm-6 col-12 card__article ${index === currentCategoryIndex ? 'active' : ''}`}>
                            <div className="card__image">
                                <img src={category.image} alt="image" />
                            </div>
                            <div className="card__data">
                                <h3 className="card__name">{category.name}</h3>
                                <p><FontAwesomeIcon icon={faBed} className='icon-margin-right' />{t('globalDestinations.hotels')}: {category.hotelCounts}</p>
                                <p><FontAwesomeIcon icon={faPlaceOfWorship} className='icon-margin-right' />{t('globalDestinations.attractions')}: {category.attractionCounts}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='button-label' id="prev-btn-label">
                    <button className="btn btn-primary" onClick={navigateToPreviousCategory} disabled={disablePreviousButton()}>&#8249;</button>
                </div>
                <div className='button-label' id="next-btn-label">
                    <button className="btn btn-primary" onClick={navigateToNextCategory} disabled={disableNextButton()}>&#8250;</button>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
                {Array.from({ length: getPagesCount() }).map((_, pageIndex) => (
                    <div
                        key={pageIndex}
                        className={`dot ${activeDot === pageIndex ? 'active' : ''}`}
                        onClick={() => {
                            const itemsPerPage = getItemsPerPage();
                            const newIndex = pageIndex * itemsPerPage;
                            setCurrentCategoryIndex(newIndex);
                            setActiveDot(pageIndex);
                            scrollToCategory(newIndex);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default GlobalDestinations;