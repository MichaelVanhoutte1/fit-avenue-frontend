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
    background: -webkit-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: -o-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: -ms-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: -moz-linear-gradient(325deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    background: linear-gradient(125deg, rgb(62, 73, 163) 0%, rgb(49, 58, 117) 50%);
    border: 2px solid ${colors.purple}; !important;
    width: 15rem;
    border: none;
    padding: 1.3rem 0;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0 1.6rem 1rem 0;
    display: block;
    letter-spacing: 0.1rem;
`;

export const SignUpFacebookButton = styled.button`
    border: 2px solid ${colors.purple} !important;
    color: ${colors.purple};
    background-color: ${colors.whiteText};
    width: 15rem;
    border: none;
    padding: 1.3rem 0;
    text-transform: uppercase;
    font-weight: 600;
    display: block;
    margin: 0 1.6rem 4rem 0;
    letter-spacing: 0.1rem;
`;

export const SignInTitle = styled.h1`
    color: ${colors.blackText};
    text-align: right;
    font-weight: 400;
    margin: 0 3rem 1.5rem 0;
`;

export const SignInButton = styled.a`
    color: ${colors.purple};
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    display: block;
    text-align: end;
    margin-right: 3rem;
    letter-spacing: 0.1rem;
`;

export const ActionDiv = styled.div`
    display: block;
    margin: 27vh 0 0 auto;
    width: fit-content;
`;

export const HeadDiv = styled.div`
    display: block;
    width: fit-content;
    margin: 10vh 0 0 2rem;
`;
