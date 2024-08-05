import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook, faClock, faShieldAlt, faMapMarkedAlt, faSmile, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';


library.add(faBook, faClock, faShieldAlt, faMapMarkedAlt, faSmile, faCalendarAlt);

const servicesData = [
    { icon: 'book', titleKey: 'easyBooking', descKey: 'easyBookingDesc' },
    { icon: 'clock', titleKey: 'customerSupport', descKey: 'customerSupportDesc' },
    { icon: 'shield-alt', titleKey: 'securePayment', descKey: 'securePaymentDesc' },
    { icon: 'map-marked-alt', titleKey: 'wideSelection', descKey: 'wideSelectionDesc' },
    { icon: 'smile', titleKey: 'userFriendly', descKey: 'userFriendlyDesc' },
    { icon: 'calendar-alt', titleKey: 'realTime', descKey: 'realTimeDesc' }
];

function OurServices() {
    const { t } = useTranslation();

    return (
        <div className='container pt-2 pb-2 mb-4'>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h2>{t('services.title')}</h2>
                <p>{t('services.description')}</p>
                <div className="service-cards row">
                    {servicesData.map(({ icon, titleKey, descKey }) => (
                        <section key={titleKey} className="col-md-4 col-12">
                            <div className="icon-wrapper">
                                <FontAwesomeIcon icon={icon} />
                            </div>
                            <h4>{t(`services.${titleKey}`)}</h4>
                            <p>{t(`services.${descKey}`)}</p>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurServices;