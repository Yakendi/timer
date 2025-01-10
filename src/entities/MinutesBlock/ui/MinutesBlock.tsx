import { TimeBlock } from "../../../shared";

export function MinutesBlock({children}: {children: number}) {
    let minutes = Math.floor(children / (1000 * 60) % 60);
    return (
        <TimeBlock>
            {String(minutes).padStart(2, "0")}
        </TimeBlock>
    )
}