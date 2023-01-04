import styled from "styled-components";
import { colors } from "../../styles/variables.styled";

export const ExerciseDiv = styled.div`
    width: fill-available;
    display: flex;
    border: 2px solid ${colors.bordergray};
    background-color: ${colors.whiteText};
    padding: 1rem;
    margin: 1rem 1rem 0 1rem;
`;

export const ValueDiv = styled.div`
    margin-left: 1rem;
`;

export const ValueText = styled.p`
    font-size: .9rem;
`;

export const ExerciseName = styled.p`
    margin-top: auto;
    font-size: 1.2rem;
    font-weight: 500;
`;
