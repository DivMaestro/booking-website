import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import image1 from '../assets/images/Residence Category Images/image1.webp';
import image2 from '../assets/images/Residence Category Images/image2.webp';
import image3 from '../assets/images/Residence Category Images/image3.webp';
import image4 from '../assets/images/Residence Category Images/image4.webp';
import image5 from '../assets/images/Residence Category Images/image5.webp';
import image6 from '../assets/images/Residence Category Images/image6.webp';
import image7 from '../assets/images/Residence Category Images/image7.webp';
import image8 from '../assets/images/Residence Category Images/image8.jpg';


const ResidenceCategory = () => {
    const { t } = useTranslation();
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    const containerRef = useRef(null);

    const categories = [
        { name: t('residenceCategory.categories.hotels'), image: image1, description: `${t('residenceCategory.categories.pricesFrom')} 59.99 BGN` },
        { name: t('residenceCategory.categories.mountainHouses'), image: image2, description: `${t('residenceCategory.categories.pricesFrom')} 29.99 BGN` },
        { name: t('residenceCategory.categories.beachVillas'), image: image3, description: `${t('residenceCategory.categories.pricesFrom')} 109.99 BGN` },
        { name: t('residenceCategory.categories.villageHouses'), image: image4, description: `${t('residenceCategory.categories.pricesFrom')} 29.99 BGN` },
        { name: t('residenceCategory.categories.urbanApartments'), image: image5, description: `${t('residenceCategory.categories.pricesFrom')} 39.99 BGN` },
        { name: t('residenceCategory.categories.wineTourism'), image: image6, description: `${t('residenceCategory.categories.pricesFrom')} 89.99 BGN` },
        { name: t('residenceCategory.categories.luxuryVillas'), image: image7, description: `${t('residenceCategory.categories.pricesFrom')} 79.99 BGN` },
        { name: t('residenceCategory.categories.ecoHouses'), image: image8, description: `${t('residenceCategory.categories.pricesFrom')} 59.99 BGN` }
    ];

    const navigateToPreviousCategory = () => {
        setCurrentCategoryIndex(prevIndex => (prevIndex - 1 + categories.length) % categories.length);
        scrollToCategory(currentCategoryIndex - 1);
    };

    const navigateToNextCategory = () => {
        setCurrentCategoryIndex(prevIndex => (prevIndex + 1) % categories.length);
        scrollToCategory(currentCategoryIndex + 1);
    };

    const disableNextButton = () => {
        let increment;
        if (window.innerWidth >= 992) {
            increment = 4;
        } else if (window.innerWidth >= 768) {
            increment = 3;
        } else if (window.innerWidth >= 576) {
            increment = 2;
        } else {
            increment = 1;
        }
        return currentCategoryIndex === categories.length - increment;
    };

    const scrollToCategory = (index) => {
        const container = containerRef.current;
        if (container) {
            let increment;
            if (window.innerWidth >= 992) {
                increment = 4;
            } else if (window.innerWidth >= 768) {
                increment = 3;
            } else if (window.innerWidth >= 576) {
                increment = 2;
            } else {
                increment = 1;
            }
            const containerWidth = container.offsetWidth;
            const targetLeft = index * containerWidth / increment;
            const scrollOptions = {
                left: targetLeft,
                behavior: 'smooth' // Smooth scrolling
            };
            container.scrollTo(scrollOptions);
        }
    };

    return (
        <div className='container mb-2'>
            <section>
                <h2>{t('residenceCategory.title')}</h2>
                <p>{t('residenceCategory.description')}</p>
                <div className='position-relative'>
                    <div ref={containerRef} className="row d-flex flex-nowrap overflow-x-hidden residence-cards">
                        {categories.map((category, index) => (
                            <div key={index} className={`col-lg-3 col-md-4 col-sm-6 col-12 card__article ${index === currentCategoryIndex ? 'active' : ''}`}>
                                <div className="card__image">
                                    <img src={category.image} alt={category.name} />
                                </div>
                                <div className="card__data">
                                    <h3 className="card__name">{category.name}</h3>
                                    <p className="card__description">{category.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='button-label' id="prev-btn-label">
                        <button className="btn btn-primary" onClick={navigateToPreviousCategory} disabled={currentCategoryIndex === 0}>&#8249;</button>
                    </div>
                    <div className='button-label' id="next-btn-label">
                        <button className="btn btn-primary" onClick={navigateToNextCategory} disabled={disableNextButton()}>&#8250;</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResidenceCategory;