import React from 'react';


export const InterestSurvey = () => {
    return (
        <>
            <h2>Какая услуга вас интересует?</h2>
            <div>
                <input type="radio" id="monochromatic" name="WhichWallpaper" value="Однотонные" />
                <label htmlFor="monochromatic">
                    Расчет обои (однотонные)
                </label>
            </div>
            <div>
                <input type="radio" id="WithPattern" name="WhichWallpaper" value="С рисунком" />
                <label htmlFor="WithPattern">
                    Расчет обои (с рисунком)
                </label>
            </div>
            <div>
                <input type="radio" id="combine" name="WhichWallpaper" value="Комбинированный" />
                <label htmlFor="combine">
                    Комбинированный расчет (обои с рисунком и без)
                </label>
            </div>
        </>
    );
}



