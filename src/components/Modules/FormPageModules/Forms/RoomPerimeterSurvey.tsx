import React from 'react';


export const SupplyConsumptionSurvey = () => {
    return (
        <>
            <h2>Считать расходники (клей)?</h2>
            <div>
                <input type="radio"
                       id="yes"
                       name="consumables"
                       value="Да" />
                <label htmlFor="yes">
                    Да
                </label>
            </div>
            <div>
                <input type="radio"
                       id="no"
                       name="consumables"
                       value="Нет" />
                <label htmlFor="no">
                    Нет
                </label>
            </div>
        </>
    );
}



