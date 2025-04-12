import { useInput } from "../../features/input/model/useInput";
import { useTimer } from "../../features/timer/model/useTimer";
import { CountdownContainer } from "./CountdownContainer";
import { InputsContainer } from "./InputsContainer";

export function CountdownWidget() {
    const {blockHidden, isHidden, isActive, setValue, totalTime, minutesValue, secondsValue, changeMinutes, changeSeconds} = useInput();
    const {time, toggleTimer, buttonText, resetTimer, setInitialTime} = useTimer(totalTime, true);

    const handleTime = () => {
        setValue();
        setInitialTime(totalTime);
    }

    return (
        <>
            <InputsContainer isHidden={blockHidden} onMinutesChange={changeMinutes} onSecondsChange={changeSeconds} minutesValue={minutesValue} secondsValue={secondsValue} onSet={handleTime} disabled={isActive}>Set</InputsContainer>
            <CountdownContainer toggleTimer={toggleTimer} resetTimer={resetTimer} isHidden={isHidden} text={buttonText}>{time}</CountdownContainer>
        </>
    )
}