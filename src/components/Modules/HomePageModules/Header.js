import React from 'react';
//import logo
import Logo from './img/Logo.svg';
//import Link
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <section className=' header-container container'>
                {/*Logo*/}
                <Link to={'/'} className='logo'>
                    <img src={Logo} alt='logo' />
                </Link>
                {/*nav*/}
                <nav className='header-nav'>
                    <Link to={'/'} className=' header-nav__link main'>
                        Главная
                    </Link>
                    <Link to={'/design'} className='header-nav__link design'>
                        Дизайн
                    </Link>
                    <Link to={'/catalog'} className='header-nav__link'>
                        Каталог
                    </Link>
                    <Link to={'/blog'} className='header-nav__link blog'>
                        Блог
                    </Link>
                    <Link
                        to={'/contacts'}
                        className='header-nav__link contacts'
                    >
                        Контакты
                    </Link>

                    <a
                        className='header-nav__link tel'
                        href='tel:+79194004250 '
                    >
                        +7 919 400 42 50
                    </a>

                    <a className='header-nav__link call' href='# '>
                        Обратный звонок
                    </a>
                </nav>
            </section>
        </header>
    );
};

export default Header;

//TODO:Сделать модалку обратного звонка и переписать стили//
