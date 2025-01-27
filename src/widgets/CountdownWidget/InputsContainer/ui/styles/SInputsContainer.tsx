import styled from "styled-components";

const SInputsContainer = styled.div<{isHidden: boolean}>`
    display: ${(props => props.isHidden ? "none" : "flex")};
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    width: 75%;
    margin: 0 auto;
`

export default SInputsContainer;