import React from 'react';
//import components
import DecorationItem from '../../UI/DecorativeItem/DecorationItem';
//import image
import Image from './img/AboutPhoto.png';

const AboutModules = () => {
    return (
        <section className='about'>
            <DecorationItem />
            <div className='container about-container'>
                <div className='about-container__wrapper'>
                    <div classname='text-wrapper'>
                        <h1 className='about-header'>О нас</h1>
                        <p className='about-description'>
                            Мы хотим что бы наши проекты соответствовали нашим
                            высоким требованиям и желаниям заказчика, были
                            актуальными и уникальными.
                        </p>
                        <br />
                        <p className='about-description'>
                            <b>Салон Forma</b>- это команда профессионалов,
                            которые воплощают в реальность самые сложные
                            пожелания заказчика. Мы не просто делаем расчет и
                            предоставляем услуги по подбору, а создаем
                            искусство, которое долгие годы будет радовать Ваш
                            глаз и сохранит первоклассное качество.
                        </p>
                    </div>
                    <img className='about-image' src={Image} alt='interier' />
                </div>
            </div>
        </section>
    );
};

export default AboutModules;
