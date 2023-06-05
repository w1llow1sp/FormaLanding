import React from 'react';


export const RoomPerimeterSurvey = () => {
    return (
        <>
            <h2>Какой периметр помещения?</h2>
            <div>
                <input type="radio"
                       id="lessThan50"
                       name="RoomPerimeter"
                       value="Менее 50м" />
                <label htmlFor="lessThan50">
                    Менее 50 м
                </label>
            </div>
            <div>
                <input type="radio"
                       id="moreThan50"
                       name="RoomPerimeter"
                       value="Более 50м" />
                <label htmlFor="moreThan50">
                    Более 50 м
                </label>
            </div>
            <div>
                <input type="text"
                       id="other"
                       name="RoomPerimeter"
                       placeholder={'Точный периметр'}
                       />
            </div>
        </>
    );
}



