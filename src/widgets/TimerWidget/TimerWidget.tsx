import React from "react";
import { TimerController } from "../../features/timer/model/timerController";
import { ButtonsContainer } from "../ButtonsContainer";
import { TimerContainer } from "../TimerContainer";

function TimerWidget() {
    const {time, toggleTimer, buttonText, resetTimer, isDisabled} = TimerController()
    return (
        <>
            <TimerContainer>{time}</TimerContainer>
            <ButtonsContainer toggleTimer={toggleTimer} resetTimer={resetTimer} disabled={isDisabled}>
                {buttonText()}
            </ButtonsContainer>
        </>
    )
}

export default React.memo(TimerWidget)