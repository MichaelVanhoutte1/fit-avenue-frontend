import styled from "styled-components";
import { breakpoints, colors } from "../variables.styled";

export const HeadDiv = styled.div`
    margin: 1rem 0;
`;

export const TagDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`;

export const MuscleGroupsDiv = styled.div`
    margin: 1rem 0;
    border-top: 2px solid ${colors.bordergray};
    padding-top: 1rem;
`;

export const AboutDiv = styled.div`
    margin: 1rem 0;
    border-top: 2px solid ${colors.bordergray};
    padding-top: 1rem;
`;

export const ImageDiv = styled.div`
    margin: 0 1rem;
    display: flex;
    justify-content: space-between;
`;

export const MainImage = styled.img`
    width: 70%;
    display: block;
    margin: 1rem auto 0 auto;
`;

export const Text = styled.p`
    font-size: 1.1rem;
    text-align: justify;
    margin: 1rem 1rem 0 1rem;
`;