import { ResetButton } from "../../../entities/ResetButton/ResetButton"
import { ResetTimer, StartStopTimer } from "../../../features"
import StyledButtonsContainer from "./StyledButtonsContainer.styles"

export function ButtonsContainer () {
    return (
    <StyledButtonsContainer>
        <StartStopTimer />
        <ResetTimer />
    </StyledButtonsContainer>
    )
}