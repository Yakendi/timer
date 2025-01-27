import { StartStopButton } from "../../../../entities/Buttons/StartStopButton";
import { ResetButton } from "../../../../entities/Buttons/ResetButton/ResetButton";
import StyledButtonsContainer from "./StyledButtonsContainer.styles"

type TimerButtonsProps = {
  isHidden?: boolean;
  toggleTimer: () => void;
  resetTimer: () => void;
  children: string;
  disabled?: boolean
 }

export function TimerButtonsContainer({toggleTimer, resetTimer, children, disabled}: TimerButtonsProps) {
    return (
      <StyledButtonsContainer>
        <StartStopButton onClick={toggleTimer}>{children}</StartStopButton>
        <ResetButton onClick={resetTimer} disabled={disabled}>{children}</ResetButton>
      </StyledButtonsContainer>
    );
  }