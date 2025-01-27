import styled from "styled-components";
import theme from "../../../constants/constants.styles";

const StyledTimeBlock = styled.div`
    width: 100%;
    height: 250px;
    padding: 10px;
    border-radius: 12px;
    font-size: 11em;
    font-weight: 400;
    text-align: center;
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.primary};
`

export default StyledTimeBlock