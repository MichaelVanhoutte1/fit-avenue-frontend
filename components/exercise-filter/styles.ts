import styled from "styled-components";
import { colors } from "../../styles/variables.styled";

export const ExerciseFilterDiv = styled.div`
`;

export const TitleDiv = styled.div`
    margin: 2rem 0;
    h1{
        font-weight: 600;
    }
`;


export const FilterDiv = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    margin-left: -.25rem
`;

export const CloseButton = styled.button`
    background-color: transparent;
    position: absolute;
    right: 1rem;
    top: 1rem;
`;

export const FinishButton = styled.button`
    padding: 1rem 0;
`;