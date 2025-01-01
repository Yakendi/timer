import { StyledTimerContainer } from "./StyledTimerContainer.styles";
import { MinutesBlock } from "../../../entities/MinutesBlock";
import { SecondsBlock } from "../../../entities/SecondsBlock";
import { MillisecondsBlock } from "../../../entities/MillisecondsBlock";

export function TimerContainer() {
    return (
        <StyledTimerContainer>
            <MinutesBlock />
            <SecondsBlock />
            <MillisecondsBlock />
        </StyledTimerContainer>
    )
}