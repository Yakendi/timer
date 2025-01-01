import { TimeBlock } from "../../../shared";

export function MinutesBlock({ children = "12"}) {
    return (
        <TimeBlock>
            {children}
        </TimeBlock>
    )
}