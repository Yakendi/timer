import { TimeBlock } from "../../../shared";

export function SecondsBlock({ children = "98"}) {
    return (
        <TimeBlock>
            { children }
        </TimeBlock>
    )
}