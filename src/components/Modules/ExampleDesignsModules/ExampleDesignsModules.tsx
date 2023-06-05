import React from 'react';
//import components
import DecorationItem from '../../UI/DecorativeItem/DecorationItem';
import 'react-multi-carousel/lib/styles.css'
import {CarouselBlock} from './CarouselBlock';
import {Button} from '../../UI/Button/Button';
import './ExampleBlock.scss'




const ExampleDesignsModules = () => {

    return (
        <section className='design-examples'>
            <DecorationItem/>
            <div className='container design-examples-container'>
                <h1 className='about-header example-header'>Примеры дизайна</h1>
                <CarouselBlock/>

                <div className={'btn_container_example'}>
                    <Button>Оставить заявку</Button>
                </div>
            </div>
        </section>
    );
};

export default ExampleDesignsModules;
