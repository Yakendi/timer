import StyledButton from "./StyledButton.styles"

export function Button({
        onClick, 
        children, 
        disabled = false
    }: {
        onClick: () => void, 
        children: string, 
        disabled: boolean
    }) {
    return (
        <StyledButton onClick={onClick} disabled = {disabled}>
            {children}
        </StyledButton>
    )
}