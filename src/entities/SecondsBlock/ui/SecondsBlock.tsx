import { TimeBlock } from "../../../shared";

export function SecondsBlock({ children }: {children: number}) {
    let seconds = Math.floor(children / (1000) % 60);
    return (
        <TimeBlock>
            { String(seconds).padStart(2, "0") }
        </TimeBlock>
    )
}