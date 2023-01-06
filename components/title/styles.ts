import styled from "styled-components";
import { colors } from "../../styles/variables.styled";

export const Text = styled.h1`
    font-size: 1.8rem;
    font-weight: 500;
    margin-left: 1rem;
    color: ${colors.blackText};
    &.small {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 0.95rem;
    }
    &.white {
        color: ${colors.whiteText};
    }
`;
