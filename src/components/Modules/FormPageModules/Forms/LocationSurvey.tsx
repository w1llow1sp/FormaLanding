import React from 'react';


export const LocationSurvey = () => {
    return (
        <>
            <h2>Где находится объект? </h2>
            <div>
                <input type="radio"
                       id="Magnitogorsk"
                       name="location"
                       value="Магнитогорск" />
                <label htmlFor="Magnitogorsk">
                    Магнитогорск
                </label>
            </div>
            <div>
                <input type="radio"
                       id="Moscow"
                       name="location"
                       value="Москва" />
                <label htmlFor="Moscow">
                    Москва
                </label>
            </div>
            <div>
                <input type="text"
                       id="other"
                       name="location"
                       placeholder={'Другой город'}
                />
            </div>
        </>
    );
}



