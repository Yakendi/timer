import styled from "styled-components";

const SLink = styled.a`
    font-size: 42px;
    font-weight: 500;
    color: ${(props => props.theme.colors.primary)};

    :hover {
        color: ${(props => props.theme.colors.secondary)};
    }
`

export default SLink;