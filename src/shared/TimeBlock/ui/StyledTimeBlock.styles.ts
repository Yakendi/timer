import styled from "styled-components";

const StyledTimeBlock = styled.div`
    width: 32%;
    height: 250px;
    padding: 10px;
    border-radius: 12px;
    font-size: 11em;
    font-weight: 400;
    text-align: center;
    color: ${(props => props.theme.colors.buttonColor)};
    background-color: ${(props) => props.theme.colors.primary};
`

export default StyledTimeBlock