import React from 'react';
import FormWrapper from './FormWrapper';

type UserDataType = {
    высотаПотолков:string
}

type CeilingHeightSurvey = UserDataType & {
    updateFields:(fields:Partial<UserDataType> ) => void
}


export const CeilingHeightSurvey = ({высотаПотолков,updateFields}:CeilingHeightSurvey) => {
    return (
        <>
            <FormWrapper title={'Какова высота ваших потолков?'}>
            <div>
                <input type="radio"
                       id="2.5m"
                       name="CeilHeight"
                       value="2.5м"
                       onChange={e => updateFields({высотаПотолков: e.currentTarget.value})}/>
                <label htmlFor="2.5m">
                    2.5 м
                </label>
            </div>
            <div>
                <input type="radio"
                       id="3m"
                       name="CeilHeight"
                       value="3m"
                       onChange={e => updateFields({высотаПотолков: e.currentTarget.value})}/>
                <label htmlFor="3m">
                    3 м
                </label>
            </div>
            <div>
                <input type="text"
                       id="other"
                       name="CeilHeight"
                       placeholder={'Точная высота'}
                       onChange={e => updateFields({высотаПотолков: e.currentTarget.value})}
                />
            </div>
            </FormWrapper>
        </>
    );
}



