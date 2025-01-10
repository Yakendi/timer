import { TimeBlock } from "../../../shared";

export function MillisecondsBlock({children}: {children: number}) {
    const milliseconds = Math.floor((children % 1000) / 10);
    return (
        <TimeBlock>
            {String(milliseconds).padStart(2, "0")}
        </TimeBlock>
        )
}