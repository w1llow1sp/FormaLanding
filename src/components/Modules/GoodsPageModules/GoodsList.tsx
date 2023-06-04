import React from 'react';
// import data
import goodsData, {goodsDataType} from './goodsData';
//import components
import GoodsItem from './GoodsItem';

const GoodsList = () => {
    return (
        <section className='goods'>
            <div className='container'>
                <h1 className='goods-header'>Почему нам стоит доверять?</h1>
                <div className='goods__wrapper'>
                    {goodsData.map((goodsData) => (
                        <GoodsItem
                            id={goodsData.id}
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
