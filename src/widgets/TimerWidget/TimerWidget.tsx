import { TimerController } from "../../features/timer/model/timerController";
import { TimerButtonsContainer } from "./TimerButtonsContainer";
import { TimerContainer } from "./TimerContainer";

export function TimerWidget() {
    const {time, toggleTimer, buttonText, resetTimer, isDisabled} = TimerController()
    return (
        <>
            <TimerContainer>{time}</TimerContainer>
            <TimerButtonsContainer toggleTimer={toggleTimer} resetTimer={resetTimer} disabled={isDisabled}>
                {buttonText()}
            </TimerButtonsContainer>
        </>
    )
}