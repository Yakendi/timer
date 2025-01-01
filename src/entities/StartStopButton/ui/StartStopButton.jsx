import { Button } from "../../../shared"

export function StartStopButton({ onClick, children = "Start" }) {
    return (
        <Button onClick = {onClick}>{children}</Button>
    )
}