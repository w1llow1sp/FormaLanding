import React from 'react';
import FormWrapper from './FormWrapper';

type UserDataType = {
    периметрПомещения:string


}

type RoomPerimeterSurveyType = UserDataType & {
    updateFields:(fields:Partial<UserDataType> ) => void
}


export const RoomPerimeterSurvey = ({периметрПомещения,updateFields}:RoomPerimeterSurveyType) => {
    return (
        <>
            <FormWrapper title={'Какой периметр помещения?'}>
            <div>
                <input type="radio"
                       id="lessThan50"
                       name="RoomPerimeter"
                       value="Менее 50м"
                       onChange={e => updateFields({периметрПомещения: e.currentTarget.value})}/>
                <label htmlFor="lessThan50">
                    Менее 50 м
                </label>
            </div>
            <div>
                <input type="radio"
                       id="moreThan50"
                       name="RoomPerimeter"
                       value="Более 50м"
                       onChange={e => updateFields({периметрПомещения: e.currentTarget.value})}/>
                <label htmlFor="moreThan50">
                    Более 50 м
                </label>
            </div>
            <div>
                <input type="text"
                       id="other"
                       name="RoomPerimeter"
                       placeholder={'Точный периметр'}
                       onChange={e => updateFields({периметрПомещения: e.currentTarget.value})}
                       />
            </div>
            </FormWrapper>
        </>
    );
}



