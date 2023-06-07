import React from 'react';
import FormWrapper from './FormWrapper';

type UserDataType = {
    какиеОбои:string


}

type InterestSurveyType = UserDataType & {
    updateFields:(fields:Partial<UserDataType> ) => void
}

export const InterestSurvey = ({какиеОбои,updateFields}:InterestSurveyType) => {
    return (
        <>
            <FormWrapper title={'Какая услуга вас интересует?'}>
            <div>
                <input type="radio" id="monochromatic" name="WhichWallpaper" value="Однотонные" onChange={e => updateFields({какиеОбои: e.currentTarget.value})} />
                <label htmlFor="monochromatic">
                    Расчет обои (однотонные)
                </label>
            </div>
            <div>
                <input type="radio" id="WithPattern" name="WhichWallpaper" value="С рисунком" onChange={e => updateFields({какиеОбои: e.currentTarget.value})}  />
                <label htmlFor="WithPattern">
                    Расчет обои (с рисунком)
                </label>
            </div>
            <div>
                <input type="radio" id="combine" name="WhichWallpaper" value="Комбинированный"  onChange={e => updateFields({какиеОбои: e.currentTarget.value})} />
                <label htmlFor="combine">
                    Комбинированный расчет (обои с рисунком и без)
                </label>
            </div>
            </FormWrapper>
        </>
    );
}



