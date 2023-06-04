import React from 'react';
//import components
import DecorationItem from '../../UI/DecorativeItem/DecorationItem';
import 'react-multi-carousel/lib/styles.css'
import {CarouselBlock} from './CarouselBlock';
import {Button} from '../../UI/Button/Button';




const ExampleDesignsModules = () => {

    return (
        <section className='design-examples'>
            <DecorationItem/>
            <div className='container design-examples-container'>
                <h1 className='about-header'>Примеры дизайна</h1>
                <CarouselBlock/>
                <Button>Оставить заявку</Button>
            </div>

        </section>
    );
};

export default ExampleDesignsModules;
