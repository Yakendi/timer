import { StartStopButton } from "../../../entities/StartStopButton";
import { ResetButton } from "../../../entities/ResetButton/ResetButton";
import StyledButtonsContainer from "./StyledButtonsContainer.styles"

export function ButtonsContainer({
    toggleTimer,
    resetTimer,
    children,
    disabled,
  }: {
    toggleTimer: () => void;
    resetTimer: () => void;
    children: string;
    disabled: boolean;
  }) {
    return (
      <StyledButtonsContainer>
        <StartStopButton onClick={toggleTimer}>
          {children}
        </StartStopButton>
        <ResetButton onClick={resetTimer} disabled={disabled} />
      </StyledButtonsContainer>
    );
  }