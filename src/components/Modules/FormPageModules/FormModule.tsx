import React, {FormEvent, useState} from 'react';
import {useMultistepForm} from './hook/useMultistepForm';
import {Button} from '../../UI/Button/Button';
import {InterestSurvey} from './Forms/InterestSurvey';
import {CeilingHeightSurvey} from './Forms/CeilingHeightSurvey';
import {RoomPerimeterSurvey} from './Forms/SupplyConsumptionSurvey';
import {SupplyConsumptionSurvey} from './Forms/RoomPerimeterSurvey';
import {LocationSurvey} from './Forms/LocationSurvey';
 type FormData = {
     какиеОбои:string
     высотаПотолков:string
     периметрПомещения:string
     расходники:string
     локацияОбъекта:string
 }


const INITIAL_DATA: FormData = {
    какиеОбои:'',
    высотаПотолков:'',
    периметрПомещения:'',
    расходники:'',
    локацияОбъекта:'',
}


export const FormModule = () => {
    const [data, setData] = useState(INITIAL_DATA);
    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return {...prev,...fields}
        })

    }

    const {steps, currentStepIndex, step, isFirstStep,isLastStep, back, next} = useMultistepForm(
        [
            <InterestSurvey {...data} updateFields={updateFields}/>,
            <CeilingHeightSurvey {...data} updateFields={updateFields}/>,
            <RoomPerimeterSurvey {...data} updateFields={updateFields}/>,
            <SupplyConsumptionSurvey {...data} updateFields={updateFields}/>,
            <LocationSurvey {...data} updateFields={updateFields}/>
        ])
    function onSubmit (e:FormEvent) {
        e.preventDefault()
        if(!isLastStep) return next()
        alert('you did it!')
        console.log(data)

    }
    return (
        <div style={{position: 'relative', background: 'white', border: '1px solid black', padding: '2rem'}}>
            <form onSubmit={onSubmit}>
                <div> Вопрос {currentStepIndex + 1} из {steps.length}</div>
                {step}
                <div>
                    {isFirstStep && <Button color={'button'} onClick={back}>Back</Button>}
                    <Button type={'submit'} color={'button'}>Next</Button>
                </div>
            </form>
        </div>
    );
};

