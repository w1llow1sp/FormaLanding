import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

import IMAGE1 from './../../../assets/designExample/1.png'
import IMAGE2 from './../../../assets/designExample/2.png'
import IMAGE3 from './../../../assets/designExample/3.png'
import IMAGE4 from './../../../assets/designExample/4.png'
import IMAGE5 from './../../../assets/designExample/5.png'
import IMAGE6 from './../../../assets/designExample/6.png'
import IMAGE7 from './../../../assets/designExample/7.png'
import IMAGE8 from './../../../assets/designExample/8.png'
import IMAGE9 from './../../../assets/designExample/9.png'
import IMAGE10 from './../../../assets/designExample/10.png'
import {ExampleCard} from './ExampleCard';



export const ExampleData = [
    {
        id: 1,
        image: IMAGE1,
        collection: ' Aura Bazaar Galerie',
        description: 'Bazaar– яркая и интригующая коллекция,\n' +
            'наполненная этническими дизайнами и\n' +
            'узорами.'
    },
    {
        id: 2,
        image: IMAGE2,
        collection: ' Aura Marelle',
        description: 'Представляем вам коллекцию обоев для детской комнаты\n' +
            'Aura Marelle.\n' +
            'Название переводится с французского языка, как нежность.'
    },
    {
        id: 3,
        image: IMAGE3,
        collection: ' Aura Happy ',
        description: 'Вдохновитесь мечтательным, богемным стилем с жизнерадостной коллекцией AURA HAPPY . Каталог, вдохновленный естественной красотой пышных берегов, ботаническими образами и наполнен акцентами'
    },
    {
        id: 4,
        image: IMAGE4,
        collection: ' ASHFORD TOILES II',
        description: 'Исторические знаковые дизайны смело\n' +
            'переплетаются с причудливыми,\n' +
            'изысканными сюжетами, давая жизнь\n' +
            'новому поколению всем известным\n' +
            'классическим Туалям.\n' +
            'Коллекция Ashford Toiles II –\n' +
            'Неожиданный, парадоксальный и\n' +
            'красивый результат этого эксперимента!\n'
    },
    {
        id: 5,
        image: IMAGE5,
        collection: 'Antonina Vella Modern Metals II',
        description: 'Antonina Vella – это роскошный стиль в сочетании с новейшими технологиями, который изменил стандартные представления о декоре стен.'
    },
    {
        id: 6,
        image: IMAGE6,
        collection: 'Candice Olson After Eight',
        description: 'Коллекция AFTER EIGHT стала проводником в красивейшие интерьеры, которые наполнены атмосферой роскошной и размеренной жизни, напоминает нам о бурлеске эпохи Art Deco и долгих светских вечерах.'
    },
    {
        id: 7,
        image: IMAGE7,
        collection: 'Ronald Redding Arts and Crafts',
        description: 'Коллекция Arts & Crafts демонстрирует концепцию искусного использования простых образов, мастерства и натуральных материалов, которые остаются неотъемлемой частью современных интерьеров.'
    },
    {
        id: 8,
        image: IMAGE8,
        collection: 'Antonina Vella Dazzling Dimentions II',
        description: 'Cовременное трактование роскошного стиля с применением новейших технологий переосмысливает назначение обоев в декоре во второй коллекции Antonina Vella Dazzling Dimensions Volume II. Природные текстуры подчеркнуты мерцающим блеском и декоративными элементами.'
    },
    {
        id: 9,
        image: IMAGE9,
        collection: ' York Grandmillennial',
        description: 'Tрадиционная уютная классика в свежих цветах создает органичный, непринужденный и индивидуальный стиль в интерьере. Двигаясь в будущее, отойдя от минимализма, эстетическое сочетание игривых узоров, вневременных дизайнов и рациональное использование винтажных вещей определяют отличительные черты современного стиля'
    },
    {
        id: 10,
        image: IMAGE10,
        collection: ' York Rifle Paper Co. Second Edition',
        description: 'кунитесь в красочный волшебный мир Rifle Paper Co. с их второй коллекцией обоев.  Художественные иллюстрации цветочных композиций, дикой природы и полевых пейзажей в ярких цветах и нейтральных оттенках  мгновенно добавят красоты в любое пространство.'
    },
]


 export const CarouselBlock = () => {

     const responsive = {
         desktop: {
             breakpoint: { max: 3000, min: 1024 },
             items: 2,
             partialVisibilityGutter: 50 // this is needed to tell the amount of px that should be visible.
         },
         tablet: {
             breakpoint: { max: 1024, min: 464 },
             items: 2,
             partialVisibilityGutter: 20 // this is needed to tell the amount of px that should be visible.
         },
         mobile: {
             breakpoint: { max: 464, min: 360 },
             items: 1,
             partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
         }
     }

    return (
        <div className={'main_carousel'}>
            <Carousel
                containerClass={'carousel-container'}
                itemClass={'carousel-item'}
                partialVisible={true}
                keyBoardControl={true}
                slidesToSlide={1}
                arrows
                infinite={true}
                responsive={responsive}>
                {ExampleData.map((element) => (
                    <ExampleCard
                        id={element.id}
                        image={element.image}
                        collection={element.collection}
                        description={element.description}/>
                ))}
            </Carousel>
        </div>
    );
};


