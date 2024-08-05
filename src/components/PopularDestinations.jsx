import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlaceOfWorship } from '@fortawesome/free-solid-svg-icons';
import image1 from '../assets/images/city-images/local/image1.webp';
import image2 from '../assets/images/city-images/local/image2.webp';
import image3 from '../assets/images/city-images/local/image3.webp';
import image4 from '../assets/images/city-images/local/image4.webp';
import image5 from '../assets/images/city-images/local/image5.webp';

const PopularDestinations = () => {
    const { t } = useTranslation();

    const destinations = [
        {
            name: t('popularDestinations.destinations.sofia'),
            image: image1
        },
        {
            name: t('popularDestinations.destinations.plovdiv'),
            image: image2
        },
        {
            name: t('popularDestinations.destinations.nessebar'),
            image: image3
        },
        {
            name: t('popularDestinations.destinations.velikoTarnovo'),
            image: image4,
            hotels: t('popularDestinations.hotels'),
            attractions: t('popularDestinations.attractions')
        },
        {
            name: t('popularDestinations.destinations.rousse'),
            image: image5,
            hotels: t('popularDestinations.hotels'),
            attractions: t('popularDestinations.attractions')
        }
    ];

    return (
        <div className="container">
            <section>
                <h2>{t('popularDestinations.title')}</h2>
                <p>{t('popularDestinations.description')}</p>
                <div className="row destination-cards">
                    <div className="col-lg-6 p-2 main-destination-card">
                        <article className='col-12 d-flex flex-column justify-content-between'>
                            <div className='overlay'></div>
                            <img src={destinations[0].image} alt={destinations[0].name} className="img-fluid main-thumbnail" />
                            <div className="destination-data">
                                <h3>{destinations[0].name}</h3>
                                <p><FontAwesomeIcon icon={faBed} className='icon-margin-right' />{t('popularDestinations.hotels')}: 50</p>
                                <p><FontAwesomeIcon icon={faPlaceOfWorship} className='icon-margin-right' />{t('popularDestinations.attractions')}: 30</p>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-6 p-2 thumb-card">
                        <div className='row'>
                            {destinations.slice(1).map((destination, index) => (
                                <div key={index} className="col-md-6 p-2 thumb-card">
                                    <article className='col-12 d-flex flex-column justify-content-between'>
                                        <div className='overlay'></div>
                                        <img src={destination.image} alt={destination.name} className="img-fluid thumb-thumbnail" />
                                        <div className="destination-data">
                                            <h3>{destination.name}</h3>
                                            <p><FontAwesomeIcon icon={faBed} className='icon-margin-right' />{t('popularDestinations.hotels')}: 50</p>
                                            <p><FontAwesomeIcon icon={faPlaceOfWorship} className='icon-margin-right' />{t('popularDestinations.attractions')}: 30</p>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <div className='text-center'>
                <a href="">{t('popularDestinations.viewMore')}</a>
            </div>
        </div>
    );
}

export default PopularDestinations;