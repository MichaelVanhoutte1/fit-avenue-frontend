import styled from "styled-components";
import { colors } from "../../../styles/variables.styled";

export const SummaryDiv = styled.div`
    display: flex;
    padding: 1rem 0;
    border-bottom: 2px solid ${colors.bordergray};
`;

export const DateDiv = styled.div`
    margin: 0 1rem;
`;

export const WorkoutDiv = styled.div``;

export const PreviousWorkoutText = styled.p`
    font-weight: 400;
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
`;

export const WorkoutName = styled.p`
    font-weight: 600;
    font-size: 1.2rem;
`;

export const Exercises = styled.p`
    font-size: 1rem;
`;
