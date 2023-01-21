import styled from "styled-components";
import { colors } from "../../styles/variables.styled";

export const SearchDiv = styled.div`
    width: fill-available;
    display: flex;
    background-color: transparent;
    position: relative;
    img{
        position: absolute;
        top: 5px;
    }
`;

export const Search = styled.input`
    width: 100%;
    height: 2rem;
    background: transparent;
    border: none;
    font-size: 1rem;
    padding-left: 1.5rem;
    color: ${colors.extralightpurple};
    outline: none;
    &::placeholder{
        color: ${colors.extralightpurple};
    }
`;

export const ValueText = styled.p`
    font-size: .9rem;
`;

export const ExerciseName = styled.p`
    margin-top: auto;
    font-size: 1.2rem;
    font-weight: 500;
`;
