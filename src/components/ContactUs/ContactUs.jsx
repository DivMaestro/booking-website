import React from 'react';
import { useTranslation } from 'react-i18next';
import image1 from '../../assets/images/cover-images/image1.jpg';
import './style.scss';

function ContactUs() {
    const { t } = useTranslation();

    return (
        <div className="container contact-form-container">
            <div className="row d-flex align-items-stretch">
                <div className="col-xl-6 col-12 cover-image-container d-flex justify-content-center align-items-center">
                    <div className="image-overlay h-100">
                        <img src={image1} alt="Cover" className="img-fluid h-100 w-100" />
                    </div>
                </div>
                <div className="col-xl-6 col-12 d-flex flex-column justify-content-center">
                    <div className='row mt-xl-0 mt-md-4 '>
                        <div className='col-xl-12 col-lg-6 col-12'>
                            <section>
                                <h2>{t('contact.title')}</h2>
                                <p>{t('contact.description')}</p>
                            </section>
                        </div>
                        <div className='col-xl-12 col-lg-6 col-12'>
                            <form action="" method='POST'>
                                <div className="form-row">
                                    <div className="form-group col-lg-6 col-12">
                                        <input type="text" name="firstName" id="firstName" required placeholder=" " />
                                        <label htmlFor="firstName">{t('contact.form.name')}</label>
                                    </div>
                                    <div className="form-group col-lg-6 col-12">
                                        <input type="text" name="email" id="email" required placeholder=" " />
                                        <label htmlFor="email">{t('contact.form.email')}</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea name="questionText" id="questionText" required placeholder=" " />
                                    <label htmlFor="questionText">{t('contact.form.question')}</label>
                                </div>
                                <input className="col-lg-4" type="submit" value={t('contact.form.submit')} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;