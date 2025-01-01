import styled from "styled-components";

const StyledButton = styled.button`
    width: 170px;
    height: 60px;
    border-radius: 6px;
    font-size: 20px;
    font-weight: 500;
    background-color: ${(props => props.theme.colors.buttonColor)};
    color: ${(props) => props.theme.colors.primary};
`

export default StyledButton