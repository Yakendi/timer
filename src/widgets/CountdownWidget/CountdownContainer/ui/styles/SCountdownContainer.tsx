import styled from "styled-components";

const SCountdownContainer = styled.div<{isHidden?: boolean}>`
    display: ${(props => props.isHidden ? "none" : "flex")};
    flex-direction: column;
    row-gap: 20px;
    margin: 0 auto;
    width: 75%;
`

export default SCountdownContainer;