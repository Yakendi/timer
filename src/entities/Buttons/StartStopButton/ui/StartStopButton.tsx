import { Button } from "../../../../shared"

export function StartStopButton({ onClick, children }: {onClick: () => void, children: string}) {
    return (
        <Button onClick = {onClick}>
            {children}
        </Button>
    )
}