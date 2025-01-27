import StyledTimeBlock from "./StyledTimeBlock.styles"

export function TimeBlock({children}: {children: string}) {
    return (
        <StyledTimeBlock>{children}</StyledTimeBlock> 
    )
}