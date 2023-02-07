import React from 'react';

// import data
import goodsData from './goodsData';
//import components
import GoodsItem from './GoodsItem';

const GoodsList = (props) => {
    return (
        <section className='goods'>
            <div className='container'>
                <h1 className='goods-header'>Почему нам стоит доверять?</h1>
                <div className='goods__wrapper'>
                    {goodsData.map((goodsData) => (
                        <GoodsItem
                            key={goodsData.id}
                            image={goodsData.image}
                            name={goodsData.name}
                            description={goodsData.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GoodsList;
