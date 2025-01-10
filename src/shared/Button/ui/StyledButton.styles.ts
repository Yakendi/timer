import styled from "styled-components";

const StyledButton = styled.button<{disabled?: boolean}>`
    width: 170px;
    height: 60px;
    border-radius: 6px;
    font-size: 20px;
    font-weight: 500;
    background-color: ${(props => props.disabled ? "#ccc" : props.theme.colors.buttonColor)};
    color: ${(props) => props.disabled ? "#666" : props.theme.colors.primary};
    cursor: ${(props) => props.disabled ? "not-allowed" : "pointer"};
`

export default StyledButton