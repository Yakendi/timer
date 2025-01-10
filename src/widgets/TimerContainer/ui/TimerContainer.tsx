import { StyledTimerContainer } from "./StyledTimerContainer.styles";
import { MinutesBlock } from "../../../entities/MinutesBlock";
import { SecondsBlock } from "../../../entities/SecondsBlock";
import { MillisecondsBlock } from "../../../entities/MillisecondsBlock";

export function TimerContainer({children}: {children: number}) {
    return (
        <StyledTimerContainer>
            <MinutesBlock>{children}</MinutesBlock>
            <SecondsBlock>{children}</SecondsBlock>
            <MillisecondsBlock>{children}</MillisecondsBlock>
        </StyledTimerContainer>
    )
}