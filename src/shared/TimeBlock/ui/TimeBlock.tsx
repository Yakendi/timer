import StyledTimeBlock from "./StyledTimeBlock.styles"

export function TimeBlock({ children = "" }) {
    return (
        <StyledTimeBlock>
            {children}
        </StyledTimeBlock>
    )
}