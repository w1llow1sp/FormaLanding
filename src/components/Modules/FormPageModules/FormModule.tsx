import React from 'react';
import {useMultistepForm} from './hook/useMultistepForm';
import {Button} from '../../UI/Button/Button';
import {InterestSurvey} from './Forms/InterestSurvey';
import {CeilingHeightSurvey} from './Forms/CeilingHeightSurvey';
import {RoomPerimeterSurvey} from './Forms/SupplyConsumptionSurvey';
import {SupplyConsumptionSurvey} from './Forms/RoomPerimeterSurvey';
import {LocationSurvey} from './Forms/LocationSurvey';

export const FormModule = () => {
    const {steps, currentStepIndex, step, isFirstStep,isLastStep, back, next} = useMultistepForm(
        [
            <InterestSurvey/>,
            <CeilingHeightSurvey/>,
            <RoomPerimeterSurvey/>,
            <SupplyConsumptionSurvey/>,
            <LocationSurvey/>
        ])
    return (
        <div style={{position: 'relative', background: 'white', border: '1px solid black', padding: '2rem'}}>
            <form>
                <div> Вопрос {currentStepIndex + 1} из {steps.length}</div>
                {step}
                <div>
                    {isFirstStep && <Button onClick={back}>Back</Button>}
                    <Button onClick={next}>Next</Button>
                </div>
            </form>
        </div>
    );
};

