import styled from "styled-components";
import { colors } from "../../../styles/variables.styled";

export const ChartDiv = styled.div`
    margin-top: 1rem;
    border-radius: 0.25rem;
    height: fit-content;
    background: -webkit-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: -o-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: -ms-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: -moz-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: linear-gradient(125deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    padding: 0.5rem 0;
    &.header{
        background: transparent;
        margin: 0;
        padding: 0;
    }
`;


export const WorkoutActionsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    height: fit-content;
    margin-top: 1rem;
    &.header{
        margin: 0;
    }
`;

export const WorkoutsCompletedDiv = styled.div`
    margin-left: 1.5rem;
`;

export const ChartContainer = styled.div`
    height: 11rem;
    padding-right: 1rem;
`;

export const WorkoutsCompletedValue = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: ${colors.whiteText};
`;

export const WorkoutsCompletedText = styled.p`
    font-size: 0.9rem;
    color: ${colors.extralightpurple};
`;

export const WorkoutStart = styled.button`
    background: -webkit-linear-gradient(
        325deg,
        rgb(62, 80, 226) 0%,
        rgb(62, 73, 163) 38%,
        rgb(49, 58, 117) 100%
    );
    background: -o-linear-gradient(
        325deg,
        rgb(62, 80, 226) 0%,
        rgb(62, 73, 163) 38%,
        rgb(49, 58, 117) 100%
    );
    background: -ms-linear-gradient(
        325deg,
        rgb(62, 80, 226) 0%,
        rgb(62, 73, 163) 38%,
        rgb(49, 58, 117) 100%
    );
    background: -moz-linear-gradient(
        325deg,
        rgb(62, 80, 226) 0%,
        rgb(62, 73, 163) 38%,
        rgb(49, 58, 117) 100%
    );
    background: linear-gradient(
        125deg,
        rgb(62, 80, 226) 0%,
        rgb(62, 73, 163) 38%,
        rgb(49, 58, 117) 100%
    );

    color: ${colors.whiteText};
    border: none;
    font-weight: 400;
    letter-spacing: 0.1rem;
    height: fit-content;
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    text-transform: uppercase;
    &.header{
        width: -webkit-fill-available;
        padding: 1.4rem
    }
`;

export const ChartHeadDiv = styled.div`
    margin: 1rem 0 1rem 1rem;
`;

export const WorkoutTitle = styled.p`
    font-size: 1.4rem;
    color: ${colors.whiteText};
    margin-bottom: 0.1rem;
`;

export const WorkoutDate = styled.p`
    font-size: 0.9rem;
    color: ${colors.extralightpurple};
`;
