import styled from "styled-components";
import { colors } from "../../styles/variables.styled";

export const ExerciseDiv = styled.div`
    width: fill-available;
    display: flex;
    border: 2px solid ${colors.bordergray};
    background-color: ${colors.whiteText};
    padding: 1rem;
    margin: 1rem 1rem 0 1rem;
    &.libraryExercise{
        margin: 0;
    }
`;

export const ValueDiv = styled.div`
    margin-left: 1rem;
`;

export const ValueText = styled.p`
    font-size: .9rem;
`;

export const ExerciseName = styled.p`
    margin: auto 0 .25rem 0;
    font-size: 1.2rem;
    font-weight: 500;
`;

export const BoxLabel = styled.div`
    border: 2px solid ${colors.bordergray};
    width: fit-content;
    padding: .15rem .5rem;
    font-size: .8rem;
    margin: .15rem;
`;

export const MuscleGroupsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ImageDiv = styled.div`
    margin: auto 0 auto auto;
`;