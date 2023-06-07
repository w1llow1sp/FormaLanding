import React from 'react';
import FormWrapper from './FormWrapper';

type UserDataType = {
    локацияОбъекта:string
}

type LocationSurveyType = UserDataType & {
    updateFields:(fields:Partial<UserDataType> ) => void
}


export const LocationSurvey = ({локацияОбъекта,updateFields}:LocationSurveyType) => {
    return (
        <>
            <FormWrapper title={'Где находится объект? '}>

            <div>
                <input type="radio"
                       id="Magnitogorsk"
                       name="location"
                       value="Магнитогорск"
                       onChange={e => updateFields({локацияОбъекта: e.currentTarget.value})}/>
                <label htmlFor="Magnitogorsk">
                    Магнитогорск
                </label>
            </div>
            <div>
                <input type="radio"
                       id="Moscow"
                       name="location"
                       value="Москва"
                       onChange={e => updateFields({локацияОбъекта: e.currentTarget.value})}/>
                <label htmlFor="Moscow">
                    Москва
                </label>
            </div>
            <div>
                <input type="text"
                       id="other"
                       name="location"
                       placeholder={'Другой город'}
                       onChange={e => updateFields({локацияОбъекта: e.currentTarget.value})}
                />
            </div>
            </FormWrapper>
        </>
    );
}



