import { TimerButtonsContainer } from "../../../TimerWidget/TimerButtonsContainer";
import SCountdownContainer from "./styles/SCountdownContainer";
import { CountdownBlocksContainer } from "../CountdownBlocksContainer";

type CountdownContainerProps = {
    children: number;
    isHidden?: boolean;
    toggleTimer: () => void;
    resetTimer: () => void;
    disabled?: boolean;
    text: () => string
}

export function CountdownContainer({children, isHidden, toggleTimer, resetTimer, disabled, text}: CountdownContainerProps) {


    return (
            <SCountdownContainer isHidden={isHidden}>
                <CountdownBlocksContainer>{children}</CountdownBlocksContainer>
                <TimerButtonsContainer toggleTimer={toggleTimer} resetTimer={resetTimer} disabled={disabled}>{text()}</TimerButtonsContainer>
            </SCountdownContainer>
    )
}