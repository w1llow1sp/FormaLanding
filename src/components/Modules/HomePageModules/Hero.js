import React from 'react';

//import icon
import Icon from './img/GiftIcon.svg';

const Hero = () => {
    return (
        <div>
            <section className='hero'>
                <div className='container hero-container'>
                    <h1 className='hero-header'>
                        Дизайнерские обои для Вашего интерьера на заказ
                    </h1>
                    <div className='header-card'>
                        <div className='header-card__wrapper'>
                            <img
                                className='card-img'
                                src={Icon}
                                alt='gift icon'
                            />
                            <p className='card-text'>
                                Наши клиенты получают скидку на материалы
                            </p>
                        </div>
                    </div>
                    <button className='button hero-btn'>
                        <a href='#'>Получить рекомендации по монтажу обоев</a>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Hero;
//TODO:Ссылка из button hero-btn
