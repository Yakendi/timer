import { Button } from '../../shared';

export function ResetButton({ onClick, children = 'Reset', disabled  }) {
    return (
        <Button onClick={onClick} disabled={disabled}>
            {children}
        </Button>
    )
}
