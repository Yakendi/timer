import { Button } from '../../../shared';

export function ResetButton({ onClick, children, disabled }: {onClick: () => void, children: string, disabled?: boolean}) {
    return (
        <Button onClick={onClick} disabled={disabled}>
            {children = "Reset"}
        </Button>
    )
}
