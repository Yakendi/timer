import { StyledTimerContainer } from "./StyledTimerContainer.styles";
import { MinutesBlock } from "../../../../entities/TimeBlocks/MinutesBlock";
import { SecondsBlock } from "../../../../entities/TimeBlocks/SecondsBlock";
import { MillisecondsBlock } from "../../../../entities/TimeBlocks/MillisecondsBlock";

export function TimerContainer({children}: {children: number}) {
    const minutes = Math.floor((children / (1000 * 60)) % 60);
    const seconds = Math.floor(children / (1000) % 60);
    const milliseconds = Math.floor((children % 1000) / 10);

    function formatTime(time: number): string {
        return String(time).padStart(2, "0")
    }

    return (
        <StyledTimerContainer>
            <MinutesBlock>{formatTime(minutes)}</MinutesBlock>
            <SecondsBlock>{formatTime(seconds)}</SecondsBlock>
            <MillisecondsBlock>{formatTime(milliseconds)}</MillisecondsBlock>
        </StyledTimerContainer>
    )
}