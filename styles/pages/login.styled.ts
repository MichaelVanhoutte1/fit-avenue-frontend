import styled from "styled-components";
import { breakpoints, colors } from "../variables.styled";

export const Title = styled.h1`
    color: ${colors.blackText};
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    letter-spacing: 0.05rem;
`;

export const SubTitle = styled.h1`
    color: ${colors.blackText};
    font-weight: 400;
`;

export const SignUpButton = styled.button`
    color: ${colors.whiteText};
    background-color: ${colors.secondary};
    border: 2px solid ${colors.secondary} !important;
    width: 15rem;
    border: none;
    padding: 1.3rem 0;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0 0 1rem 0;
    display: block;
    letter-spacing: 0.1rem;
`;

export const SignUpFacebookButton = styled.button`
    border: 2px solid ${colors.secondary} !important;
    color: ${colors.secondary};
    background-color: ${colors.whiteText};
    width: 15rem;
    border: none;
    padding: 1.3rem 0;
    text-transform: uppercase;
    font-weight: 600;
    display: block;
    margin: 0 0 4rem 0;
    letter-spacing: 0.1rem;
`;

export const SignInTitle = styled.h1`
    color: ${colors.blackText};
    text-align: center;
    font-weight: 400;
    margin-bottom: 1.5rem;
`;

export const SignInButton = styled.a`
    color: ${colors.secondary};
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    display: block;
    text-align: end;
    margin-right: 1.6rem;
    letter-spacing: 0.1rem;
`;

export const ActionDiv = styled.div`
    display: block;
    margin: 0 0 0 auto;
    width: fit-content;
`;

export const HeadDiv = styled.div`
    display: block;
    width: fit-content;
`;
