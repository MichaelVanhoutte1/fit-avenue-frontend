import styled from "styled-components";
import { colors } from "../../styles/variables.styled";

export const ExerciseDiv = styled.div`
    width: fill-available;
`;

export const ValueDiv = styled.div`
    width: 3rem;
    margin: 0 auto;
`;

export const InputValue = styled.input`
    background: transparent;
    outline: none;
    border: none;
    color: ${colors.darkblueText};
    font-size: 1.6rem;
`;

export const UnitText = styled.p`
    font-size: 0.9rem;
`;

export const ConfigurationDiv = styled.div`
    display: flex;
    padding: 1rem 1rem;
`;

export const SetText = styled.p`
    margin: auto 0;
    text-transform: uppercase;
`;

export const Divider = styled.p`
    font-size: 1.6rem;
    margin: auto 0;
`;

export const ButtonDiv = styled.div``;

export const HeadDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem
`;

export const ExerciseTitleDiv = styled.div`
    display: flex;
`;

export const ExerciseTitle = styled.p`
    display: flex;
    font-size: 1.2rem;
    font-weight: 600;
    margin-left: 1rem;
`;

export const RemoveButton = styled.button`
    border-top: 1px solid ${colors.bordergray};
    width: 50%;
    padding: 1rem;
    text-transform: uppercase;
    font-size: 1rem;
    color: ${colors.darkblueText};
    font-weight: 600;
`;

export const AddSetButton = styled.button`
    border-top: 1px solid ${colors.bordergray};
    border-left: 1px solid ${colors.bordergray};
    width: 50%;
    padding: 1rem;
    text-transform: uppercase;
    font-size: 1rem;
    color: ${colors.purple};
    font-weight: 600;
`;
