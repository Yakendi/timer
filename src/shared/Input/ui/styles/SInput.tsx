import styled from "styled-components";
import theme from "../../../../constants/constants.styles";

const SInput = styled.input`
    width: 50%;
    height: auto;
    box-sizing: border-box;
    border-radius: 10px;
    text-align: center;
    font-size: 11rem;
    padding: 10px;
    background-color: ${theme.colors.buttonColor};
    color: ${theme.colors.primary};
`

export default SInput;