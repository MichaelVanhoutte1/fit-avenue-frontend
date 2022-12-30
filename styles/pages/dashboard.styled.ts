import styled from "styled-components";
import { breakpoints, colors } from "../variables.styled";

export const WorkoutsDiv = styled.div``;

export const WorkoutHeadDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 0 1rem;
`;

export const WorkoutText = styled.p`
    text-transform: uppercase;
    font-weight: 500;
`;

export const WorkoutsButton = styled.button`
    background-color: transparent;
    color: ${colors.purple};
    border: none;
    font-weight: 500;
    font-size: 1rem;
`;

export const HeadDiv = styled.div`
    margin: 1rem 0 1rem 1rem;
`;