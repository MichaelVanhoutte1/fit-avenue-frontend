import styled from "styled-components";
import { colors } from "../../../styles/variables.styled";

export const DateDiv = styled.div`
    background-color: ${colors.purple};
    padding: 0.5rem 0.25rem;
    width: fit-content;
    text-align: center;
    border-radius: 0.25rem;
`;

export const Day = styled.p`
    color: ${colors.whiteText};
    font-size: 1.25rem;
`;

export const Month = styled.p`
    color: ${colors.extralightpurple};
    text-transform: uppercase;
`;
