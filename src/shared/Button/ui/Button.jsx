import StyledButton from "./StyledButton.styles"

export function Button({ onClick, children }) {
    return (
        <StyledButton onClick={onClick} children = {children} />
    )
}