import styled from "styled-components";
import { breakpoints, colors } from "../variables.styled";

export const HeadDiv = styled.div`
    padding: 1rem 0 0 0;
    justify-content: space-between;
    background: -webkit-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: -o-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: -ms-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: -moz-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: linear-gradient(125deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
`;

export const TitleDiv = styled.div`
    margin: 1rem 0;
`;

export const ImageDiv = styled.div`
    margin: 0 0 0 1rem;
`;

export const ActionDiv = styled.div`
    padding: 0 0 1rem 0;
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;
    img {
        margin: auto 0;
    }
`;

export const SelectDiv = styled.div`
    display: flex;
    max-height: calc(100vh -160px);
    height: calc(100vh -160px);
    width: max-content;
    white-space: nowrap;
`;

export const OverflowDiv = styled.div`
    overflow-x: scroll;
    ::-webkit-scrollbar {
        height: 6px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: ${colors.darkblueText};
    }
`;

export const SubTitle = styled.p`
    margin: 0.5rem 0 0 1rem;
    color: ${colors.lightpurple};
`;

export const ConfigDiv = styled.div`
    display: flex;
    width: 100vw;
`;

export const ConfigSelectDiv = styled.div`
    max-height: calc(100vh -160px);
    height: calc(100vh -160px);
    width: max-content;
    white-space: nowrap;
`;

export const SuperSetCheckbox = styled.input`
    width: 1.5rem;
    height: 1.5rem;
    margin: 1.5rem 1rem 1rem 1rem;
    color-scheme: none;
    border: 1px solid ${colors.bordergray};
`;

export const TagDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`;

export const MuscleGroupsDiv = styled.div`
    margin: .5rem 0 1rem 0;
    padding-top: 1rem;
`;

export const ExercisesDiv = styled.div`
border-top: 1px solid ${colors.bordergray};
    margin: .5rem 0 1rem 0;
    padding-top: 1rem;
`;

export const MainImage = styled.img`
    width: 70%;
    display: block;
    margin: 1rem auto 0 auto;
`;