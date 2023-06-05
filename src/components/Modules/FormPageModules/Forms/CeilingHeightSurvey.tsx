import React from 'react';


export const CeilingHeightSurvey = () => {
    return (
        <>
            <h2>Какова высота ваших потолков?</h2>
            <div>
                <input type="radio"
                       id="2.5m"
                       name="CeilHeight"
                       value="2.5м" />
                <label htmlFor="2.5m">
                    2.5 м
                </label>
            </div>
            <div>
                <input type="radio"
                       id="3m"
                       name="CeilHeight"
                       value="3m" />
                <label htmlFor="3m">
                    3 м
                </label>
            </div>
            <div>
                <input type="text"
                       id="other"
                       name="CeilHeight"
                       placeholder={'Точная высота'}
                />
            </div>
        </>
    );
}



