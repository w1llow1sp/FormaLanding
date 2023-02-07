import React from 'react';

const GoodsItem = (props) => {
    return (
        <div className='goods-list'>
            <div key={props.id} className='goodsCard'>
                <div className='goodsCard__wrapper'>
                    <img
                        src={props.image}
                        alt='icon'
                        className='goodsCard__image'
                    ></img>
                    <div className='goodsCard__header'>
                        <h2 className='goods__name'>{props.name}</h2>
                    </div>
                    <div className='goodsCard__content'>
                        <p className='goods__description'>
                            {props.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoodsItem;
