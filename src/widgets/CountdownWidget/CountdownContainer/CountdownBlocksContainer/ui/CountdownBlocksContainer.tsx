import { MinutesBlock } from "../../../../../entities/TimeBlocks/MinutesBlock";
import { SecondsBlock } from "../../../../../entities/TimeBlocks/SecondsBlock";
import SCountdownBlocksContainer from "./styles/SCountdownBlocksContainer";

export function CountdownBlocksContainer({children}: {children: number}) {
    const minutes = Math.floor(children / 60);
    const seconds = Math.floor(children % 60)

    function formatTime(time: number): string {
        return String(time).padStart(2, "0")
    }
    return (
        <SCountdownBlocksContainer>
            <MinutesBlock>{formatTime(minutes)}</MinutesBlock>
            <SecondsBlock>{formatTime(seconds)}</SecondsBlock>
        </SCountdownBlocksContainer>
    )
}