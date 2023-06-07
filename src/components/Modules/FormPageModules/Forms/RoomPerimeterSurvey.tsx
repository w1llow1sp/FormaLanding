import React from 'react';
import FormWrapper from './FormWrapper';


type UserDataType = {
    расходники:string


}

type SupplyConsumptionSurveyType = UserDataType & {
    updateFields:(fields:Partial<UserDataType> ) => void
}

export const SupplyConsumptionSurvey = ({расходники,updateFields}:SupplyConsumptionSurveyType) => {
    return (
        <>
            <FormWrapper title={'Считать расходники (клей)?'}>
            <div>
                <input type="radio"
                       id="yes"
                       name="consumables"
                       value="Да"
                       onChange={e => updateFields({расходники: e.currentTarget.value})}/>
                <label htmlFor="yes">
                    Да
                </label>
            </div>
            <div>
                <input type="radio"
                       id="no"
                       name="consumables"
                       value="Нет"
                       onChange={e => updateFields({расходники: e.currentTarget.value})}/>
                <label htmlFor="no">
                    Нет
                </label>
            </div>
            </FormWrapper>
        </>
    );
}



