import React from 'react';


export type ExapmleDataType ={
    id:number
    image:string
    collection:string
    description:string
}

export const ExampleCard = (props: ExapmleDataType) => {
    return (
        <section key={props.id}>
            <div>
                <img src={props.image} alt="image"/>
            </div>
            <div>
                <h4>{props.collection}</h4>
                <p>{props.description}</p>
            </div>

        </section>
    );
};


